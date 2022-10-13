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
	NetworkID    *string                    `json:"networkId"`
	NetworkNames map[string]string          `json:"networkNames"`
	PayerNames   map[string]string          `json:"payerNames"`
	State        *InsuranceNetworkStateEnum `json:"state"`
}
