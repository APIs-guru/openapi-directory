package shared

type PublicUpdateSubscriptionStatusRequestLegalBasisEnum string

const (
	PublicUpdateSubscriptionStatusRequestLegalBasisEnumLegitimateInterestPql    PublicUpdateSubscriptionStatusRequestLegalBasisEnum = "LEGITIMATE_INTEREST_PQL"
	PublicUpdateSubscriptionStatusRequestLegalBasisEnumLegitimateInterestClient PublicUpdateSubscriptionStatusRequestLegalBasisEnum = "LEGITIMATE_INTEREST_CLIENT"
	PublicUpdateSubscriptionStatusRequestLegalBasisEnumPerformanceOfContract    PublicUpdateSubscriptionStatusRequestLegalBasisEnum = "PERFORMANCE_OF_CONTRACT"
	PublicUpdateSubscriptionStatusRequestLegalBasisEnumConsentWithNotice        PublicUpdateSubscriptionStatusRequestLegalBasisEnum = "CONSENT_WITH_NOTICE"
	PublicUpdateSubscriptionStatusRequestLegalBasisEnumNonGdpr                  PublicUpdateSubscriptionStatusRequestLegalBasisEnum = "NON_GDPR"
	PublicUpdateSubscriptionStatusRequestLegalBasisEnumProcessAndStore          PublicUpdateSubscriptionStatusRequestLegalBasisEnum = "PROCESS_AND_STORE"
	PublicUpdateSubscriptionStatusRequestLegalBasisEnumLegitimateInterestOther  PublicUpdateSubscriptionStatusRequestLegalBasisEnum = "LEGITIMATE_INTEREST_OTHER"
)

// PublicUpdateSubscriptionStatusRequest
// A request to change the status of a contact's subscription.
type PublicUpdateSubscriptionStatusRequest struct {
	EmailAddress          string                                               `json:"emailAddress"`
	LegalBasis            *PublicUpdateSubscriptionStatusRequestLegalBasisEnum `json:"legalBasis,omitempty"`
	LegalBasisExplanation *string                                              `json:"legalBasisExplanation,omitempty"`
	SubscriptionID        string                                               `json:"subscriptionId"`
}
