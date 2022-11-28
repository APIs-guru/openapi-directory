import { SpeakeasyBase } from "../../../internal/utils";
import { UserPasswordInput } from "./userpassword";
import { PrimaryInstanceSettingsInput } from "./primaryinstancesettings";
import { UserPassword } from "./userpassword";
import { PrimaryInstanceSettings } from "./primaryinstancesettings";
/**
 * Settings for creating an AlloyDB cluster.
**/
export declare class AlloyDbSettingsInput extends SpeakeasyBase {
    initialUser?: UserPasswordInput;
    labels?: Map<string, string>;
    primaryInstanceSettings?: PrimaryInstanceSettingsInput;
    vpcNetwork?: string;
}
/**
 * Settings for creating an AlloyDB cluster.
**/
export declare class AlloyDbSettings extends SpeakeasyBase {
    initialUser?: UserPassword;
    labels?: Map<string, string>;
    primaryInstanceSettings?: PrimaryInstanceSettings;
    vpcNetwork?: string;
}
