from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ObbcaData1CreditInterestTierBandSetCalculationMethodEnum(str, Enum):
    COMPOUND = "Compound"
    SIMPLE_INTEREST = "SimpleInterest"

class ObbcaData1CreditInterestTierBandSetDestinationEnum(str, Enum):
    PAY_AWAY = "PayAway"
    SELF_CREDIT = "SelfCredit"

class ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum(str, Enum):
    DAILY = "Daily"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    OTHER = "Other"
    QUARTERLY = "Quarterly"
    PER_STATEMENT_DATE = "PerStatementDate"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum(str, Enum):
    GROSS = "Gross"
    OTHER = "Other"

class ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum(str, Enum):
    DAILY = "Daily"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    OTHER = "Other"
    QUARTERLY = "Quarterly"
    PER_STATEMENT_DATE = "PerStatementDate"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"

class ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum(str, Enum):
    FIXED = "Fixed"
    VARIABLE = "Variable"


@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBand:
    aer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AER' }})
    application_frequency: ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    bank_interest_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankInterestRate' }})
    bank_interest_rate_type: Optional[ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankInterestRateType' }})
    calculation_frequency: Optional[ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    deposit_interest_applied_coverage: Optional[ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DepositInterestAppliedCoverage' }})
    fixed_variable_interest_rate_type: ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedVariableInterestRateType' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_bank_interest_type: Optional[ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherBankInterestType' }})
    other_calculation_frequency: Optional[ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMaximum' }})
    tier_value_minimum: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMinimum' }})
    
class ObbcaData1CreditInterestTierBandSetTierBandMethodEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSet:
    calculation_method: Optional[ObbcaData1CreditInterestTierBandSetCalculationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationMethod' }})
    destination: ObbcaData1CreditInterestTierBandSetDestinationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    tier_band: List[ObbcaData1CreditInterestTierBandSetTierBand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBand' }})
    tier_band_method: ObbcaData1CreditInterestTierBandSetTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterest:
    tier_band_set: List[ObbcaData1CreditInterestTierBandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandSet' }})
    
class ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum(str, Enum):
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

class ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum(str, Enum):
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
    capping_period: Optional[ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum(str, Enum):
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

class ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum(str, Enum):
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
class ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange:
    maximum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumAmount' }})
    maximum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRate' }})
    minimum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumAmount' }})
    minimum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumRate' }})
    
class ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum(str, Enum):
    OTHER = "Other"
    SERVICING = "Servicing"

class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum(str, Enum):
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

class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum(str, Enum):
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
    capping_period: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    OTHER = "Other"

class ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum(str, Enum):
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
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum(str, Enum):
    OTHER = "Other"
    SERVICING = "Servicing"


@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    fee_category: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCategory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetail:
    application_frequency: ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_applicable_range: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeApplicableRange' }})
    fee_category: ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCategory' }})
    fee_charge_cap: Optional[List[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeCap' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_category_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeCategoryType' }})
    other_fee_rate_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesOtherTariffType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObbcaData1OtherFeesChargesTariffTypeEnum(str, Enum):
    ELECTRONIC = "Electronic"
    MIXED = "Mixed"
    OTHER = "Other"


@dataclass_json
@dataclass
class ObbcaData1OtherFeesCharges:
    fee_charge_cap: Optional[List[ObbcaData1OtherFeesChargesFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeCap' }})
    fee_charge_detail: List[ObbcaData1OtherFeesChargesFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeDetail' }})
    other_tariff_type: Optional[ObbcaData1OtherFeesChargesOtherTariffType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherTariffType' }})
    tariff_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TariffName' }})
    tariff_type: Optional[ObbcaData1OtherFeesChargesTariffTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TariffType' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum(str, Enum):
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

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum(str, Enum):
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
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum(str, Enum):
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

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum(str, Enum):
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

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    OTHER = "Other"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum(str, Enum):
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
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum(str, Enum):
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

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum(str, Enum):
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
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail:
    application_frequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalBorrowingAmount' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges:
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    overdraft_fee_charge_detail: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeDetail' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum(str, Enum):
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum(str, Enum):
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

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum(str, Enum):
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
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum(str, Enum):
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

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum(str, Enum):
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

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    OTHER = "Other"

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum(str, Enum):
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
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum(str, Enum):
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

class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum(str, Enum):
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
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail:
    application_frequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalBorrowingAmount' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges:
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    overdraft_fee_charge_detail: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeDetail' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand:
    agreement_length_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgreementLengthMax' }})
    agreement_length_min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgreementLengthMin' }})
    agreement_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgreementPeriod' }})
    bank_guaranteed_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankGuaranteedIndicator' }})
    ear: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EAR' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_fees_charges: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeesCharges' }})
    overdraft_interest_charging_coverage: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftInterestChargingCoverage' }})
    representative_apr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepresentativeAPR' }})
    tier_value_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMax' }})
    tier_value_min: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMin' }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum(str, Enum):
    COMMITTED = "Committed"
    ON_DEMAND = "OnDemand"

class ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum(str, Enum):
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
    overdraft_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftType' }})
    tier_band_method: ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObbcaData1Overdraft:
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_tier_band_set: List[ObbcaData1OverdraftOverdraftTierBandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftTierBandSet' }})
    
class ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum(str, Enum):
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
class ObbcaData1ProductDetails:
    fee_free_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeFreeLength' }})
    fee_free_length_period: Optional[ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeFreeLengthPeriod' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    segment: Optional[List[ObbcaData1ProductDetailsSegmentEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Segment' }})
    

@dataclass_json
@dataclass
class ObbcaData1:
    credit_interest: Optional[ObbcaData1CreditInterest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditInterest' }})
    other_fees_charges: Optional[List[ObbcaData1OtherFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeesCharges' }})
    overdraft: Optional[ObbcaData1Overdraft] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overdraft' }})
    product_details: Optional[ObbcaData1ProductDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductDetails' }})
    
