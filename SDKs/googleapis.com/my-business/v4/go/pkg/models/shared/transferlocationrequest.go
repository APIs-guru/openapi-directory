package shared

// TransferLocationRequest
// Request message for Locations.TransferLocation.
type TransferLocationRequest struct {
	ToAccount *string `json:"toAccount,omitempty"`
}
