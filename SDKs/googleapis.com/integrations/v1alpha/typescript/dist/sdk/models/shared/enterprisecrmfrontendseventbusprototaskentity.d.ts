import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTaskMetadata } from "./enterprisecrmeventbusprototaskmetadata";
import { EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage } from "./enterprisecrmfrontendseventbusprotoparamspecsmessage";
import { EnterpriseCrmEventbusStats } from "./enterprisecrmeventbusstats";
import { EnterpriseCrmEventbusProtoTaskUiConfig } from "./enterprisecrmeventbusprototaskuiconfig";
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum {
    Task = "TASK",
    AsisTemplate = "ASIS_TEMPLATE",
    IoTemplate = "IO_TEMPLATE"
}
/**
 * Contains a task's metadata and associated information. Next available id: 7
**/
export declare class EnterpriseCrmFrontendsEventbusProtoTaskEntity extends SpeakeasyBase {
    disabledForVpcSc?: boolean;
    metadata?: EnterpriseCrmEventbusProtoTaskMetadata;
    paramSpecs?: EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage;
    stats?: EnterpriseCrmEventbusStats;
    taskType?: EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum;
    uiConfig?: EnterpriseCrmEventbusProtoTaskUiConfig;
}
