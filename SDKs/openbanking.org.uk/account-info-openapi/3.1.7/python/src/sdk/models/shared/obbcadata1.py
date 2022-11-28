from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency
    Other application frequencies that are not available in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType:
    r"""ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType
    Other interest rate types which are not available in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency:
    r"""ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency
    Other calculation frequency which is not available in the standard code set.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSetTierBand:
    r"""ObbcaData1CreditInterestTierBandSetTierBand
    Tier Band Details
    """
    
    aer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AER') }})
    application_frequency: ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fixed_variable_interest_rate_type: ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedVariableInterestRateType') }})
    tier_value_minimum: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMinimum') }})
    bank_interest_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankInterestRate') }})
    bank_interest_rate_type: Optional[ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankInterestRateType') }})
    calculation_frequency: Optional[ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    deposit_interest_applied_coverage: Optional[ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DepositInterestAppliedCoverage') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_bank_interest_type: Optional[ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherBankInterestType') }})
    other_calculation_frequency: Optional[ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMaximum') }})
    
class ObbcaData1CreditInterestTierBandSetTierBandMethodEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObbcaData1CreditInterestTierBandSet:
    r"""ObbcaData1CreditInterestTierBandSet
    The group of tiers or bands for which credit interest can be applied.
    """
    
    destination: ObbcaData1CreditInterestTierBandSetDestinationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    tier_band: List[ObbcaData1CreditInterestTierBandSetTierBand] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBand') }})
    tier_band_method: ObbcaData1CreditInterestTierBandSetTierBandMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandMethod') }})
    calculation_method: Optional[ObbcaData1CreditInterestTierBandSetCalculationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationMethod') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    

@dataclass_json
@dataclass
class ObbcaData1CreditInterest:
    r"""ObbcaData1CreditInterest
    Details about the interest that may be payable to the BCA account holders
    """
    
    tier_band_set: List[ObbcaData1CreditInterestTierBandSet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandSet') }})
    
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
    r"""ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeCap:
    r"""ObbcaData1OtherFeesChargesFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular or group of fee/charge
    """
    
    fee_type: List[ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    
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
    r"""ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange
    Range or amounts or rates for which the fee/charge applies
    """
    
    maximum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumAmount') }})
    maximum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRate') }})
    minimum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumAmount') }})
    minimum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumRate') }})
    
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
    r"""ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap:
    r"""ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular or group of fee/charge
    """
    
    fee_type: List[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    
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
    r"""ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency
    Other application frequencies not covered in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency:
    r"""ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency
    Other calculation frequency which is not available in standard code set.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType:
    r"""ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType
    Other fee rate type which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum(str, Enum):
    OTHER = "Other"
    SERVICING = "Servicing"


@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType:
    r"""ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType
    Other Fee/charge type which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    fee_category: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCategory') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesFeeChargeDetail:
    r"""ObbcaData1OtherFeesChargesFeeChargeDetail
    Other fees/charges details
    """
    
    application_frequency: ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fee_category: ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCategory') }})
    fee_type: ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    calculation_frequency: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_applicable_range: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeApplicableRange') }})
    fee_charge_cap: Optional[List[ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCap') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NegotiableIndicator') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_category_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeCategoryType') }})
    other_fee_rate_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObbcaData1OtherFeesChargesOtherTariffType:
    r"""ObbcaData1OtherFeesChargesOtherTariffType
    Other tariff type which is not in the standard list.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
class ObbcaData1OtherFeesChargesTariffTypeEnum(str, Enum):
    ELECTRONIC = "Electronic"
    MIXED = "Mixed"
    OTHER = "Other"


@dataclass_json
@dataclass
class ObbcaData1OtherFeesCharges:
    r"""ObbcaData1OtherFeesCharges
    Contains details of fees and charges which are not associated with either Overdraft or features/benefits
    """
    
    fee_charge_detail: List[ObbcaData1OtherFeesChargesFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeDetail') }})
    fee_charge_cap: Optional[List[ObbcaData1OtherFeesChargesFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCap') }})
    other_tariff_type: Optional[ObbcaData1OtherFeesChargesOtherTariffType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherTariffType') }})
    tariff_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TariffName') }})
    tariff_type: Optional[ObbcaData1OtherFeesChargesTariffTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TariffType') }})
    
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
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
    """
    
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    
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
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
    Other application frequencies that are not available in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
    Other calculation frequency which is not available in the standard code set.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
    Other fee rate type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
    Other Fee type which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
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
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
    """
    
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
    Details about the fees/charges
    """
    
    application_frequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fee_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncrementalBorrowingAmount') }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NegotiableIndicator') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftControlIndicator') }})
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges
    Overdraft fees and charges details
    """
    
    overdraft_fee_charge_detail: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeDetail') }})
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    
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
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
    """
    
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    
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
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
    Other application frequencies that are not available in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
    Other calculation frequency which is not available in the standard code set.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
    Other fee rate type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
    Other Fee type which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
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
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
    """
    
    fee_type: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
    Details about the fees/charges
    """
    
    application_frequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fee_type: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncrementalBorrowingAmount') }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NegotiableIndicator') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_rate_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftControlIndicator') }})
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    

@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
    Overdraft fees and charges
    """
    
    overdraft_fee_charge_detail: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeDetail') }})
    overdraft_fee_charge_cap: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"


@dataclass_json
@dataclass
class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand:
    r"""ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand
    Provides overdraft details for a specific tier or band
    """
    
    tier_value_min: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMin') }})
    agreement_length_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgreementLengthMax') }})
    agreement_length_min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgreementLengthMin') }})
    agreement_period: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgreementPeriod') }})
    bank_guaranteed_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankGuaranteedIndicator') }})
    ear: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EAR') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    overdraft_fees_charges: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeesCharges') }})
    overdraft_interest_charging_coverage: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftInterestChargingCoverage') }})
    representative_apr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepresentativeAPR') }})
    tier_value_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMax') }})
    
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
    r"""ObbcaData1OverdraftOverdraftTierBandSet
    Tier band set details
    """
    
    overdraft_tier_band: List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftTierBand') }})
    tier_band_method: ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandMethod') }})
    authorised_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisedIndicator') }})
    buffer_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferAmount') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    overdraft_fees_charges: Optional[List[ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeesCharges') }})
    overdraft_type: Optional[ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftType') }})
    

@dataclass_json
@dataclass
class ObbcaData1Overdraft:
    r"""ObbcaData1Overdraft
    Borrowing details
    """
    
    overdraft_tier_band_set: List[ObbcaData1OverdraftOverdraftTierBandSet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftTierBandSet') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    
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
    fee_free_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeFreeLength') }})
    fee_free_length_period: Optional[ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeFreeLengthPeriod') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    segment: Optional[List[ObbcaData1ProductDetailsSegmentEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Segment') }})
    

@dataclass_json
@dataclass
class ObbcaData1:
    credit_interest: Optional[ObbcaData1CreditInterest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditInterest') }})
    other_fees_charges: Optional[List[ObbcaData1OtherFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeesCharges') }})
    overdraft: Optional[ObbcaData1Overdraft] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Overdraft') }})
    product_details: Optional[ObbcaData1ProductDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductDetails') }})
    
