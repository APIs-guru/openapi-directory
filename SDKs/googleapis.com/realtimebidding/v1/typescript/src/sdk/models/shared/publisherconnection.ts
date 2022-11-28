import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PublisherConnectionBiddingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Rejected = "REJECTED",
    Approved = "APPROVED"
}

export enum PublisherConnectionPublisherPlatformEnum {
    PublisherPlatformUnspecified = "PUBLISHER_PLATFORM_UNSPECIFIED",
    GoogleAdManager = "GOOGLE_AD_MANAGER",
    Admob = "ADMOB"
}


// PublisherConnection
/** 
 * An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher.
**/
export class PublisherConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=biddingState" })
  biddingState?: PublisherConnectionBiddingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherPlatform" })
  publisherPlatform?: PublisherConnectionPublisherPlatformEnum;
}
