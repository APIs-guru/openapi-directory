from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ObbcaData1CreditInterestTierBandSetCalculationMethodCalculationMethodEnum(str, Enum):
    COMPOUND = "Compound"
    SIMPLE_INTEREST = "SimpleInterest"

class ObbcaData1CreditInterestTierBandSetDestinationDestinationEnum(str, Enum):
    PAY_AWAY = "PayAway"
    SELF_CREDIT = "SelfCredit"

class ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyApplicationFrequencyEnum(str, Enum):
    DAILY = "Daily"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    OTHER = "Other"
    QUARTERLY = "Quarterly"
    PER_STATEMENT_DATE = "PerStatementDate"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeBankInterestRateTypeEnum(str, Enum):
    GROSS = "Gross"
    OTHER = "Other"

class ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyCalculationFrequencyEnum(str, Enum):
    DAILY = "Daily"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    OTHER = "Other"
    QUARTERLY = "Quarterly"
    PER_STATEMENT_DATE = "PerStatementDate"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageDepositInterestAppliedCoverageEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"

class ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeFixedVariableInterestRateTypeEnum(str, Enum):
    FIXED = "Fixed"
    VARIABLE = "Variable"


@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequencyOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestTypeOtherBankInterestType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequencyOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBand:
    aer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AER' }})
    application_frequency: ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    bank_interest_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankInterestRate' }})
    bank_interest_rate_type: Optional[ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeBankInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankInterestRateType' }})
    calculation_frequency: Optional[ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    deposit_interest_applied_coverage: Optional[ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageDepositInterestAppliedCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DepositInterestAppliedCoverage' }})
    fixed_variable_interest_rate_type: ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeFixedVariableInterestRateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedVariableInterestRateType' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequencyOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_bank_interest_type: Optional[ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestTypeOtherBankInterestType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherBankInterestType' }})
    other_calculation_frequency: Optional[ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequencyOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMaximum' }})
    tier_value_minimum: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMinimum' }})
    
class ObbcaData1CreditInterestTierBandSetTierBandMethodTierBandMethodEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSet:
    calculation_method: Optional[ObbcaData1CreditInterestTierBandSetCalculationMethodCalculationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationMethod' }})
    destination: ObbcaData1CreditInterestTierBandSetDestinationDestinationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    tier_band: List[ObbcaData1CreditInterestTierBandSetTierBand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBand' }})
    tier_band_method: ObbcaData1CreditInterestTierBandSetTierBandMethodTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterestCreditInterest:
    tier_band_set: List[ObbcaData1CreditInterestTierBandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandSet' }})
    
class ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum(str, Enum):
    OTHER = "Other"
    SERVICE_C_ACCOUNT_FEE = "ServiceCAccountFee"
    SERVICE_C_ACCOUNT_FEE_MONTHLY = "ServiceCAccountFeeMonthly"
    SERVICE_C_ACCOUNT_FEE_QUARTERLY = "ServiceCAccountFeeQuarterly"
    SERVICE_C_FIXED_TARIFF = "ServiceCFixedTariff"
    SERVICE_C_BUSI_DEP_ACC_BREAKAGE = "ServiceCBusiDepAccBreakage"
    SERVICE_C_MINIMUM_MONTHLY_FEE = "ServiceCMinimumMonthlyFee"
    SERVICE_C_OTHER = "ServiceCOther"

class ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeCap:
    capping_period: Optional[ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum(str, Enum):
    ON_CLOSING = "OnClosing"
    ON_OPENING = "OnOpening"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ANNIVERSARY = "OnAnniversary"
    OTHER = "Other"
    PER_HUNDRED_POUNDS = "PerHundredPounds"
    PER_HOUR = "PerHour"
    PER_OCCURRENCE = "PerOccurrence"
    PER_SHEET = "PerSheet"
    PER_TRANSACTION = "PerTransaction"
    PER_TRANSACTION_AMOUNT = "PerTransactionAmount"
    PER_TRANSACTION_PERCENTAGE = "PerTransactionPercentage"
    QUARTERLY = "Quarterly"
    SIX_MONTHLY = "SixMonthly"
    STATEMENT_MONTHLY = "StatementMonthly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum(str, Enum):
    ON_CLOSING = "OnClosing"
    ON_OPENING = "OnOpening"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ANNIVERSARY = "OnAnniversary"
    OTHER = "Other"
    PER_HUNDRED_POUNDS = "PerHundredPounds"
    PER_HOUR = "PerHour"
    PER_OCCURRENCE = "PerOccurrence"
    PER_SHEET = "PerSheet"
    PER_TRANSACTION = "PerTransaction"
    PER_TRANSACTION_AMOUNT = "PerTransactionAmount"
    PER_TRANSACTION_PERCENTAGE = "PerTransactionPercentage"
    QUARTERLY = "Quarterly"
    SIX_MONTHLY = "SixMonthly"
    STATEMENT_MONTHLY = "StatementMonthly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRangeFeeApplicableRange:
    maximum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumAmount' }})
    maximum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRate' }})
    minimum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumAmount' }})
    minimum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumRate' }})
    
class ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryFeeCategoryEnum(str, Enum):
    OTHER = "Other"
    SERVICING = "Servicing"

class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum(str, Enum):
    OTHER = "Other"
    SERVICE_C_ACCOUNT_FEE = "ServiceCAccountFee"
    SERVICE_C_ACCOUNT_FEE_MONTHLY = "ServiceCAccountFeeMonthly"
    SERVICE_C_ACCOUNT_FEE_QUARTERLY = "ServiceCAccountFeeQuarterly"
    SERVICE_C_FIXED_TARIFF = "ServiceCFixedTariff"
    SERVICE_C_BUSI_DEP_ACC_BREAKAGE = "ServiceCBusiDepAccBreakage"
    SERVICE_C_MINIMUM_MONTHLY_FEE = "ServiceCMinimumMonthlyFee"
    SERVICE_C_OTHER = "ServiceCOther"

class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap:
    capping_period: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeFeeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    OTHER = "Other"

class ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeFeeTypeEnum(str, Enum):
    OTHER = "Other"
    SERVICE_C_ACCOUNT_FEE = "ServiceCAccountFee"
    SERVICE_C_ACCOUNT_FEE_MONTHLY = "ServiceCAccountFeeMonthly"
    SERVICE_C_ACCOUNT_FEE_QUARTERLY = "ServiceCAccountFeeQuarterly"
    SERVICE_C_FIXED_TARIFF = "ServiceCFixedTariff"
    SERVICE_C_BUSI_DEP_ACC_BREAKAGE = "ServiceCBusiDepAccBreakage"
    SERVICE_C_MINIMUM_MONTHLY_FEE = "ServiceCMinimumMonthlyFee"
    SERVICE_C_OTHER = "ServiceCOther"


@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryTypeOtherFeeCategoryType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateTypeOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryFeeCategoryEnum(str, Enum):
    OTHER = "Other"
    SERVICING = "Servicing"


@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    fee_category: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryFeeCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCategory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetail:
    application_frequency: ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_applicable_range: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRangeFeeApplicableRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeApplicableRange' }})
    fee_category: ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryFeeCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCategory' }})
    fee_charge_cap: Optional[List[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeCap' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_category_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryTypeOtherFeeCategoryType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeCategoryType' }})
    other_fee_rate_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateTypeOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesOtherTariffTypeOtherTariffType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObbcaData1OtherFeesChargesTariffTypeTariffTypeEnum(str, Enum):
    ELECTRONIC = "Electronic"
    MIXED = "Mixed"
    OTHER = "Other"


@dataclass_json
@dataclass
class ObbcaData1OtherFeesCharges:
    fee_charge_cap: Optional[List[ObbcaData1OtherFeesChargesFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeCap' }})
    fee_charge_detail: List[ObbcaData1OtherFeesChargesFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeDetail' }})
    other_tariff_type: Optional[ObbcaData1OtherFeesChargesOtherTariffTypeOtherTariffType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherTariffType' }})
    tariff_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TariffName' }})
    tariff_type: Optional[ObbcaData1OtherFeesChargesTariffTypeTariffTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TariffType' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    ANNUAL_REVIEW = "AnnualReview"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap:
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum(str, Enum):
    ON_CLOSING = "OnClosing"
    ON_OPENING = "OnOpening"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ANNIVERSARY = "OnAnniversary"
    OTHER = "Other"
    PER_HUNDRED_POUNDS = "PerHundredPounds"
    PER_HOUR = "PerHour"
    PER_OCCURRENCE = "PerOccurrence"
    PER_SHEET = "PerSheet"
    PER_TRANSACTION = "PerTransaction"
    PER_TRANSACTION_AMOUNT = "PerTransactionAmount"
    PER_TRANSACTION_PERCENTAGE = "PerTransactionPercentage"
    QUARTERLY = "Quarterly"
    SIX_MONTHLY = "SixMonthly"
    STATEMENT_MONTHLY = "StatementMonthly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum(str, Enum):
    ON_CLOSING = "OnClosing"
    ON_OPENING = "OnOpening"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ANNIVERSARY = "OnAnniversary"
    OTHER = "Other"
    PER_HUNDRED_POUNDS = "PerHundredPounds"
    PER_HOUR = "PerHour"
    PER_OCCURRENCE = "PerOccurrence"
    PER_SHEET = "PerSheet"
    PER_TRANSACTION = "PerTransaction"
    PER_TRANSACTION_AMOUNT = "PerTransactionAmount"
    PER_TRANSACTION_PERCENTAGE = "PerTransactionPercentage"
    QUARTERLY = "Quarterly"
    SIX_MONTHLY = "SixMonthly"
    STATEMENT_MONTHLY = "StatementMonthly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeFeeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    OTHER = "Other"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    ANNUAL_REVIEW = "AnnualReview"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"


@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    ANNUAL_REVIEW = "AnnualReview"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail:
    application_frequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalBorrowingAmount' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges:
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    overdraft_fee_charge_detail: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeDetail' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodAgreementPeriodEnum(str, Enum):
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    ANNUAL_REVIEW = "AnnualReview"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap:
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum(str, Enum):
    ON_CLOSING = "OnClosing"
    ON_OPENING = "OnOpening"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ANNIVERSARY = "OnAnniversary"
    OTHER = "Other"
    PER_HUNDRED_POUNDS = "PerHundredPounds"
    PER_HOUR = "PerHour"
    PER_OCCURRENCE = "PerOccurrence"
    PER_SHEET = "PerSheet"
    PER_TRANSACTION = "PerTransaction"
    PER_TRANSACTION_AMOUNT = "PerTransactionAmount"
    PER_TRANSACTION_PERCENTAGE = "PerTransactionPercentage"
    QUARTERLY = "Quarterly"
    SIX_MONTHLY = "SixMonthly"
    STATEMENT_MONTHLY = "StatementMonthly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum(str, Enum):
    ON_CLOSING = "OnClosing"
    ON_OPENING = "OnOpening"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ANNIVERSARY = "OnAnniversary"
    OTHER = "Other"
    PER_HUNDRED_POUNDS = "PerHundredPounds"
    PER_HOUR = "PerHour"
    PER_OCCURRENCE = "PerOccurrence"
    PER_SHEET = "PerSheet"
    PER_TRANSACTION = "PerTransaction"
    PER_TRANSACTION_AMOUNT = "PerTransactionAmount"
    PER_TRANSACTION_PERCENTAGE = "PerTransactionPercentage"
    QUARTERLY = "Quarterly"
    SIX_MONTHLY = "SixMonthly"
    STATEMENT_MONTHLY = "StatementMonthly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeFeeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    OTHER = "Other"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    ANNUAL_REVIEW = "AnnualReview"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"


@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    ANNUAL_REVIEW = "AnnualReview"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail:
    application_frequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalBorrowingAmount' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges:
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    overdraft_fee_charge_detail: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeDetail' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageOverdraftInterestChargingCoverageEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand:
    agreement_length_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgreementLengthMax' }})
    agreement_length_min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgreementLengthMin' }})
    agreement_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodAgreementPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgreementPeriod' }})
    bank_guaranteed_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankGuaranteedIndicator' }})
    ear: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EAR' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_fees_charges: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeesCharges' }})
    overdraft_interest_charging_coverage: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageOverdraftInterestChargingCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftInterestChargingCoverage' }})
    representative_apr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepresentativeAPR' }})
    tier_value_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMax' }})
    tier_value_min: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMin' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeOverdraftTypeEnum(str, Enum):
    COMMITTED = "Committed"
    ON_DEMAND = "OnDemand"

class ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodTierBandMethodEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSet:
    authorised_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorisedIndicator' }})
    buffer_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferAmount' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_fees_charges: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeesCharges' }})
    overdraft_tier_band: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftTierBand' }})
    overdraft_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeOverdraftTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftType' }})
    tier_band_method: ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraft:
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_tier_band_set: List[ObbcaData1OverdraftOverdraftTierBandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftTierBandSet' }})
    
class ObbcaData1ProductDetailsFeeFreeLengthPeriodFeeFreeLengthPeriodEnum(str, Enum):
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObbcaData1ProductDetailsSegmentEnum(str, Enum):
    CLIENT_ACCOUNT = "ClientAccount"
    STANDARD = "Standard"
    NON_COMMERCIAL_CHAITIES_CLB_SOC = "NonCommercialChaitiesClbSoc"
    NON_COMMERCIAL_PUBLIC_AUTH_GOVT = "NonCommercialPublicAuthGovt"
    RELIGIOUS = "Religious"
    SECTOR_SPECIFIC = "SectorSpecific"
    STARTUP = "Startup"
    SWITCHER = "Switcher"


@dataclass_json
@dataclass
class ObbcaData1ProductDetailsProductDetails:
    fee_free_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeFreeLength' }})
    fee_free_length_period: Optional[ObbcaData1ProductDetailsFeeFreeLengthPeriodFeeFreeLengthPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeFreeLengthPeriod' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    segment: Optional[List[ObbcaData1ProductDetailsSegmentEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Segment' }})
    

@dataclass_json
@dataclass
class ObbcaData1:
    credit_interest: Optional[ObbcaData1CreditInterestCreditInterest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditInterest' }})
    other_fees_charges: Optional[List[ObbcaData1OtherFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeesCharges' }})
    overdraft: Optional[ObbcaData1OverdraftOverdraft] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overdraft' }})
    product_details: Optional[ObbcaData1ProductDetailsProductDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductDetails' }})
    
