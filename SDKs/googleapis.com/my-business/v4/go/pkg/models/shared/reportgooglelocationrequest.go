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

// ReportGoogleLocationRequest
// Request message for reporting a GoogleLocation.
type ReportGoogleLocationRequest struct {
	LocationGroupName             *string                                                       `json:"locationGroupName,omitempty"`
	ReportReasonBadLocation       *ReportGoogleLocationRequestReportReasonBadLocationEnum       `json:"reportReasonBadLocation,omitempty"`
	ReportReasonBadRecommendation *ReportGoogleLocationRequestReportReasonBadRecommendationEnum `json:"reportReasonBadRecommendation,omitempty"`
	ReportReasonElaboration       *string                                                       `json:"reportReasonElaboration,omitempty"`
	ReportReasonLanguageCode      *string                                                       `json:"reportReasonLanguageCode,omitempty"`
}
