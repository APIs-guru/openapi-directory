package shared

type YoutubeAndPartnersBiddingStrategyTypeEnum string

const (
	YoutubeAndPartnersBiddingStrategyTypeEnumYoutubeAndPartnersBiddingStrategyTypeUnspecified         YoutubeAndPartnersBiddingStrategyTypeEnum = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED"
	YoutubeAndPartnersBiddingStrategyTypeEnumYoutubeAndPartnersBiddingStrategyTypeManualCpv           YoutubeAndPartnersBiddingStrategyTypeEnum = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV"
	YoutubeAndPartnersBiddingStrategyTypeEnumYoutubeAndPartnersBiddingStrategyTypeManualCpm           YoutubeAndPartnersBiddingStrategyTypeEnum = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM"
	YoutubeAndPartnersBiddingStrategyTypeEnumYoutubeAndPartnersBiddingStrategyTypeTargetCpa           YoutubeAndPartnersBiddingStrategyTypeEnum = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA"
	YoutubeAndPartnersBiddingStrategyTypeEnumYoutubeAndPartnersBiddingStrategyTypeTargetCpm           YoutubeAndPartnersBiddingStrategyTypeEnum = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM"
	YoutubeAndPartnersBiddingStrategyTypeEnumYoutubeAndPartnersBiddingStrategyTypeMaximizeLift        YoutubeAndPartnersBiddingStrategyTypeEnum = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT"
	YoutubeAndPartnersBiddingStrategyTypeEnumYoutubeAndPartnersBiddingStrategyTypeMaximizeConversions YoutubeAndPartnersBiddingStrategyTypeEnum = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS"
)

// YoutubeAndPartnersBiddingStrategy
// Settings that control the bid strategy for YouTube and Partners resources.
type YoutubeAndPartnersBiddingStrategy struct {
	Type  *YoutubeAndPartnersBiddingStrategyTypeEnum `json:"type,omitempty"`
	Value *string                                    `json:"value,omitempty"`
}
