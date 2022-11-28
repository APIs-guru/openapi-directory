import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTaskMetadata } from "./enterprisecrmeventbusprototaskmetadata";
import { EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage } from "./enterprisecrmfrontendseventbusprotoparamspecsmessage";
import { EnterpriseCrmEventbusStats } from "./enterprisecrmeventbusstats";
import { EnterpriseCrmEventbusProtoTaskUiConfig } from "./enterprisecrmeventbusprototaskuiconfig";


export enum EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum {
    Task = "TASK",
    AsisTemplate = "ASIS_TEMPLATE",
    IoTemplate = "IO_TEMPLATE"
}


// EnterpriseCrmFrontendsEventbusProtoTaskEntity
/** 
 * Contains a task's metadata and associated information. Next available id: 7
**/
export class EnterpriseCrmFrontendsEventbusProtoTaskEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabledForVpcSc" })
  disabledForVpcSc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: EnterpriseCrmEventbusProtoTaskMetadata;

  @SpeakeasyMetadata({ data: "json, name=paramSpecs" })
  paramSpecs?: EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: EnterpriseCrmEventbusStats;

  @SpeakeasyMetadata({ data: "json, name=taskType" })
  taskType?: EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uiConfig" })
  uiConfig?: EnterpriseCrmEventbusProtoTaskUiConfig;
}
