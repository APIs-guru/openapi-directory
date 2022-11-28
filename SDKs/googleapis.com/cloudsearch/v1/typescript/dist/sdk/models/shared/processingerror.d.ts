import { SpeakeasyBase } from "../../../internal/utils";
import { FieldViolation } from "./fieldviolation";
export declare enum ProcessingErrorCodeEnum {
    ProcessingErrorCodeUnspecified = "PROCESSING_ERROR_CODE_UNSPECIFIED",
    MalformedRequest = "MALFORMED_REQUEST",
    UnsupportedContentFormat = "UNSUPPORTED_CONTENT_FORMAT",
    IndirectBrokenAcl = "INDIRECT_BROKEN_ACL",
    AclCycle = "ACL_CYCLE"
}
export declare class ProcessingError extends SpeakeasyBase {
    code?: ProcessingErrorCodeEnum;
    errorMessage?: string;
    fieldViolations?: FieldViolation[];
}
