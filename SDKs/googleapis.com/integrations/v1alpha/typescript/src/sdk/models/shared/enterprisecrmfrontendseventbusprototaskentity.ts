import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoTaskMetadata } from "./enterprisecrmeventbusprototaskmetadata";
import { EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage } from "./enterprisecrmfrontendseventbusprotoparamspecsmessage";
import { EnterpriseCrmEventbusStats } from "./enterprisecrmeventbusstats";
import { EnterpriseCrmEventbusProtoTaskUiConfig } from "./enterprisecrmeventbusprototaskuiconfig";

export enum EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum {
    Task = "TASK"
,    AsisTemplate = "ASIS_TEMPLATE"
,    IoTemplate = "IO_TEMPLATE"
}


// EnterpriseCrmFrontendsEventbusProtoTaskEntity
/** 
 * Contains a task's metadata and associated information. Next available id: 7
**/
export class EnterpriseCrmFrontendsEventbusProtoTaskEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabledForVpcSc" })
  disabledForVpcSc?: boolean;

  @Metadata({ data: "json, name=metadata" })
  metadata?: EnterpriseCrmEventbusProtoTaskMetadata;

  @Metadata({ data: "json, name=paramSpecs" })
  paramSpecs?: EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage;

  @Metadata({ data: "json, name=stats" })
  stats?: EnterpriseCrmEventbusStats;

  @Metadata({ data: "json, name=taskType" })
  taskType?: EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum;

  @Metadata({ data: "json, name=uiConfig" })
  uiConfig?: EnterpriseCrmEventbusProtoTaskUiConfig;
}
