import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the settings associated with a project, folder, organization, billing account, or flexible resource.
**/
export declare class Settings extends SpeakeasyBase {
    disableDefaultSink?: boolean;
    kmsKeyName?: string;
    kmsServiceAccountId?: string;
    name?: string;
    storageLocation?: string;
}
/**
 * Describes the settings associated with a project, folder, organization, billing account, or flexible resource.
**/
export declare class SettingsInput extends SpeakeasyBase {
    disableDefaultSink?: boolean;
    kmsKeyName?: string;
    storageLocation?: string;
}
