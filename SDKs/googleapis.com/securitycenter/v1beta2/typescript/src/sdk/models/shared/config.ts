import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConfigModuleEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED"
,    Inherited = "INHERITED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


// Config
/** 
 * Configuration of a module.
**/
export class Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=moduleEnablementState" })
  moduleEnablementState?: ConfigModuleEnablementStateEnum;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
