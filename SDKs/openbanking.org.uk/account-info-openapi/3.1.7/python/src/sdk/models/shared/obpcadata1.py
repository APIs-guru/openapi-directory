from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ObpcaData1CreditInterestTierBandSetCalculationMethodCalculationMethodEnum(str, Enum):
    COMPOUND = "Compound"
    SIMPLE_INTEREST = "SimpleInterest"

class ObpcaData1CreditInterestTierBandSetDestinationDestinationEnum(str, Enum):
    PAY_AWAY = "PayAway"
    SELF_CREDIT = "SelfCredit"

class ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyApplicationFrequencyEnum(str, Enum):
    PER_ACADEMIC_TERM = "PerAcademicTerm"
    DAILY = "Daily"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    OTHER = "Other"
    QUARTERLY = "Quarterly"
    PER_STATEMENT_DATE = "PerStatementDate"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeBankInterestRateTypeEnum(str, Enum):
    LINKED_BASE_RATE = "LinkedBaseRate"
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyCalculationFrequencyEnum(str, Enum):
    PER_ACADEMIC_TERM = "PerAcademicTerm"
    DAILY = "Daily"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    OTHER = "Other"
    QUARTERLY = "Quarterly"
    PER_STATEMENT_DATE = "PerStatementDate"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageDepositInterestAppliedCoverageEnum(str, Enum):
    TIERED = "Tiered"
    WHOLE = "Whole"

class ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeFixedVariableInterestRateTypeEnum(str, Enum):
    FIXED = "Fixed"
    VARIABLE = "Variable"


@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequencyOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestTypeOtherBankInterestType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequencyOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBand:
    aer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AER' }})
    application_frequency: ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    bank_interest_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankInterestRate' }})
    bank_interest_rate_type: Optional[ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeBankInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankInterestRateType' }})
    calculation_frequency: Optional[ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    deposit_interest_applied_coverage: Optional[ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageDepositInterestAppliedCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DepositInterestAppliedCoverage' }})
    fixed_variable_interest_rate_type: ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeFixedVariableInterestRateTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedVariableInterestRateType' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequencyOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_bank_interest_type: Optional[ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestTypeOtherBankInterestType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherBankInterestType' }})
    other_calculation_frequency: Optional[ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequencyOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMaximum' }})
    tier_value_minimum: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMinimum' }})
    
class ObpcaData1CreditInterestTierBandSetTierBandMethodTierBandMethodEnum(str, Enum):
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSet:
    calculation_method: Optional[ObpcaData1CreditInterestTierBandSetCalculationMethodCalculationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationMethod' }})
    destination: Optional[ObpcaData1CreditInterestTierBandSetDestinationDestinationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    tier_band: List[ObpcaData1CreditInterestTierBandSetTierBand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBand' }})
    tier_band_method: ObpcaData1CreditInterestTierBandSetTierBandMethodTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterestCreditInterest:
    tier_band_set: List[ObpcaData1CreditInterestTierBandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandSet' }})
    
class ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
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

class ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
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
    capping_period: Optional[ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum(str, Enum):
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

class ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum(str, Enum):
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
class ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRangeFeeApplicableRange:
    maximum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumAmount' }})
    maximum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRate' }})
    minimum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumAmount' }})
    minimum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumRate' }})
    
class ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryFeeCategoryEnum(str, Enum):
    OTHER = "Other"
    SERVICING = "Servicing"

class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
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

class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
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
    capping_period: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
class ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeFeeRateTypeEnum(str, Enum):
    LINKED_BASE_RATE = "LinkedBaseRate"
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeFeeTypeEnum(str, Enum):
    SERVICE_C_ACCOUNT_FEE = "ServiceCAccountFee"
    SERVICE_C_ACCOUNT_FEE_MONTHLY = "ServiceCAccountFeeMonthly"
    SERVICE_C_OTHER = "ServiceCOther"
    OTHER = "Other"


@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryTypeOtherFeeCategoryType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateTypeOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryFeeCategoryEnum(str, Enum):
    OTHER = "Other"
    SERVICING = "Servicing"


@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    fee_category: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryFeeCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCategory' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetail:
    application_frequency: ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_applicable_range: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRangeFeeApplicableRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeApplicableRange' }})
    fee_category: ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryFeeCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCategory' }})
    fee_charge_cap: Optional[List[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeCap' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_category_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryTypeOtherFeeCategoryType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeCategoryType' }})
    other_fee_rate_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateTypeOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesOtherFeesCharges:
    fee_charge_cap: Optional[List[ObpcaData1OtherFeesChargesFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeCap' }})
    fee_charge_detail: List[ObpcaData1OtherFeesChargesFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeDetail' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
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
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum(str, Enum):
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum(str, Enum):
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeFeeRateTypeEnum(str, Enum):
    LINKED_BASE_RATE = "LinkedBaseRate"
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeFeeTypeEnum(str, Enum):
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
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
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
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOverdraftFeeChargeCap:
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail:
    application_frequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalBorrowingAmount' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    overdraft_fee_charge_cap: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOverdraftFeeChargeCap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges:
    overdraft_fee_charge_cap: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    overdraft_fee_charge_detail: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeDetail' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
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
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum(str, Enum):
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum(str, Enum):
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeFeeRateTypeEnum(str, Enum):
    LINKED_BASE_RATE = "LinkedBaseRate"
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeFeeTypeEnum(str, Enum):
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
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeOtherFeeRateType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeOtherFeeType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum(str, Enum):
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

class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum(str, Enum):
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
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOverdraftFeeChargeCap:
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeMinMaxTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail:
    application_frequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeFeeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalBorrowingAmount' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    overdraft_fee_charge_cap: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOverdraftFeeChargeCap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges:
    overdraft_fee_charge_cap: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    overdraft_fee_charge_detail: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeDetail' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageOverdraftInterestChargingCoverageEnum(str, Enum):
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
    overdraft_interest_charging_coverage: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageOverdraftInterestChargingCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftInterestChargingCoverage' }})
    representative_apr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepresentativeAPR' }})
    tier_value_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMax' }})
    tier_value_min: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMin' }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeOverdraftTypeEnum(str, Enum):
    COMMITTED = "Committed"
    ON_DEMAND = "OnDemand"
    OTHER = "Other"

class ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodTierBandMethodEnum(str, Enum):
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
    overdraft_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeOverdraftTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftType' }})
    tier_band_method: ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraft:
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
class ObpcaData1ProductDetailsProductDetails:
    monthly_maximum_charge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonthlyMaximumCharge' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    segment: Optional[List[ObpcaData1ProductDetailsSegmentEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Segment' }})
    

@dataclass_json
@dataclass
class ObpcaData1:
    credit_interest: Optional[ObpcaData1CreditInterestCreditInterest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditInterest' }})
    other_fees_charges: Optional[ObpcaData1OtherFeesChargesOtherFeesCharges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeesCharges' }})
    overdraft: Optional[ObpcaData1OverdraftOverdraft] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overdraft' }})
    product_details: Optional[ObpcaData1ProductDetailsProductDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductDetails' }})
    
