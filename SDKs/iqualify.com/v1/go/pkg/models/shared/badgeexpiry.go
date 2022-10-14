package shared

import (
	"time"
)

type BadgeExpiryExpiryTypeEnum string

const (
	BadgeExpiryExpiryTypeEnumDate      BadgeExpiryExpiryTypeEnum = "date"
	BadgeExpiryExpiryTypeEnumTimeframe BadgeExpiryExpiryTypeEnum = "timeframe"
)

type BadgeExpiryTimeframeUnitEnum string

const (
	BadgeExpiryTimeframeUnitEnumDays   BadgeExpiryTimeframeUnitEnum = "days"
	BadgeExpiryTimeframeUnitEnumMonths BadgeExpiryTimeframeUnitEnum = "months"
	BadgeExpiryTimeframeUnitEnumYears  BadgeExpiryTimeframeUnitEnum = "years"
)

type BadgeExpiry struct {
	ExpirationDate  *time.Time                    `json:"expirationDate,omitempty"`
	Expires         *bool                         `json:"expires,omitempty"`
	ExpiryType      *BadgeExpiryExpiryTypeEnum    `json:"expiryType,omitempty"`
	TimeframeAmount *float64                      `json:"timeframeAmount,omitempty"`
	TimeframeUnit   *BadgeExpiryTimeframeUnitEnum `json:"timeframeUnit,omitempty"`
}
