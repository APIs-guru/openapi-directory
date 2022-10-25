from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ObpcaData1CreditInterestTierBandSetCalculationMethodEnum(str, Enum):
    COMPOUND = "Compound"
    SIMPLE_INTEREST = "SimpleInterest"

class ObpcaData1CreditInterestTierBandSetDestinationEnum(str, Enum):
    PAY_AWAY = "PayAway"
    SELF_CREDIT = "SelfCredit"

class ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum(str, Enum):
    PER_ACADEMIC_TERM = "PerAcademicTerm"
    DAILY = "Daily"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    OTHER = "Other"
    QUARTERLY = "Quarterly"
    PER_STATEMENT_DATE = "PerStatementDate"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum(str, Enum):
    LINKED_BASE_RATE = "LinkedBaseRate"
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum(str, Enum):
    PER_ACADEMIC_TERM = "PerAcademicTerm"
    DAILY = "Daily"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    OTHER = "Other"
    QUARTERLY = "Quarterly"
    PER_STATEMENT_DATE = "PerStatementDate"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum(str, Enum):
    TIERED = "Tiered"
    WHOLE = "Whole"

class ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum(str, Enum):
    FIXED = "Fixed"
    VARIABLE = "Variable"


@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBand:
    aer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AER' }})
    application_frequency: ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    bank_interest_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankInterestRate' }})
    bank_interest_rate_type: Optional[ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankInterestRateType' }})
    calculation_frequency: Optional[ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    deposit_interest_applied_coverage: Optional[ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DepositInterestAppliedCoverage' }})
    fixed_variable_interest_rate_type: ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedVariableInterestRateType' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_bank_interest_type: Optional[ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherBankInterestType' }})
    other_calculation_frequency: Optional[ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMaximum' }})
    tier_value_minimum: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMinimum' }})
    
class ObpcaData1CreditInterestTierBandSetTierBandMethodEnum(str, Enum):
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSet:
    calculation_method: Optional[ObpcaData1CreditInterestTierBandSetCalculationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationMethod' }})
    destination: Optional[ObpcaData1CreditInterestTierBandSetDestinationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    tier_band: List[ObpcaData1CreditInterestTierBandSetTierBand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBand' }})
    tier_band_method: ObpcaData1CreditInterestTierBandSetTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterest:
    tier_band_set: List[ObpcaData1CreditInterestTierBandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandSet' }})
    
class ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum(str, Enum):
    SERVICE_C_ACCOUNT_FEE = "ServiceCAccountFee"
    SERVICE_C_ACCOUNT_FEE_MONTHLY = "ServiceCAccountFeeMonthly"
    SERVICE_C_OTHER = "ServiceCOther"
    OTHER = "Other"

class ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeCap:
    capping_period: Optional[ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum(str, Enum):
    ACCOUNT_CLOSING = "AccountClosing"
    ACCOUNT_OPENING = "AccountOpening"
    ACADEMIC_TERM = "AcademicTerm"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ACCOUNT_ANNIVERSARY = "OnAccountAnniversary"
    OTHER = "Other"
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

class ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum(str, Enum):
    ACCOUNT_CLOSING = "AccountClosing"
    ACCOUNT_OPENING = "AccountOpening"
    ACADEMIC_TERM = "AcademicTerm"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ACCOUNT_ANNIVERSARY = "OnAccountAnniversary"
    OTHER = "Other"
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
class ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange:
    maximum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumAmount' }})
    maximum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRate' }})
    minimum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumAmount' }})
    minimum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumRate' }})
    
class ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum(str, Enum):
    OTHER = "Other"
    SERVICING = "Servicing"

class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum(str, Enum):
    SERVICE_C_ACCOUNT_FEE = "ServiceCAccountFee"
    SERVICE_C_ACCOUNT_FEE_MONTHLY = "ServiceCAccountFeeMonthly"
    SERVICE_C_OTHER = "ServiceCOther"
    OTHER = "Other"

class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap:
    capping_period: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum(str, Enum):
    LINKED_BASE_RATE = "LinkedBaseRate"
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum(str, Enum):
    SERVICE_C_ACCOUNT_FEE = "ServiceCAccountFee"
    SERVICE_C_ACCOUNT_FEE_MONTHLY = "ServiceCAccountFeeMonthly"
    SERVICE_C_OTHER = "ServiceCOther"
    OTHER = "Other"


@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum(str, Enum):
    OTHER = "Other"
    SERVICING = "Servicing"


@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    fee_category: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCategory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetail:
    application_frequency: ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_applicable_range: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeApplicableRange' }})
    fee_category: ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCategory' }})
    fee_charge_cap: Optional[List[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeCap' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_category_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeCategoryType' }})
    other_fee_rate_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesCharges:
    fee_charge_cap: Optional[List[ObpcaData1OtherFeesChargesFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeCap' }})
    fee_charge_detail: List[ObpcaData1OtherFeesChargesFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeDetail' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    ANNUAL_REVIEW = "AnnualReview"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap:
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum(str, Enum):
    ACCOUNT_CLOSING = "AccountClosing"
    ACCOUNT_OPENING = "AccountOpening"
    ACADEMIC_TERM = "AcademicTerm"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ACCOUNT_ANNIVERSARY = "OnAccountAnniversary"
    OTHER = "Other"
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum(str, Enum):
    ACCOUNT_CLOSING = "AccountClosing"
    ACCOUNT_OPENING = "AccountOpening"
    ACADEMIC_TERM = "AcademicTerm"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ACCOUNT_ANNIVERSARY = "OnAccountAnniversary"
    OTHER = "Other"
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum(str, Enum):
    LINKED_BASE_RATE = "LinkedBaseRate"
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    ANNUAL_REVIEW = "AnnualReview"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"


@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    ANNUAL_REVIEW = "AnnualReview"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail:
    application_frequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalBorrowingAmount' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    overdraft_fee_charge_cap: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges:
    overdraft_fee_charge_cap: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    overdraft_fee_charge_detail: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeDetail' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    ANNUAL_REVIEW = "AnnualReview"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap:
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum(str, Enum):
    ACCOUNT_CLOSING = "AccountClosing"
    ACCOUNT_OPENING = "AccountOpening"
    ACADEMIC_TERM = "AcademicTerm"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ACCOUNT_ANNIVERSARY = "OnAccountAnniversary"
    OTHER = "Other"
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum(str, Enum):
    ACCOUNT_CLOSING = "AccountClosing"
    ACCOUNT_OPENING = "AccountOpening"
    ACADEMIC_TERM = "AcademicTerm"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    PER_ITEM = "PerItem"
    MONTHLY = "Monthly"
    ON_ACCOUNT_ANNIVERSARY = "OnAccountAnniversary"
    OTHER = "Other"
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum(str, Enum):
    LINKED_BASE_RATE = "LinkedBaseRate"
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    ANNUAL_REVIEW = "AnnualReview"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"


@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAY = "Day"
    HALF_YEAR = "Half Year"
    MONTH = "Month"
    QUARTER = "Quarter"
    WEEK = "Week"
    YEAR = "Year"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    ARRANGED_OVERDRAFT = "ArrangedOverdraft"
    EMERGENCY_BORROWING = "EmergencyBorrowing"
    BORROWING_ITEM = "BorrowingItem"
    OVERDRAFT_RENEWAL = "OverdraftRenewal"
    ANNUAL_REVIEW = "AnnualReview"
    OVERDRAFT_SETUP = "OverdraftSetup"
    SURCHARGE = "Surcharge"
    TEMP_OVERDRAFT = "TempOverdraft"
    UNAUTHORISED_BORROWING = "UnauthorisedBorrowing"
    UNAUTHORISED_PAID_TRANS = "UnauthorisedPaidTrans"
    OTHER = "Other"
    UNAUTHORISED_UNPAID_TRANS = "UnauthorisedUnpaidTrans"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum(str, Enum):
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"


@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail:
    application_frequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalBorrowingAmount' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    overdraft_fee_charge_cap: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges:
    overdraft_fee_charge_cap: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    overdraft_fee_charge_detail: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeDetail' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum(str, Enum):
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand:
    bank_guaranteed_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankGuaranteedIndicator' }})
    ear: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EAR' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_fees_charges: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeesCharges' }})
    overdraft_interest_charging_coverage: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftInterestChargingCoverage' }})
    representative_apr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepresentativeAPR' }})
    tier_value_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMax' }})
    tier_value_min: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMin' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum(str, Enum):
    COMMITTED = "Committed"
    ON_DEMAND = "OnDemand"
    OTHER = "Other"

class ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum(str, Enum):
    TIERED = "Tiered"
    WHOLE = "Whole"
    BANDED = "Banded"


@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSet:
    authorised_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorisedIndicator' }})
    buffer_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferAmount' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_fees_charges: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeesCharges' }})
    overdraft_tier_band: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftTierBand' }})
    overdraft_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftType' }})
    tier_band_method: ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObpcaData1Overdraft:
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_tier_band_set: List[ObpcaData1OverdraftOverdraftTierBandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftTierBandSet' }})
    
class ObpcaData1ProductDetailsSegmentEnum(str, Enum):
    BASIC = "Basic"
    BENEFIT_AND_REWARD = "BenefitAndReward"
    CREDIT_INTEREST = "CreditInterest"
    CASHBACK = "Cashback"
    GENERAL = "General"
    GRADUATE = "Graduate"
    OTHER = "Other"
    OVERDRAFT = "Overdraft"
    PACKAGED = "Packaged"
    PREMIUM = "Premium"
    REWARD = "Reward"
    STUDENT = "Student"
    YOUNG_ADULT = "YoungAdult"
    YOUTH = "Youth"


@dataclass_json
@dataclass
class ObpcaData1ProductDetails:
    monthly_maximum_charge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonthlyMaximumCharge' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    segment: Optional[List[ObpcaData1ProductDetailsSegmentEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Segment' }})
    

@dataclass_json
@dataclass
class ObpcaData1:
    credit_interest: Optional[ObpcaData1CreditInterest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditInterest' }})
    other_fees_charges: Optional[ObpcaData1OtherFeesCharges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeesCharges' }})
    overdraft: Optional[ObpcaData1Overdraft] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overdraft' }})
    product_details: Optional[ObpcaData1ProductDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductDetails' }})
    
