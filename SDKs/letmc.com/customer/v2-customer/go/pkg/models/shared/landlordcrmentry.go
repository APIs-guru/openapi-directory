package shared

type LandlordCrmEntry struct {
	BranchID        *string `json:"BranchID"`
	GlobalReference *string `json:"GlobalReference"`
	Name            *string `json:"Name"`
	Oid             *string `json:"OID"`
}
