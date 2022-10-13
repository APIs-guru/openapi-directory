package shared

type SasPortalNrqzValidationStateEnum string

const (
	SasPortalNrqzValidationStateEnumStateUnspecified SasPortalNrqzValidationStateEnum = "STATE_UNSPECIFIED"
	SasPortalNrqzValidationStateEnumDraft            SasPortalNrqzValidationStateEnum = "DRAFT"
	SasPortalNrqzValidationStateEnumFinal            SasPortalNrqzValidationStateEnum = "FINAL"
)

type SasPortalNrqzValidation struct {
	CaseID    *string                           `json:"caseId"`
	CpiID     *string                           `json:"cpiId"`
	Latitude  *float64                          `json:"latitude"`
	Longitude *float64                          `json:"longitude"`
	State     *SasPortalNrqzValidationStateEnum `json:"state"`
}
