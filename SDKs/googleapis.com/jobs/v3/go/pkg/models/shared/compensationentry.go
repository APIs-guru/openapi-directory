package shared




type CompensationEntryTypeEnum string

const (
    CompensationEntryTypeEnumCompensationTypeUnspecified CompensationEntryTypeEnum = "COMPENSATION_TYPE_UNSPECIFIED"
CompensationEntryTypeEnumBase CompensationEntryTypeEnum = "BASE"
CompensationEntryTypeEnumBonus CompensationEntryTypeEnum = "BONUS"
CompensationEntryTypeEnumSigningBonus CompensationEntryTypeEnum = "SIGNING_BONUS"
CompensationEntryTypeEnumEquity CompensationEntryTypeEnum = "EQUITY"
CompensationEntryTypeEnumProfitSharing CompensationEntryTypeEnum = "PROFIT_SHARING"
CompensationEntryTypeEnumCommissions CompensationEntryTypeEnum = "COMMISSIONS"
CompensationEntryTypeEnumTips CompensationEntryTypeEnum = "TIPS"
CompensationEntryTypeEnumOtherCompensationType CompensationEntryTypeEnum = "OTHER_COMPENSATION_TYPE"
)



type CompensationEntryUnitEnum string

const (
    CompensationEntryUnitEnumCompensationUnitUnspecified CompensationEntryUnitEnum = "COMPENSATION_UNIT_UNSPECIFIED"
CompensationEntryUnitEnumHourly CompensationEntryUnitEnum = "HOURLY"
CompensationEntryUnitEnumDaily CompensationEntryUnitEnum = "DAILY"
CompensationEntryUnitEnumWeekly CompensationEntryUnitEnum = "WEEKLY"
CompensationEntryUnitEnumMonthly CompensationEntryUnitEnum = "MONTHLY"
CompensationEntryUnitEnumYearly CompensationEntryUnitEnum = "YEARLY"
CompensationEntryUnitEnumOneTime CompensationEntryUnitEnum = "ONE_TIME"
CompensationEntryUnitEnumOtherCompensationUnit CompensationEntryUnitEnum = "OTHER_COMPENSATION_UNIT"
)


type CompensationEntry struct {
    Amount *Money `json:"amount,omitempty"`
    Description *string `json:"description,omitempty"`
    ExpectedUnitsPerYear *float64 `json:"expectedUnitsPerYear,omitempty"`
    Range *CompensationRange `json:"range,omitempty"`
    Type *CompensationEntryTypeEnum `json:"type,omitempty"`
    Unit *CompensationEntryUnitEnum `json:"unit,omitempty"`
    
}

