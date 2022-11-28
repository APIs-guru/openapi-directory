import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The SSH settings for this Linode.
 *
**/
export declare class ManagedLinodeSettingsSsh extends SpeakeasyBase {
    access?: boolean;
    ip?: string;
    port?: number;
    user?: string;
}
/**
 * Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
 *
**/
export declare class ManagedLinodeSettingsInput extends SpeakeasyBase {
    ssh?: ManagedLinodeSettingsSsh;
}
/**
 * Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
 *
**/
export declare class ManagedLinodeSettings extends SpeakeasyBase {
    group?: string;
    id?: number;
    label?: string;
    ssh?: ManagedLinodeSettingsSsh;
}
