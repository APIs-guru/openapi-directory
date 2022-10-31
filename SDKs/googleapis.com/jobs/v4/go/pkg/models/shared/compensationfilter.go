package shared




type CompensationFilterTypeEnum string

const (
    CompensationFilterTypeEnumFilterTypeUnspecified CompensationFilterTypeEnum = "FILTER_TYPE_UNSPECIFIED"
CompensationFilterTypeEnumUnitOnly CompensationFilterTypeEnum = "UNIT_ONLY"
CompensationFilterTypeEnumUnitAndAmount CompensationFilterTypeEnum = "UNIT_AND_AMOUNT"
CompensationFilterTypeEnumAnnualizedBaseAmount CompensationFilterTypeEnum = "ANNUALIZED_BASE_AMOUNT"
CompensationFilterTypeEnumAnnualizedTotalAmount CompensationFilterTypeEnum = "ANNUALIZED_TOTAL_AMOUNT"
)



type CompensationFilterUnitsEnum string

const (
    CompensationFilterUnitsEnumCompensationUnitUnspecified CompensationFilterUnitsEnum = "COMPENSATION_UNIT_UNSPECIFIED"
CompensationFilterUnitsEnumHourly CompensationFilterUnitsEnum = "HOURLY"
CompensationFilterUnitsEnumDaily CompensationFilterUnitsEnum = "DAILY"
CompensationFilterUnitsEnumWeekly CompensationFilterUnitsEnum = "WEEKLY"
CompensationFilterUnitsEnumMonthly CompensationFilterUnitsEnum = "MONTHLY"
CompensationFilterUnitsEnumYearly CompensationFilterUnitsEnum = "YEARLY"
CompensationFilterUnitsEnumOneTime CompensationFilterUnitsEnum = "ONE_TIME"
CompensationFilterUnitsEnumOtherCompensationUnit CompensationFilterUnitsEnum = "OTHER_COMPENSATION_UNIT"
)


type CompensationFilter struct {
    IncludeJobsWithUnspecifiedCompensationRange *bool `json:"includeJobsWithUnspecifiedCompensationRange,omitempty"`
    Range *CompensationRange `json:"range,omitempty"`
    Type *CompensationFilterTypeEnum `json:"type,omitempty"`
    Units []CompensationFilterUnitsEnum `json:"units,omitempty"`
    
}

