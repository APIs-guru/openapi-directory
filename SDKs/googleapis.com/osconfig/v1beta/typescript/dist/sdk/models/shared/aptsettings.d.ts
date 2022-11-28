import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AptSettingsTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Dist = "DIST",
    Upgrade = "UPGRADE"
}
/**
 * Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
**/
export declare class AptSettings extends SpeakeasyBase {
    excludes?: string[];
    exclusivePackages?: string[];
    type?: AptSettingsTypeEnum;
}
