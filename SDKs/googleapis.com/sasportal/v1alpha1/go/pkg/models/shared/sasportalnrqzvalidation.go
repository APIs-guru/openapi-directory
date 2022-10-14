package shared

type SasPortalNrqzValidationStateEnum string

const (
	SasPortalNrqzValidationStateEnumStateUnspecified SasPortalNrqzValidationStateEnum = "STATE_UNSPECIFIED"
	SasPortalNrqzValidationStateEnumDraft            SasPortalNrqzValidationStateEnum = "DRAFT"
	SasPortalNrqzValidationStateEnumFinal            SasPortalNrqzValidationStateEnum = "FINAL"
)

type SasPortalNrqzValidation struct {
	CaseID    *string                           `json:"caseId,omitempty"`
	CpiID     *string                           `json:"cpiId,omitempty"`
	Latitude  *float64                          `json:"latitude,omitempty"`
	Longitude *float64                          `json:"longitude,omitempty"`
	State     *SasPortalNrqzValidationStateEnum `json:"state,omitempty"`
}
