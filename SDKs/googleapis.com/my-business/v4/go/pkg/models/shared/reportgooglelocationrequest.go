package shared

type ReportGoogleLocationRequestReportReasonBadLocationEnum string

const (
	ReportGoogleLocationRequestReportReasonBadLocationEnumBadLocationReasonUnspecified ReportGoogleLocationRequestReportReasonBadLocationEnum = "BAD_LOCATION_REASON_UNSPECIFIED"
	ReportGoogleLocationRequestReportReasonBadLocationEnumNotALocation                 ReportGoogleLocationRequestReportReasonBadLocationEnum = "NOT_A_LOCATION"
	ReportGoogleLocationRequestReportReasonBadLocationEnumPermanentlyClosed            ReportGoogleLocationRequestReportReasonBadLocationEnum = "PERMANENTLY_CLOSED"
	ReportGoogleLocationRequestReportReasonBadLocationEnumDoesNotExist                 ReportGoogleLocationRequestReportReasonBadLocationEnum = "DOES_NOT_EXIST"
	ReportGoogleLocationRequestReportReasonBadLocationEnumSpam                         ReportGoogleLocationRequestReportReasonBadLocationEnum = "SPAM"
	ReportGoogleLocationRequestReportReasonBadLocationEnumNotABusiness                 ReportGoogleLocationRequestReportReasonBadLocationEnum = "NOT_A_BUSINESS"
	ReportGoogleLocationRequestReportReasonBadLocationEnumMoved                        ReportGoogleLocationRequestReportReasonBadLocationEnum = "MOVED"
	ReportGoogleLocationRequestReportReasonBadLocationEnumDuplicate                    ReportGoogleLocationRequestReportReasonBadLocationEnum = "DUPLICATE"
)

type ReportGoogleLocationRequestReportReasonBadRecommendationEnum string

const (
	ReportGoogleLocationRequestReportReasonBadRecommendationEnumBadRecommendationReasonUnspecified ReportGoogleLocationRequestReportReasonBadRecommendationEnum = "BAD_RECOMMENDATION_REASON_UNSPECIFIED"
	ReportGoogleLocationRequestReportReasonBadRecommendationEnumNotAStoreFront                     ReportGoogleLocationRequestReportReasonBadRecommendationEnum = "NOT_A_STORE_FRONT"
	ReportGoogleLocationRequestReportReasonBadRecommendationEnumNotPartOfSuggestedChain            ReportGoogleLocationRequestReportReasonBadRecommendationEnum = "NOT_PART_OF_SUGGESTED_CHAIN"
	ReportGoogleLocationRequestReportReasonBadRecommendationEnumIrrelevant                         ReportGoogleLocationRequestReportReasonBadRecommendationEnum = "IRRELEVANT"
)

type ReportGoogleLocationRequest struct {
	LocationGroupName             *string                                                       `json:"locationGroupName"`
	ReportReasonBadLocation       *ReportGoogleLocationRequestReportReasonBadLocationEnum       `json:"reportReasonBadLocation"`
	ReportReasonBadRecommendation *ReportGoogleLocationRequestReportReasonBadRecommendationEnum `json:"reportReasonBadRecommendation"`
	ReportReasonElaboration       *string                                                       `json:"reportReasonElaboration"`
	ReportReasonLanguageCode      *string                                                       `json:"reportReasonLanguageCode"`
}
