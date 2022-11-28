import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrmlogErrorCode } from "./crmlogerrorcode";


export enum EnterpriseCrmEventbusProtoErrorDetailSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warn = "WARN",
    Info = "INFO"
}


// EnterpriseCrmEventbusProtoErrorDetail
/** 
 * An error, warning, or information message associated with a workflow.
**/
export class EnterpriseCrmEventbusProtoErrorDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: CrmlogErrorCode;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: EnterpriseCrmEventbusProtoErrorDetailSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=taskNumber" })
  taskNumber?: number;
}
