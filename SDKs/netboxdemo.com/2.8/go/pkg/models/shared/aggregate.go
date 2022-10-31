package shared

import (
"time")


type AggregateFamilyLabelEnum string

const (
    AggregateFamilyLabelEnumIPv4 AggregateFamilyLabelEnum = "IPv4"
AggregateFamilyLabelEnumIPv6 AggregateFamilyLabelEnum = "IPv6"
)


type AggregateFamily struct {
    Label AggregateFamilyLabelEnum `json:"label"`
    Value int64 `json:"value"`
    
}

type Aggregate struct {
    Created *time.Time `json:"created,omitempty"`
    CustomFields map[string]interface{} `json:"custom_fields,omitempty"`
    DateAdded *time.Time `json:"date_added,omitempty"`
    Description *string `json:"description,omitempty"`
    Family *AggregateFamily `json:"family,omitempty"`
    ID *int64 `json:"id,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    Prefix string `json:"prefix"`
    Rir NestedRir `json:"rir"`
    Tags []string `json:"tags,omitempty"`
    
}

