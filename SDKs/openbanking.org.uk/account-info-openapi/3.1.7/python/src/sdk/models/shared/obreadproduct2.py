from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum(str, Enum):
    INOT = "INOT"
    INPA = "INPA"
    INSC = "INSC"

class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum(str, Enum):
    FQAT = "FQAT"
    FQDY = "FQDY"
    FQHY = "FQHY"
    FQMY = "FQMY"
    FQOT = "FQOT"
    FQQY = "FQQY"
    FQSD = "FQSD"
    FQWY = "FQWY"
    FQYY = "FQYY"

class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum(str, Enum):
    INBB = "INBB"
    INFR = "INFR"
    INGR = "INGR"
    INLR = "INLR"
    INNE = "INNE"
    INOT = "INOT"

class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum(str, Enum):
    FQAT = "FQAT"
    FQDY = "FQDY"
    FQHY = "FQHY"
    FQMY = "FQMY"
    FQOT = "FQOT"
    FQQY = "FQQY"
    FQSD = "FQSD"
    FQWY = "FQWY"
    FQYY = "FQYY"

class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum(str, Enum):
    INBA = "INBA"
    INTI = "INTI"
    INWH = "INWH"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType:
    r"""ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType
    Other interest rate types which are not available in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand:
    r"""ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand
    Tier Band Details
    """
    
    aer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AER') }})
    application_frequency: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fixed_variable_interest_rate_type: ObInterestFixedVariableType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedVariableInterestRateType') }})
    tier_value_minimum: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMinimum') }})
    bank_interest_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankInterestRate') }})
    bank_interest_rate_type: Optional[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankInterestRateType') }})
    calculation_frequency: Optional[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    deposit_interest_applied_coverage: Optional[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DepositInterestAppliedCoverage') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObOtherCodeType11] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_bank_interest_type: Optional[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherBankInterestType') }})
    other_calculation_frequency: Optional[ObOtherCodeType12] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMaximum') }})
    
class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum(str, Enum):
    INBA = "INBA"
    INTI = "INTI"
    INWH = "INWH"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet:
    r"""ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet
    The group of tiers or bands for which credit interest can be applied.
    """
    
    destination: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    tier_band: List[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBand') }})
    tier_band_method: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandMethod') }})
    calculation_method: Optional[ObInterestCalculationMethod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationMethod') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_calculation_method: Optional[ObOtherCodeType10] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationMethod') }})
    other_destination: Optional[ObOtherCodeType10] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherDestination') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeCreditInterest:
    r"""ObReadProduct2DataProductOtherProductTypeCreditInterest
    Details about the interest that may be payable to the Account holders
    """
    
    tier_band_set: List[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandSet') }})
    
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum(str, Enum):
    FEPF = "FEPF"
    FTOT = "FTOT"
    FYAF = "FYAF"
    FYAM = "FYAM"
    FYAQ = "FYAQ"
    FYCP = "FYCP"
    FYDB = "FYDB"
    FYMI = "FYMI"
    FYXX = "FYXX"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap
    Details about any caps (minimum/maximum charges) that apply to a particular fee/charge
    """
    
    fee_type: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObMinMaxType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObFeeFrequency1Code4Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail
    Other fees/charges details
    """
    
    application_frequency: ObFeeFrequency1Code2Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    calculation_frequency: ObFeeFrequency1Code3Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_type: ObFeeType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObInterestRateType1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NegotiableIndicator') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObOtherCodeType16] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObOtherCodeType17] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_rate_type: Optional[ObOtherCodeType15] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObOtherFeeChargeDetailType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges
    Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits
    """
    
    loan_interest_fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanInterestFeeChargeDetail') }})
    loan_interest_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanInterestFeeChargeCap') }})
    
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum(str, Enum):
    FEPF = "FEPF"
    FTOT = "FTOT"
    FYAF = "FYAF"
    FYAM = "FYAM"
    FYAQ = "FYAQ"
    FYCP = "FYCP"
    FYDB = "FYDB"
    FYMI = "FYMI"
    FYXX = "FYXX"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap
    Details about any caps (minimum/maximum charges) that apply to a particular fee/charge
    """
    
    fee_type: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObMinMaxType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObFeeFrequency1Code4Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail
    Other fees/charges details
    """
    
    application_frequency: ObFeeFrequency1Code2Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    calculation_frequency: ObFeeFrequency1Code3Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_type: ObFeeType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObInterestRateType1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NegotiableIndicator') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObOtherCodeType16] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObOtherCodeType17] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_rate_type: Optional[ObOtherCodeType15] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObOtherFeeChargeDetailType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges
    Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits
    """
    
    loan_interest_fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanInterestFeeChargeDetail') }})
    loan_interest_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanInterestFeeChargeCap') }})
    
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum(str, Enum):
    INBB = "INBB"
    INFR = "INFR"
    INGR = "INGR"
    INLR = "INLR"
    INNE = "INNE"
    INOT = "INOT"

class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum(str, Enum):
    PACT = "PACT"
    PDAY = "PDAY"
    PHYR = "PHYR"
    PMTH = "PMTH"
    PQTR = "PQTR"
    PWEK = "PWEK"
    PYER = "PYER"

class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum(str, Enum):
    PACT = "PACT"
    PDAY = "PDAY"
    PHYR = "PHYR"
    PMTH = "PMTH"
    PQTR = "PQTR"
    PWEK = "PWEK"
    PYER = "PYER"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType
    Other loan interest rate types which are not available in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand
    Tier Band Details
    """
    
    fixed_variable_interest_rate_type: ObInterestFixedVariableType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedVariableInterestRateType') }})
    min_term_period: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinTermPeriod') }})
    rep_apr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepAPR') }})
    tier_value_min_term: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMinTerm') }})
    tier_value_minimum: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMinimum') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    loan_interest_fees_charges: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanInterestFeesCharges') }})
    loan_provider_interest_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanProviderInterestRate') }})
    loan_provider_interest_rate_type: Optional[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanProviderInterestRateType') }})
    max_term_period: Optional[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxTermPeriod') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_loan_provider_interest_rate_type: Optional[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherLoanProviderInterestRateType') }})
    tier_value_max_term: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMaxTerm') }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMaximum') }})
    
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum(str, Enum):
    INBA = "INBA"
    INTI = "INTI"
    INWH = "INWH"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet
    The group of tiers or bands for which debit interest can be applied.
    """
    
    calculation_method: ObInterestCalculationMethod1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationMethod') }})
    loan_interest_tier_band: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanInterestTierBand') }})
    tier_band_method: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandMethod') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    loan_interest_fees_charges: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanInterestFeesCharges') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_calculation_method: Optional[ObOtherCodeType10] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationMethod') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterest:
    r"""ObReadProduct2DataProductOtherProductTypeLoanInterest
    Details about the interest that may be payable to the SME Loan holders
    """
    
    loan_interest_tier_band_set: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanInterestTierBandSet') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum(str, Enum):
    FEPF = "FEPF"
    FTOT = "FTOT"
    FYAF = "FYAF"
    FYAM = "FYAM"
    FYAQ = "FYAQ"
    FYCP = "FYCP"
    FYDB = "FYDB"
    FYMI = "FYMI"
    FYXX = "FYXX"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType:
    r"""ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap:
    r"""ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular or group of fee/charge
    """
    
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObMinMaxType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange:
    r"""ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange
    Range or amounts or rates for which the fee/charge applies
    """
    
    maximum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumAmount') }})
    maximum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRate') }})
    minimum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumAmount') }})
    minimum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumRate') }})
    
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum(str, Enum):
    FEPF = "FEPF"
    FTOT = "FTOT"
    FYAF = "FYAF"
    FYAM = "FYAM"
    FYAQ = "FYAQ"
    FYCP = "FYCP"
    FYDB = "FYDB"
    FYMI = "FYMI"
    FYXX = "FYXX"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType:
    r"""ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap:
    r"""ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular or group of fee/charge
    """
    
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObMinMaxType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail:
    r"""ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail
    Other fees/charges details
    """
    
    application_frequency: ObFeeFrequency1Code2Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fee_category: ObFeeCategory1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCategory') }})
    fee_type: ObFeeType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    calculation_frequency: Optional[ObFeeFrequency1Code3Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_applicable_range: Optional[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeApplicableRange') }})
    fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCap') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObInterestRateType1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NegotiableIndicator') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObOtherCodeType16] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObOtherCodeType17] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_category_type: Optional[ObOtherCodeType10] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeCategoryType') }})
    other_fee_rate_type: Optional[ObOtherCodeType18] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObOtherFeeChargeDetailType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType:
    r"""ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType
    Other tariff type which is not in the standard list.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum(str, Enum):
    TTEL = "TTEL"
    TTMX = "TTMX"
    TTOT = "TTOT"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesCharges:
    r"""ObReadProduct2DataProductOtherProductTypeOtherFeesCharges
    Contains details of fees and charges which are not associated with either Overdraft or features/benefits
    """
    
    fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeDetail') }})
    fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCap') }})
    other_tariff_type: Optional[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherTariffType') }})
    tariff_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TariffName') }})
    tariff_type: Optional[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TariffType') }})
    
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    FBAO = "FBAO"
    FBAR = "FBAR"
    FBEB = "FBEB"
    FBIT = "FBIT"
    FBOR = "FBOR"
    FBOS = "FBOS"
    FBSC = "FBSC"
    FBTO = "FBTO"
    FBUB = "FBUB"
    FBUT = "FBUT"
    FTOT = "FTOT"
    FTUT = "FTUT"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
    """
    
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObMinMaxType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    FBAO = "FBAO"
    FBAR = "FBAR"
    FBEB = "FBEB"
    FBIT = "FBIT"
    FBOR = "FBOR"
    FBOS = "FBOS"
    FBSC = "FBSC"
    FBTO = "FBTO"
    FBUB = "FBUB"
    FBUT = "FBUT"
    FTOT = "FTOT"
    FTUT = "FTUT"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
    """
    
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObMinMaxType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
    Details about the fees/charges
    """
    
    application_frequency: ObFeeFrequency1Code0Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fee_type: ObOverdraftFeeType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    calculation_frequency: Optional[ObFeeFrequency1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObInterestRateType1Code0Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncrementalBorrowingAmount') }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NegotiableIndicator') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObOtherCodeType11] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObOtherCodeType12] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_rate_type: Optional[ObOtherCodeType14] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObOtherCodeType13] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftControlIndicator') }})
    overdraft_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges
    Overdraft fees and charges details
    """
    
    overdraft_fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeDetail') }})
    overdraft_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum(str, Enum):
    PACT = "PACT"
    PDAY = "PDAY"
    PHYR = "PHYR"
    PMTH = "PMTH"
    PQTR = "PQTR"
    PWEK = "PWEK"
    PYER = "PYER"

class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    FBAO = "FBAO"
    FBAR = "FBAR"
    FBEB = "FBEB"
    FBIT = "FBIT"
    FBOR = "FBOR"
    FBOS = "FBOS"
    FBSC = "FBSC"
    FBTO = "FBTO"
    FBUB = "FBUB"
    FBUT = "FBUT"
    FTOT = "FTOT"
    FTUT = "FTUT"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
    """
    
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObMinMaxType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum(str, Enum):
    FBAO = "FBAO"
    FBAR = "FBAR"
    FBEB = "FBEB"
    FBIT = "FBIT"
    FBOR = "FBOR"
    FBOS = "FBOS"
    FBSC = "FBSC"
    FBTO = "FBTO"
    FBUB = "FBUB"
    FBUT = "FBUT"
    FTOT = "FTOT"
    FTUT = "FTUT"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
    Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
    """
    
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObMinMaxType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
    Details about the fees/charges
    """
    
    application_frequency: ObFeeFrequency1Code0Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    fee_type: ObOverdraftFeeType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    calculation_frequency: Optional[ObFeeFrequency1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObInterestRateType1Code0Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncrementalBorrowingAmount') }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NegotiableIndicator') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObOtherCodeType11] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObOtherCodeType12] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_rate_type: Optional[ObOtherCodeType14] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObOtherCodeType13] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftControlIndicator') }})
    overdraft_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
    Overdraft fees and charges
    """
    
    overdraft_fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeDetail') }})
    overdraft_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeeChargeCap') }})
    
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum(str, Enum):
    INBA = "INBA"
    INTI = "INTI"
    INWH = "INWH"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand
    Provides overdraft details for a specific tier or band
    """
    
    tier_value_min: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMin') }})
    agreement_length_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgreementLengthMax') }})
    agreement_length_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgreementLengthMin') }})
    agreement_period: Optional[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgreementPeriod') }})
    bank_guaranteed_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BankGuaranteedIndicator') }})
    ear: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EAR') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    overdraft_fees_charges: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeesCharges') }})
    overdraft_interest_charging_coverage: Optional[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftInterestChargingCoverage') }})
    tier_value_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMax') }})
    
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum(str, Enum):
    OVCO = "OVCO"
    OVOD = "OVOD"
    OVOT = "OVOT"

class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum(str, Enum):
    INBA = "INBA"
    INTI = "INTI"
    INWH = "INWH"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet
    Tier band set details
    """
    
    overdraft_tier_band: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftTierBand') }})
    tier_band_method: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandMethod') }})
    authorised_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisedIndicator') }})
    buffer_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferAmount') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    overdraft_fees_charges: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftFeesCharges') }})
    overdraft_type: Optional[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraft:
    r"""ObReadProduct2DataProductOtherProductTypeOverdraft
    Borrowing details
    """
    
    overdraft_tier_band_set: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftTierBandSet') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    
class ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum(str, Enum):
    PACT = "PACT"
    PDAY = "PDAY"
    PHYR = "PHYR"
    PMTH = "PMTH"
    PQTR = "PQTR"
    PWEK = "PWEK"
    PYER = "PYER"

class ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum(str, Enum):
    GEAS = "GEAS"
    GEBA = "GEBA"
    GEBR = "GEBR"
    GEBU = "GEBU"
    GECI = "GECI"
    GECS = "GECS"
    GEFB = "GEFB"
    GEFG = "GEFG"
    GEG = "GEG"
    GEGR = "GEGR"
    GEGS = "GEGS"
    GEOT = "GEOT"
    GEOV = "GEOV"
    GEPA = "GEPA"
    GEPR = "GEPR"
    GERE = "GERE"
    GEST = "GEST"
    GEYA = "GEYA"
    GEYO = "GEYO"
    PSCA = "PSCA"
    PSES = "PSES"
    PSNC = "PSNC"
    PSNP = "PSNP"
    PSRG = "PSRG"
    PSSS = "PSSS"
    PSST = "PSST"
    PSSW = "PSSW"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeProductDetails:
    fee_free_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeFreeLength') }})
    fee_free_length_period: Optional[ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeFreeLengthPeriod') }})
    monthly_maximum_charge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MonthlyMaximumCharge') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_segment: Optional[ObOtherCodeType10] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherSegment') }})
    segment: Optional[List[ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Segment') }})
    
class ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum(str, Enum):
    RABD = "RABD"
    RABL = "RABL"
    RACI = "RACI"
    RAFC = "RAFC"
    RAIO = "RAIO"
    RALT = "RALT"
    USOT = "USOT"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType:
    r"""ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType
    Other amount type which is not in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency:
    r"""ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency
    Other repayment frequency which is not in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType:
    r"""ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType
    Other repayment type which is not in the standard code list
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum(str, Enum):
    FEPF = "FEPF"
    FTOT = "FTOT"
    FYAF = "FYAF"
    FYAM = "FYAM"
    FYAQ = "FYAQ"
    FYCP = "FYCP"
    FYDB = "FYDB"
    FYMI = "FYMI"
    FYXX = "FYXX"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType:
    r"""ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType
    Other fee type code which is not available in the standard code set
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap:
    r"""ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap
    RepaymentFeeChargeCap sets daily, weekly, monthly, yearly limits on the fees that are charged
    """
    
    fee_type: List[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    min_max_type: ObMinMaxType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinMaxType') }})
    capping_period: Optional[ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CappingPeriod') }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapAmount') }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeCapOccurrence') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail:
    r"""ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail
    Details about specific fees/charges that are applied for repayment
    """
    
    application_frequency: ObFeeFrequency1Code2Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationFrequency') }})
    calculation_frequency: ObFeeFrequency1Code3Enum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    fee_type: ObFeeType1CodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fee_rate_type: Optional[ObInterestRateType1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRateType') }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NegotiableIndicator') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_application_frequency: Optional[ObOtherCodeType16] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherApplicationFrequency') }})
    other_calculation_frequency: Optional[ObOtherCodeType17] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherCalculationFrequency') }})
    other_fee_rate_type: Optional[ObOtherCodeType18] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeRateType') }})
    other_fee_type: Optional[ObOtherFeeChargeDetailType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeeType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges:
    r"""ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges
    Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment.
    """
    
    repayment_fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepaymentFeeChargeDetail') }})
    repayment_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepaymentFeeChargeCap') }})
    
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum(str, Enum):
    SMDA = "SMDA"
    SMFL = "SMFL"
    SMFO = "SMFO"
    SMHY = "SMHY"
    SMMO = "SMMO"
    SMOT = "SMOT"
    SMQU = "SMQU"
    SMWE = "SMWE"
    SMYE = "SMYE"

class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum(str, Enum):
    PACT = "PACT"
    PDAY = "PDAY"
    PHYR = "PHYR"
    PMTH = "PMTH"
    PQTR = "PQTR"
    PWEK = "PWEK"
    PYER = "PYER"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday:
    r"""ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday
    Details of capital repayment holiday if any
    """
    
    max_holiday_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxHolidayLength') }})
    max_holiday_period: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxHolidayPeriod') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum(str, Enum):
    USBA = "USBA"
    USBU = "USBU"
    USCI = "USCI"
    USCS = "USCS"
    USER = "USER"
    USFA = "USFA"
    USFB = "USFB"
    USFI = "USFI"
    USIO = "USIO"
    USOT = "USOT"
    USPF = "USPF"
    USRW = "USRW"
    USSL = "USSL"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepayment:
    r"""ObReadProduct2DataProductOtherProductTypeRepayment
    Repayment details of the Loan product
    """
    
    amount_type: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmountType') }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    other_amount_type: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherAmountType') }})
    other_repayment_frequency: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherRepaymentFrequency') }})
    other_repayment_type: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherRepaymentType') }})
    repayment_fee_charges: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepaymentFeeCharges') }})
    repayment_frequency: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepaymentFrequency') }})
    repayment_holiday: Optional[List[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepaymentHoliday') }})
    repayment_type: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepaymentType') }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductType:
    r"""ObReadProduct2DataProductOtherProductType
    Other product type details associated with the account.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    credit_interest: Optional[ObReadProduct2DataProductOtherProductTypeCreditInterest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditInterest') }})
    loan_interest: Optional[ObReadProduct2DataProductOtherProductTypeLoanInterest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoanInterest') }})
    other_fees_charges: Optional[List[ObReadProduct2DataProductOtherProductTypeOtherFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFeesCharges') }})
    overdraft: Optional[ObReadProduct2DataProductOtherProductTypeOverdraft] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Overdraft') }})
    product_details: Optional[ObReadProduct2DataProductOtherProductTypeProductDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductDetails') }})
    repayment: Optional[ObReadProduct2DataProductOtherProductTypeRepayment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Repayment') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
class ObReadProduct2DataProductProductTypeEnum(str, Enum):
    BUSINESS_CURRENT_ACCOUNT = "BusinessCurrentAccount"
    COMMERCIAL_CREDIT_CARD = "CommercialCreditCard"
    OTHER = "Other"
    PERSONAL_CURRENT_ACCOUNT = "PersonalCurrentAccount"
    SME_LOAN = "SMELoan"


@dataclass_json
@dataclass
class ObReadProduct2DataProduct:
    r"""ObReadProduct2DataProduct
    Product details associated with the Account
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    product_type: ObReadProduct2DataProductProductTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductType') }})
    bca: Optional[ObbcaData1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BCA') }})
    marketing_state_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MarketingStateId') }})
    other_product_type: Optional[ObReadProduct2DataProductOtherProductType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherProductType') }})
    pca: Optional[ObpcaData1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PCA') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    secondary_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryProductId') }})
    

@dataclass_json
@dataclass
class ObReadProduct2Data:
    r"""ObReadProduct2Data
    Aligning with the read write specs structure.
    """
    
    product: Optional[List[ObReadProduct2DataProduct]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Product') }})
    

@dataclass_json
@dataclass
class ObReadProduct2:
    r"""ObReadProduct2
    Product details of Other Product which is not avaiable in the standard list
    """
    
    data: ObReadProduct2Data = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Meta') }})
    
