import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CrmlogErrorCode } from "./crmlogerrorcode";

export enum EnterpriseCrmEventbusProtoErrorDetailSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Error = "ERROR"
,    Warn = "WARN"
,    Info = "INFO"
}


// EnterpriseCrmEventbusProtoErrorDetail
/** 
 * An error, warning, or information message associated with a workflow.
**/
export class EnterpriseCrmEventbusProtoErrorDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: CrmlogErrorCode;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: EnterpriseCrmEventbusProtoErrorDetailSeverityEnum;

  @Metadata({ data: "json, name=taskNumber" })
  taskNumber?: number;
}
