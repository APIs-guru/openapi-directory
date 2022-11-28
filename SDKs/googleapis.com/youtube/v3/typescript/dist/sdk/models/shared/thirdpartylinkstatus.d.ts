import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ThirdPartyLinkStatusLinkStatusEnum {
    Unknown = "unknown",
    Failed = "failed",
    Pending = "pending",
    Linked = "linked"
}
/**
 * The third-party link status object contains information about the status of the link.
**/
export declare class ThirdPartyLinkStatus extends SpeakeasyBase {
    linkStatus?: ThirdPartyLinkStatusLinkStatusEnum;
}
