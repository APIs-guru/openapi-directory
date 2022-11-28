from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency
    Other application frequencies that are not available in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType:
    r"""ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType
    Other interest rate types which are not available in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency:
    r"""ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency
    Other calculation frequency which is not available in the standard code set.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSetTierBand:
    r"""ObpcaData1CreditInterestTierBandSetTierBand
    Tier Band Details
    """
    
    aer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AER') }})
    application_frequency: ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fixed_variable_interest_rate_type: ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedVariableInterestRateType') }})
    tier_value_minimum: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMinimum') }})
    bank_interest_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankInterestRate') }})
    bank_interest_rate_type: Optional[ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankInterestRateType') }})
    calculation_frequency: Optional[ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    deposit_interest_applied_coverage: Optional[ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DepositInterestAppliedCoverage') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_bank_interest_type: Optional[ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherBankInterestType') }})
    other_calculation_frequency: Optional[ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMaximum') }})
    
class ObpcaData1CreditInterestTierBandSetTierBandMethodEnum(str, Enum):
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObpcaData1CreditInterestTierBandSet:
    r"""ObpcaData1CreditInterestTierBandSet
    The group of tiers or bands for which credit interest can be applied.
    """
    
    tier_band: List[ObpcaData1CreditInterestTierBandSetTierBand] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBand') }})
    tier_band_method: ObpcaData1CreditInterestTierBandSetTierBandMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandMethod') }})
    calculation_method: Optional[ObpcaData1CreditInterestTierBandSetCalculationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationMethod') }})
    destination: Optional[ObpcaData1CreditInterestTierBandSetDestinationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    

@dataclass_json
@dataclass
class ObpcaData1CreditInterest:
    r"""ObpcaData1CreditInterest
    Details about the interest that may be payable to the PCA account holders
    """
    
    tier_band_set: List[ObpcaData1CreditInterestTierBandSet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandSet') }})
    
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
    r"""ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeCap:
    r"""ObpcaData1OtherFeesChargesFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge
    """
    
    fee_type: List[ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    
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
    r"""ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange
    Range or amounts or rates for which the fee/charge applies
    """
    
    maximum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumAmount') }})
    maximum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRate') }})
    minimum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumAmount') }})
    minimum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumRate') }})
    
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
    r"""ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap:
    r"""ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge
    """
    
    fee_type: List[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    
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
    r"""ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency
    Other application frequencies not covered in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency:
    r"""ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency
    Other calculation frequency which is not available in standard code set.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType:
    r"""ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType
    Other fee rate type which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum(str, Enum):
    OTHER = "Other"
    SERVICING = "Servicing"


@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType:
    r"""ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType
    Other Fee/charge type which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    fee_category: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCategory') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesChargesFeeChargeDetail:
    r"""ObpcaData1OtherFeesChargesFeeChargeDetail
    Other fees/charges details
    """
    
    application_frequency: ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fee_category: ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCategory') }})
    fee_type: ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    calculation_frequency: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_applicable_range: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeApplicableRange') }})
    fee_charge_cap: Optional[List[ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCap') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_category_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeCategoryType') }})
    other_fee_rate_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObpcaData1OtherFeesCharges:
    r"""ObpcaData1OtherFeesCharges
    Contains details of fees and charges which are not associated with either borrowing or features/benefits
    """
    
    fee_charge_detail: List[ObpcaData1OtherFeesChargesFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeDetail') }})
    fee_charge_cap: Optional[List[ObpcaData1OtherFeesChargesFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCap') }})
    
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
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge
    """
    
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftControlIndicator') }})
    
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
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
    Other application frequencies that are not available in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
    Other calculation frequency which is not available in the standard code set.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
    Other fee rate type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
    Other Fee type which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
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
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge
    """
    
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftControlIndicator') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
    Details about the fees/charges
    """
    
    application_frequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fee_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncrementalBorrowingAmount') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftControlIndicator') }})
    overdraft_fee_charge_cap: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges
    Overdraft fees and charges details
    """
    
    overdraft_fee_charge_detail: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeDetail') }})
    overdraft_fee_charge_cap: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    
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
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge
    """
    
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftControlIndicator') }})
    
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
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
    Other application frequencies that are not available in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
    Other calculation frequency which is not available in the standard code set.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
    Other fee rate type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
    Other Fee type which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
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
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge
    """
    
    fee_type: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftControlIndicator') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
    Details about the fees/charges
    """
    
    application_frequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fee_type: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncrementalBorrowingAmount') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_rate_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftControlIndicator') }})
    overdraft_fee_charge_cap: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    

@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
    Overdraft fees and charges
    """
    
    overdraft_fee_charge_detail: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeDetail') }})
    overdraft_fee_charge_cap: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum(str, Enum):
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand:
    r"""ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand
    Provides overdraft details for a specific tier or band
    """
    
    tier_value_min: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMin') }})
    bank_guaranteed_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankGuaranteedIndicator') }})
    ear: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EAR') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    overdraft_fees_charges: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeesCharges') }})
    overdraft_interest_charging_coverage: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftInterestChargingCoverage') }})
    representative_apr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepresentativeAPR') }})
    tier_value_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMax') }})
    
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
    r"""ObpcaData1OverdraftOverdraftTierBandSet
    Tier band set details
    """
    
    overdraft_tier_band: List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftTierBand') }})
    tier_band_method: ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandMethod') }})
    authorised_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisedIndicator') }})
    buffer_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferAmount') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    overdraft_fees_charges: Optional[List[ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeesCharges') }})
    overdraft_type: Optional[ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftType') }})
    

@dataclass_json
@dataclass
class ObpcaData1Overdraft:
    r"""ObpcaData1Overdraft
    Details about Overdraft rates, fees & charges
    """
    
    overdraft_tier_band_set: List[ObpcaData1OverdraftOverdraftTierBandSet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftTierBandSet') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    
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
    monthly_maximum_charge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonthlyMaximumCharge') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    segment: Optional[List[ObpcaData1ProductDetailsSegmentEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Segment') }})
    

@dataclass_json
@dataclass
class ObpcaData1:
    credit_interest: Optional[ObpcaData1CreditInterest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditInterest') }})
    other_fees_charges: Optional[ObpcaData1OtherFeesCharges] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeesCharges') }})
    overdraft: Optional[ObpcaData1Overdraft] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Overdraft') }})
    product_details: Optional[ObpcaData1ProductDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductDetails') }})
    
