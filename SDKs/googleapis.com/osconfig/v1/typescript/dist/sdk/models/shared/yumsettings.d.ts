import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.
**/
export declare class YumSettings extends SpeakeasyBase {
    excludes?: string[];
    exclusivePackages?: string[];
    minimal?: boolean;
    security?: boolean;
}
