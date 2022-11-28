import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldViolation } from "./fieldviolation";


export enum ProcessingErrorCodeEnum {
    ProcessingErrorCodeUnspecified = "PROCESSING_ERROR_CODE_UNSPECIFIED",
    MalformedRequest = "MALFORMED_REQUEST",
    UnsupportedContentFormat = "UNSUPPORTED_CONTENT_FORMAT",
    IndirectBrokenAcl = "INDIRECT_BROKEN_ACL",
    AclCycle = "ACL_CYCLE"
}


export class ProcessingError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ProcessingErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldViolations", elemType: FieldViolation })
  fieldViolations?: FieldViolation[];
}
