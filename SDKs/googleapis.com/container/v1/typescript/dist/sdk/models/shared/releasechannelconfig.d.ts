import { SpeakeasyBase } from "../../../internal/utils";
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
    channel?: ReleaseChannelConfigChannelEnum;
    defaultVersion?: string;
    validVersions?: string[];
}
