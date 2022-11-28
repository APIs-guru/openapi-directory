import { SpeakeasyBase } from "../../../internal/utils";
export declare enum YoutubeAndPartnersBiddingStrategyTypeEnum {
    YoutubeAndPartnersBiddingStrategyTypeUnspecified = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED",
    YoutubeAndPartnersBiddingStrategyTypeManualCpv = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV",
    YoutubeAndPartnersBiddingStrategyTypeManualCpm = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM",
    YoutubeAndPartnersBiddingStrategyTypeTargetCpa = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA",
    YoutubeAndPartnersBiddingStrategyTypeTargetCpm = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM",
    YoutubeAndPartnersBiddingStrategyTypeMaximizeLift = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT",
    YoutubeAndPartnersBiddingStrategyTypeMaximizeConversions = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS"
}
/**
 * Settings that control the bid strategy for YouTube and Partners resources.
**/
export declare class YoutubeAndPartnersBiddingStrategy extends SpeakeasyBase {
    type?: YoutubeAndPartnersBiddingStrategyTypeEnum;
    value?: string;
}
