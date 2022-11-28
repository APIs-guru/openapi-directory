package shared

// HeldOrgUnit
// The organizational unit covered by a hold. This structure is immutable.
type HeldOrgUnit struct {
	HoldTime  *string `json:"holdTime,omitempty"`
	OrgUnitID *string `json:"orgUnitId,omitempty"`
}
