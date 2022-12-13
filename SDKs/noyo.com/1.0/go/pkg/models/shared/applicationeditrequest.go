package shared

type ApplicationEditRequest struct {
	CarrierGroupID *string `json:"carrier_group_id,omitempty"`
	Notes          *string `json:"notes,omitempty"`
}
