import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConfigModuleEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED",
    Inherited = "INHERITED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


// Config
/** 
 * Configuration of a module.
**/
export class Config extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=moduleEnablementState" })
  moduleEnablementState?: ConfigModuleEnablementStateEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
