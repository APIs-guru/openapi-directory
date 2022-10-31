package shared

type InsuranceNetworkStateEnum string

const (
	InsuranceNetworkStateEnumNetworkStateUnspecified InsuranceNetworkStateEnum = "NETWORK_STATE_UNSPECIFIED"
	InsuranceNetworkStateEnumAccepted                InsuranceNetworkStateEnum = "ACCEPTED"
	InsuranceNetworkStateEnumPendingAdd              InsuranceNetworkStateEnum = "PENDING_ADD"
	InsuranceNetworkStateEnumPendingDelete           InsuranceNetworkStateEnum = "PENDING_DELETE"
	InsuranceNetworkStateEnumNotAccepted             InsuranceNetworkStateEnum = "NOT_ACCEPTED"
)

type InsuranceNetwork struct {
	NetworkID    *string                    `json:"networkId,omitempty"`
	NetworkNames map[string]string          `json:"networkNames,omitempty"`
	PayerNames   map[string]string          `json:"payerNames,omitempty"`
	State        *InsuranceNetworkStateEnum `json:"state,omitempty"`
}
