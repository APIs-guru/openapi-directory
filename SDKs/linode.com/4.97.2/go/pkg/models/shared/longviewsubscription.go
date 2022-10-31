package shared




type LongviewSubscriptionIDEnum string

const (
    LongviewSubscriptionIDEnumLongview3 LongviewSubscriptionIDEnum = "longview-3"
LongviewSubscriptionIDEnumLongview10 LongviewSubscriptionIDEnum = "longview-10"
LongviewSubscriptionIDEnumLongview40 LongviewSubscriptionIDEnum = "longview-40"
LongviewSubscriptionIDEnumLongview100 LongviewSubscriptionIDEnum = "longview-100"
)


type LongviewSubscriptionPrice struct {
    Hourly *float64 `json:"hourly,omitempty"`
    Monthly *float64 `json:"monthly,omitempty"`
    
}

type LongviewSubscription struct {
    ClientsIncluded *int64 `json:"clients_included,omitempty"`
    ID *LongviewSubscriptionIDEnum `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Price *LongviewSubscriptionPrice `json:"price,omitempty"`
    
}

