import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PublisherConnectionBiddingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Rejected = "REJECTED",
    Approved = "APPROVED"
}
export declare enum PublisherConnectionPublisherPlatformEnum {
    PublisherPlatformUnspecified = "PUBLISHER_PLATFORM_UNSPECIFIED",
    GoogleAdManager = "GOOGLE_AD_MANAGER",
    Admob = "ADMOB"
}
/**
 * An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher.
**/
export declare class PublisherConnection extends SpeakeasyBase {
    biddingState?: PublisherConnectionBiddingStateEnum;
    createTime?: string;
    displayName?: string;
    name?: string;
    publisherPlatform?: PublisherConnectionPublisherPlatformEnum;
}
