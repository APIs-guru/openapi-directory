import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ConfigModuleEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED",
    Inherited = "INHERITED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * Configuration of a module.
**/
export declare class Config extends SpeakeasyBase {
    moduleEnablementState?: ConfigModuleEnablementStateEnum;
    value?: Map<string, any>;
}
