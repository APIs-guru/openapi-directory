package shared

type CompensationEntryTypeEnum string

const (
	CompensationEntryTypeEnumCompensationTypeUnspecified CompensationEntryTypeEnum = "COMPENSATION_TYPE_UNSPECIFIED"
	CompensationEntryTypeEnumBase                        CompensationEntryTypeEnum = "BASE"
	CompensationEntryTypeEnumBonus                       CompensationEntryTypeEnum = "BONUS"
	CompensationEntryTypeEnumSigningBonus                CompensationEntryTypeEnum = "SIGNING_BONUS"
	CompensationEntryTypeEnumEquity                      CompensationEntryTypeEnum = "EQUITY"
	CompensationEntryTypeEnumProfitSharing               CompensationEntryTypeEnum = "PROFIT_SHARING"
	CompensationEntryTypeEnumCommissions                 CompensationEntryTypeEnum = "COMMISSIONS"
	CompensationEntryTypeEnumTips                        CompensationEntryTypeEnum = "TIPS"
	CompensationEntryTypeEnumOtherCompensationType       CompensationEntryTypeEnum = "OTHER_COMPENSATION_TYPE"
)

type CompensationEntryUnitEnum string

const (
	CompensationEntryUnitEnumCompensationUnitUnspecified CompensationEntryUnitEnum = "COMPENSATION_UNIT_UNSPECIFIED"
	CompensationEntryUnitEnumHourly                      CompensationEntryUnitEnum = "HOURLY"
	CompensationEntryUnitEnumDaily                       CompensationEntryUnitEnum = "DAILY"
	CompensationEntryUnitEnumWeekly                      CompensationEntryUnitEnum = "WEEKLY"
	CompensationEntryUnitEnumMonthly                     CompensationEntryUnitEnum = "MONTHLY"
	CompensationEntryUnitEnumYearly                      CompensationEntryUnitEnum = "YEARLY"
	CompensationEntryUnitEnumOneTime                     CompensationEntryUnitEnum = "ONE_TIME"
	CompensationEntryUnitEnumOtherCompensationUnit       CompensationEntryUnitEnum = "OTHER_COMPENSATION_UNIT"
)

// CompensationEntry
// A compensation entry that represents one component of compensation, such as base pay, bonus, or other compensation type. Annualization: One compensation entry can be annualized if - it contains valid amount or range. - and its expected_units_per_year is set or can be derived. Its annualized range is determined as (amount or range) times expected_units_per_year.
type CompensationEntry struct {
	Amount               *Money                     `json:"amount,omitempty"`
	Description          *string                    `json:"description,omitempty"`
	ExpectedUnitsPerYear *float64                   `json:"expectedUnitsPerYear,omitempty"`
	Range                *CompensationRange         `json:"range,omitempty"`
	Type                 *CompensationEntryTypeEnum `json:"type,omitempty"`
	Unit                 *CompensationEntryUnitEnum `json:"unit,omitempty"`
}
