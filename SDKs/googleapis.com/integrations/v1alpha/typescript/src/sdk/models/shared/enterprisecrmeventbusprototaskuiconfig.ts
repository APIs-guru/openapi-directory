import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoTaskUiModuleConfig } from "./enterprisecrmeventbusprototaskuimoduleconfig";


// EnterpriseCrmEventbusProtoTaskUiConfig
/** 
 * Task authors would use this type to configure the UI for a particular task by specifying what UI config modules should be included to compose the UI. Learn more about config module framework: go/integration-platform-config-module-framework
**/
export class EnterpriseCrmEventbusProtoTaskUiConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskUiModuleConfigs", elemType: shared.EnterpriseCrmEventbusProtoTaskUiModuleConfig })
  taskUiModuleConfigs?: EnterpriseCrmEventbusProtoTaskUiModuleConfig[];
}
