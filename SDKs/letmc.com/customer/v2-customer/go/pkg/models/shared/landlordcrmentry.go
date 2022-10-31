package shared

type LandlordCrmEntry struct {
	BranchID        *string `json:"BranchID,omitempty"`
	GlobalReference *string `json:"GlobalReference,omitempty"`
	Name            *string `json:"Name,omitempty"`
	Oid             *string `json:"OID,omitempty"`
}
