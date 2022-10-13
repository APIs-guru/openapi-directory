package shared

type SubaccountsListResponse struct {
	Kind          *string      `json:"kind"`
	NextPageToken *string      `json:"nextPageToken"`
	Subaccounts   []Subaccount `json:"subaccounts"`
}
