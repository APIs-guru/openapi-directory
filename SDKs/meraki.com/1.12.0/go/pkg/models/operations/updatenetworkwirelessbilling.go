package operations

type UpdateNetworkWirelessBillingPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

// UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits
// The uplink bandwidth settings for the pricing plan.
type UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits struct {
	LimitDown *int64 `json:"limitDown,omitempty"`
	LimitUp   *int64 `json:"limitUp,omitempty"`
}

type UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum string

const (
	UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumOneHour    UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum = "1 hour"
	UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumOneDay     UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum = "1 day"
	UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumOneWeek    UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum = "1 week"
	UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnumThirtyDays UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum = "30 days"
)

type UpdateNetworkWirelessBillingRequestBodyPlans struct {
	BandwidthLimits UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits `json:"bandwidthLimits"`
	ID              *string                                                     `json:"id,omitempty"`
	Price           float32                                                     `json:"price"`
	TimeLimit       UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum   `json:"timeLimit"`
}

type UpdateNetworkWirelessBillingRequestBody struct {
	Currency *string                                        `json:"currency,omitempty"`
	Plans    []UpdateNetworkWirelessBillingRequestBodyPlans `json:"plans,omitempty"`
}

type UpdateNetworkWirelessBillingRequest struct {
	PathParams UpdateNetworkWirelessBillingPathParams
	Request    *UpdateNetworkWirelessBillingRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessBillingResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	UpdateNetworkWirelessBilling200ApplicationJSONObject map[string]interface{}
}
