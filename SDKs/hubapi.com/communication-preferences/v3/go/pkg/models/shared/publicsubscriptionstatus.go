package shared

type PublicSubscriptionStatusLegalBasisEnum string

const (
	PublicSubscriptionStatusLegalBasisEnumLegitimateInterestPql    PublicSubscriptionStatusLegalBasisEnum = "LEGITIMATE_INTEREST_PQL"
	PublicSubscriptionStatusLegalBasisEnumLegitimateInterestClient PublicSubscriptionStatusLegalBasisEnum = "LEGITIMATE_INTEREST_CLIENT"
	PublicSubscriptionStatusLegalBasisEnumPerformanceOfContract    PublicSubscriptionStatusLegalBasisEnum = "PERFORMANCE_OF_CONTRACT"
	PublicSubscriptionStatusLegalBasisEnumConsentWithNotice        PublicSubscriptionStatusLegalBasisEnum = "CONSENT_WITH_NOTICE"
	PublicSubscriptionStatusLegalBasisEnumNonGdpr                  PublicSubscriptionStatusLegalBasisEnum = "NON_GDPR"
	PublicSubscriptionStatusLegalBasisEnumProcessAndStore          PublicSubscriptionStatusLegalBasisEnum = "PROCESS_AND_STORE"
	PublicSubscriptionStatusLegalBasisEnumLegitimateInterestOther  PublicSubscriptionStatusLegalBasisEnum = "LEGITIMATE_INTEREST_OTHER"
)

type PublicSubscriptionStatusSourceOfStatusEnum string

const (
	PublicSubscriptionStatusSourceOfStatusEnumPortalWideStatus   PublicSubscriptionStatusSourceOfStatusEnum = "PORTAL_WIDE_STATUS"
	PublicSubscriptionStatusSourceOfStatusEnumBrandWideStatus    PublicSubscriptionStatusSourceOfStatusEnum = "BRAND_WIDE_STATUS"
	PublicSubscriptionStatusSourceOfStatusEnumSubscriptionStatus PublicSubscriptionStatusSourceOfStatusEnum = "SUBSCRIPTION_STATUS"
)

type PublicSubscriptionStatusStatusEnum string

const (
	PublicSubscriptionStatusStatusEnumSubscribed    PublicSubscriptionStatusStatusEnum = "SUBSCRIBED"
	PublicSubscriptionStatusStatusEnumNotSubscribed PublicSubscriptionStatusStatusEnum = "NOT_SUBSCRIBED"
)

// PublicSubscriptionStatus
// The status of a subscription for a contact.
type PublicSubscriptionStatus struct {
	BrandID               *int64                                     `json:"brandId,omitempty"`
	Description           string                                     `json:"description"`
	ID                    string                                     `json:"id"`
	LegalBasis            *PublicSubscriptionStatusLegalBasisEnum    `json:"legalBasis,omitempty"`
	LegalBasisExplanation *string                                    `json:"legalBasisExplanation,omitempty"`
	Name                  string                                     `json:"name"`
	PreferenceGroupName   *string                                    `json:"preferenceGroupName,omitempty"`
	SourceOfStatus        PublicSubscriptionStatusSourceOfStatusEnum `json:"sourceOfStatus"`
	Status                PublicSubscriptionStatusStatusEnum         `json:"status"`
}
