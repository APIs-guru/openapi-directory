import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VersionKindEnum {
    VersionKindUnspecified = "VERSION_KIND_UNSPECIFIED",
    Normal = "NORMAL",
    Minimum = "MINIMUM",
    Maximum = "MAXIMUM"
}
/**
 * Version contains structured information about the version of a package.
**/
export declare class Version extends SpeakeasyBase {
    epoch?: number;
    inclusive?: boolean;
    kind?: VersionKindEnum;
    name?: string;
    revision?: string;
}
