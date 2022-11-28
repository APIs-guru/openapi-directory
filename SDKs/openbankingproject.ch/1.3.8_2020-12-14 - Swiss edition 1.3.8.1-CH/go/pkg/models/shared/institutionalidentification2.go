package shared

// InstitutionalIdentification2
// Institiutional identification of a bank (Clearing System Member ID)
// adapted from ISO pain.001.001.03.ch.02 ClearingSystemMemberIdentification2
type InstitutionalIdentification2 struct {
	ClearingSystemIDCode   string `json:"clearingSystemIdCode"`
	ClearingSystemMemberID string `json:"clearingSystemMemberId"`
}
