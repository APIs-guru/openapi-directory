package shared

// SubaccountsListResponse
// Subaccount List Response
type SubaccountsListResponse struct {
	Kind          *string      `json:"kind,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Subaccounts   []Subaccount `json:"subaccounts,omitempty"`
}
