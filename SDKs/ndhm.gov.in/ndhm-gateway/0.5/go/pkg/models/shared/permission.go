package shared

import (
	"time"
)

type PermissionAccessModeEnum string

const (
	PermissionAccessModeEnumView   PermissionAccessModeEnum = "VIEW"
	PermissionAccessModeEnumStore  PermissionAccessModeEnum = "STORE"
	PermissionAccessModeEnumQuery  PermissionAccessModeEnum = "QUERY"
	PermissionAccessModeEnumStream PermissionAccessModeEnum = "STREAM"
)

type PermissionDateRange struct {
	From *time.Time `json:"from"`
	To   *time.Time `json:"to"`
}

type PermissionFrequencyUnitEnum string

const (
	PermissionFrequencyUnitEnumHour  PermissionFrequencyUnitEnum = "HOUR"
	PermissionFrequencyUnitEnumWeek  PermissionFrequencyUnitEnum = "WEEK"
	PermissionFrequencyUnitEnumDay   PermissionFrequencyUnitEnum = "DAY"
	PermissionFrequencyUnitEnumMonth PermissionFrequencyUnitEnum = "MONTH"
	PermissionFrequencyUnitEnumYear  PermissionFrequencyUnitEnum = "YEAR"
)

type PermissionFrequency struct {
	Repeats *int64                       `json:"repeats"`
	Unit    *PermissionFrequencyUnitEnum `json:"unit"`
	Value   *int64                       `json:"value"`
}

type Permission struct {
	AccessMode  PermissionAccessModeEnum `json:"accessMode"`
	DataEraseAt time.Time                `json:"dataEraseAt"`
	DateRange   PermissionDateRange      `json:"dateRange"`
	Frequency   PermissionFrequency      `json:"frequency"`
}
