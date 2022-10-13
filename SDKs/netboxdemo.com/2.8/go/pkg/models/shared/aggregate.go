package shared

import (
	"time"
)

type AggregateFamilyLabelEnum string

const (
	AggregateFamilyLabelEnumIPv4 AggregateFamilyLabelEnum = "IPv4"
	AggregateFamilyLabelEnumIPv6 AggregateFamilyLabelEnum = "IPv6"
)

type AggregateFamilyFamily struct {
	Label AggregateFamilyLabelEnum `json:"label"`
	Value int64                    `json:"value"`
}

type Aggregate struct {
	Created      *time.Time             `json:"created"`
	CustomFields map[string]interface{} `json:"custom_fields"`
	DateAdded    *time.Time             `json:"date_added"`
	Description  *string                `json:"description"`
	Family       *AggregateFamilyFamily `json:"family"`
	ID           *int64                 `json:"id"`
	LastUpdated  *time.Time             `json:"last_updated"`
	Prefix       string                 `json:"prefix"`
	Rir          NestedRir              `json:"rir"`
	Tags         []string               `json:"tags"`
}
