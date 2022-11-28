import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
**/
export declare class ZypperSettings extends SpeakeasyBase {
    categories?: string[];
    excludes?: string[];
    exclusivePatches?: string[];
    severities?: string[];
    withOptional?: boolean;
    withUpdate?: boolean;
}
