import { SpeakeasyBase } from "../../../internal/utils";
import { AvailableVersion } from "./availableversion";
export declare enum ReleaseChannelConfigChannelEnum {
    Unspecified = "UNSPECIFIED",
    Rapid = "RAPID",
    Regular = "REGULAR",
    Stable = "STABLE"
}
/**
 * ReleaseChannelConfig exposes configuration for a release channel.
**/
export declare class ReleaseChannelConfig extends SpeakeasyBase {
    availableVersions?: AvailableVersion[];
    channel?: ReleaseChannelConfigChannelEnum;
    defaultVersion?: string;
    validVersions?: string[];
}
