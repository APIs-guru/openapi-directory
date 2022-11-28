package shared

// TransferLocationRequest
// Request message for AccessControl.TransferLocation.
type TransferLocationRequest struct {
	DestinationAccount *string `json:"destinationAccount,omitempty"`
}
