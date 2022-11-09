import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FieldViolation } from "./fieldviolation";

export enum ProcessingErrorCodeEnum {
    ProcessingErrorCodeUnspecified = "PROCESSING_ERROR_CODE_UNSPECIFIED"
,    MalformedRequest = "MALFORMED_REQUEST"
,    UnsupportedContentFormat = "UNSUPPORTED_CONTENT_FORMAT"
,    IndirectBrokenAcl = "INDIRECT_BROKEN_ACL"
,    AclCycle = "ACL_CYCLE"
}


export class ProcessingError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ProcessingErrorCodeEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=fieldViolations", elemType: shared.FieldViolation })
  fieldViolations?: FieldViolation[];
}
