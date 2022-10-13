from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obbcadata1
from . import ob_interestcalculationmethod1code_enum
from . import ob_othercodetype1_0
from . import ob_othercodetype1_0
from . import ob_interestfixedvariabletype1code_enum
from . import ob_othercodetype1_1
from . import ob_othercodetype1_2
from . import ob_interestcalculationmethod1code_enum
from . import ob_feefrequency1code_4_enum
from . import ob_minmaxtype1code_enum
from . import ob_feefrequency1code_2_enum
from . import ob_feefrequency1code_3_enum
from . import ob_interestratetype1code_1_enum
from . import ob_feetype1code_enum
from . import ob_othercodetype1_6
from . import ob_othercodetype1_7
from . import ob_othercodetype1_5
from . import ob_otherfeechargedetailtype
from . import ob_interestfixedvariabletype1code_enum
from . import ob_feefrequency1code_4_enum
from . import ob_minmaxtype1code_enum
from . import ob_feefrequency1code_2_enum
from . import ob_feefrequency1code_3_enum
from . import ob_interestratetype1code_1_enum
from . import ob_feetype1code_enum
from . import ob_othercodetype1_6
from . import ob_othercodetype1_7
from . import ob_othercodetype1_5
from . import ob_otherfeechargedetailtype
from . import ob_othercodetype1_0
from . import ob_period1code_enum
from . import ob_minmaxtype1code_enum
from . import ob_feefrequency1code_2_enum
from . import ob_feefrequency1code_3_enum
from . import ob_feecategory1code_enum
from . import ob_period1code_enum
from . import ob_minmaxtype1code_enum
from . import ob_interestratetype1code_1_enum
from . import ob_feetype1code_enum
from . import ob_othercodetype1_6
from . import ob_othercodetype1_7
from . import ob_othercodetype1_0
from . import ob_othercodetype1_8
from . import ob_otherfeechargedetailtype
from . import ob_period1code_enum
from . import ob_minmaxtype1code_enum
from . import ob_feefrequency1code_0_enum
from . import ob_feefrequency1code_1_enum
from . import ob_interestratetype1code_0_enum
from . import ob_overdraftfeetype1code_enum
from . import ob_othercodetype1_1
from . import ob_othercodetype1_2
from . import ob_othercodetype1_4
from . import ob_othercodetype1_3
from . import ob_period1code_enum
from . import ob_minmaxtype1code_enum
from . import ob_period1code_enum
from . import ob_minmaxtype1code_enum
from . import ob_feefrequency1code_0_enum
from . import ob_feefrequency1code_1_enum
from . import ob_interestratetype1code_0_enum
from . import ob_overdraftfeetype1code_enum
from . import ob_othercodetype1_1
from . import ob_othercodetype1_2
from . import ob_othercodetype1_4
from . import ob_othercodetype1_3
from . import ob_period1code_enum
from . import ob_minmaxtype1code_enum
from . import ob_othercodetype1_0
from . import ob_period1code_enum
from . import ob_minmaxtype1code_enum
from . import ob_feefrequency1code_2_enum
from . import ob_feefrequency1code_3_enum
from . import ob_interestratetype1code_1_enum
from . import ob_feetype1code_enum
from . import ob_othercodetype1_6
from . import ob_othercodetype1_7
from . import ob_othercodetype1_8
from . import ob_otherfeechargedetailtype
from . import obpcadata1
from . import links
from . import meta

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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand:
    aer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AER' }})
    application_frequency: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    bank_interest_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankInterestRate' }})
    bank_interest_rate_type: Optional[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankInterestRateType' }})
    calculation_frequency: Optional[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    deposit_interest_applied_coverage: Optional[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DepositInterestAppliedCoverage' }})
    fixed_variable_interest_rate_type: ob_interestfixedvariabletype1code_enum.ObInterestFixedVariableType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedVariableInterestRateType' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ob_othercodetype1_1.ObOtherCodeType11] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_bank_interest_type: Optional[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherBankInterestType' }})
    other_calculation_frequency: Optional[ob_othercodetype1_2.ObOtherCodeType12] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMaximum' }})
    tier_value_minimum: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMinimum' }})
    
class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum(str, Enum):
    INBA = "INBA"
    INTI = "INTI"
    INWH = "INWH"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet:
    calculation_method: Optional[ob_interestcalculationmethod1code_enum.ObInterestCalculationMethod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationMethod' }})
    destination: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_calculation_method: Optional[ob_othercodetype1_0.ObOtherCodeType10] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationMethod' }})
    other_destination: Optional[ob_othercodetype1_0.ObOtherCodeType10] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherDestination' }})
    tier_band: List[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBand' }})
    tier_band_method: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeCreditInterest:
    tier_band_set: List[ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandSet' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap:
    capping_period: Optional[ob_feefrequency1code_4_enum.ObFeeFrequency1Code4Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ob_minmaxtype1code_enum.ObMinMaxType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail:
    application_frequency: ob_feefrequency1code_2_enum.ObFeeFrequency1Code2Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: ob_feefrequency1code_3_enum.ObFeeFrequency1Code3Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ob_interestratetype1code_1_enum.ObInterestRateType1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ob_feetype1code_enum.ObFeeType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ob_othercodetype1_6.ObOtherCodeType16] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ob_othercodetype1_7.ObOtherCodeType17] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ob_othercodetype1_5.ObOtherCodeType15] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ob_otherfeechargedetailtype.ObOtherFeeChargeDetailType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges:
    loan_interest_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanInterestFeeChargeCap' }})
    loan_interest_fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanInterestFeeChargeDetail' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap:
    capping_period: Optional[ob_feefrequency1code_4_enum.ObFeeFrequency1Code4Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ob_minmaxtype1code_enum.ObMinMaxType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail:
    application_frequency: ob_feefrequency1code_2_enum.ObFeeFrequency1Code2Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: ob_feefrequency1code_3_enum.ObFeeFrequency1Code3Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ob_interestratetype1code_1_enum.ObInterestRateType1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ob_feetype1code_enum.ObFeeType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ob_othercodetype1_6.ObOtherCodeType16] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ob_othercodetype1_7.ObOtherCodeType17] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ob_othercodetype1_5.ObOtherCodeType15] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ob_otherfeechargedetailtype.ObOtherFeeChargeDetailType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges:
    loan_interest_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanInterestFeeChargeCap' }})
    loan_interest_fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanInterestFeeChargeDetail' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand:
    fixed_variable_interest_rate_type: ob_interestfixedvariabletype1code_enum.ObInterestFixedVariableType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FixedVariableInterestRateType' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    loan_interest_fees_charges: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanInterestFeesCharges' }})
    loan_provider_interest_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanProviderInterestRate' }})
    loan_provider_interest_rate_type: Optional[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanProviderInterestRateType' }})
    max_term_period: Optional[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxTermPeriod' }})
    min_term_period: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinTermPeriod' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_loan_provider_interest_rate_type: Optional[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherLoanProviderInterestRateType' }})
    rep_apr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepAPR' }})
    tier_value_max_term: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMaxTerm' }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMaximum' }})
    tier_value_min_term: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMinTerm' }})
    tier_value_minimum: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMinimum' }})
    
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum(str, Enum):
    INBA = "INBA"
    INTI = "INTI"
    INWH = "INWH"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet:
    calculation_method: ob_interestcalculationmethod1code_enum.ObInterestCalculationMethod1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationMethod' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    loan_interest_fees_charges: Optional[List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanInterestFeesCharges' }})
    loan_interest_tier_band: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanInterestTierBand' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_calculation_method: Optional[ob_othercodetype1_0.ObOtherCodeType10] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationMethod' }})
    tier_band_method: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeLoanInterest:
    loan_interest_tier_band_set: List[ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanInterestTierBandSet' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap:
    capping_period: Optional[ob_period1code_enum.ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ob_minmaxtype1code_enum.ObMinMaxType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange:
    maximum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumAmount' }})
    maximum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRate' }})
    minimum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumAmount' }})
    minimum_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumRate' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap:
    capping_period: Optional[ob_period1code_enum.ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ob_minmaxtype1code_enum.ObMinMaxType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail:
    application_frequency: ob_feefrequency1code_2_enum.ObFeeFrequency1Code2Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ob_feefrequency1code_3_enum.ObFeeFrequency1Code3Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_applicable_range: Optional[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeApplicableRange' }})
    fee_category: ob_feecategory1code_enum.ObFeeCategory1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCategory' }})
    fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeCap' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ob_interestratetype1code_1_enum.ObInterestRateType1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ob_feetype1code_enum.ObFeeType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ob_othercodetype1_6.ObOtherCodeType16] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ob_othercodetype1_7.ObOtherCodeType17] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_category_type: Optional[ob_othercodetype1_0.ObOtherCodeType10] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeCategoryType' }})
    other_fee_rate_type: Optional[ob_othercodetype1_8.ObOtherCodeType18] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ob_otherfeechargedetailtype.ObOtherFeeChargeDetailType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum(str, Enum):
    TTEL = "TTEL"
    TTMX = "TTMX"
    TTOT = "TTOT"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOtherFeesCharges:
    fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeCap' }})
    fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeChargeDetail' }})
    other_tariff_type: Optional[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherTariffType' }})
    tariff_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TariffName' }})
    tariff_type: Optional[ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TariffType' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap:
    capping_period: Optional[ob_period1code_enum.ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ob_minmaxtype1code_enum.ObMinMaxType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    capping_period: Optional[ob_period1code_enum.ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ob_minmaxtype1code_enum.ObMinMaxType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail:
    application_frequency: ob_feefrequency1code_0_enum.ObFeeFrequency1Code0Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ob_feefrequency1code_1_enum.ObFeeFrequency1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ob_interestratetype1code_0_enum.ObInterestRateType1Code0Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ob_overdraftfeetype1code_enum.ObOverdraftFeeType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalBorrowingAmount' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ob_othercodetype1_1.ObOtherCodeType11] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ob_othercodetype1_2.ObOtherCodeType12] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ob_othercodetype1_4.ObOtherCodeType14] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ob_othercodetype1_3.ObOtherCodeType13] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    overdraft_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges:
    overdraft_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    overdraft_fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeDetail' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap:
    capping_period: Optional[ob_period1code_enum.ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ob_minmaxtype1code_enum.ObMinMaxType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap:
    capping_period: Optional[ob_period1code_enum.ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ob_minmaxtype1code_enum.ObMinMaxType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail:
    application_frequency: ob_feefrequency1code_0_enum.ObFeeFrequency1Code0Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: Optional[ob_feefrequency1code_1_enum.ObFeeFrequency1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ob_interestratetype1code_0_enum.ObInterestRateType1Code0Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ob_overdraftfeetype1code_enum.ObOverdraftFeeType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    incremental_borrowing_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncrementalBorrowingAmount' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ob_othercodetype1_1.ObOtherCodeType11] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ob_othercodetype1_2.ObOtherCodeType12] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ob_othercodetype1_4.ObOtherCodeType14] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ob_othercodetype1_3.ObOtherCodeType13] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    overdraft_control_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftControlIndicator' }})
    overdraft_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges:
    overdraft_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeCap' }})
    overdraft_fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeeChargeDetail' }})
    
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum(str, Enum):
    INBA = "INBA"
    INTI = "INTI"
    INWH = "INWH"


@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand:
    agreement_length_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgreementLengthMax' }})
    agreement_length_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgreementLengthMin' }})
    agreement_period: Optional[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgreementPeriod' }})
    bank_guaranteed_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BankGuaranteedIndicator' }})
    ear: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EAR' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_fees_charges: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeesCharges' }})
    overdraft_interest_charging_coverage: Optional[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftInterestChargingCoverage' }})
    tier_value_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMax' }})
    tier_value_min: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierValueMin' }})
    
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
    authorised_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorisedIndicator' }})
    buffer_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferAmount' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_fees_charges: Optional[List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftFeesCharges' }})
    overdraft_tier_band: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftTierBand' }})
    overdraft_type: Optional[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftType' }})
    tier_band_method: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TierBandMethod' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeOverdraft:
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    overdraft_tier_band_set: List[ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverdraftTierBandSet' }})
    
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
    fee_free_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeFreeLength' }})
    fee_free_length_period: Optional[ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeFreeLengthPeriod' }})
    monthly_maximum_charge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MonthlyMaximumCharge' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_segment: Optional[ob_othercodetype1_0.ObOtherCodeType10] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherSegment' }})
    segment: Optional[List[ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Segment' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap:
    capping_period: Optional[ob_period1code_enum.ObPeriod1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CappingPeriod' }})
    fee_cap_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapAmount' }})
    fee_cap_occurrence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeCapOccurrence' }})
    fee_type: List[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    min_max_type: ob_minmaxtype1code_enum.ObMinMaxType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinMaxType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_fee_type: Optional[List[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail:
    application_frequency: ob_feefrequency1code_2_enum.ObFeeFrequency1Code2Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationFrequency' }})
    calculation_frequency: ob_feefrequency1code_3_enum.ObFeeFrequency1Code3Enum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalculationFrequency' }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeAmount' }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRate' }})
    fee_rate_type: Optional[ob_interestratetype1code_1_enum.ObInterestRateType1Code1Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeRateType' }})
    fee_type: ob_feetype1code_enum.ObFeeType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeeType' }})
    negotiable_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NegotiableIndicator' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_application_frequency: Optional[ob_othercodetype1_6.ObOtherCodeType16] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherApplicationFrequency' }})
    other_calculation_frequency: Optional[ob_othercodetype1_7.ObOtherCodeType17] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherCalculationFrequency' }})
    other_fee_rate_type: Optional[ob_othercodetype1_8.ObOtherCodeType18] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeRateType' }})
    other_fee_type: Optional[ob_otherfeechargedetailtype.ObOtherFeeChargeDetailType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeeType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges:
    repayment_fee_charge_cap: Optional[List[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepaymentFeeChargeCap' }})
    repayment_fee_charge_detail: List[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepaymentFeeChargeDetail' }})
    
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
    max_holiday_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxHolidayLength' }})
    max_holiday_period: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxHolidayPeriod' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    
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
    amount_type: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmountType' }})
    notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    other_amount_type: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherAmountType' }})
    other_repayment_frequency: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherRepaymentFrequency' }})
    other_repayment_type: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherRepaymentType' }})
    repayment_fee_charges: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepaymentFeeCharges' }})
    repayment_frequency: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepaymentFrequency' }})
    repayment_holiday: Optional[List[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepaymentHoliday' }})
    repayment_type: Optional[ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepaymentType' }})
    

@dataclass_json
@dataclass
class ObReadProduct2DataProductOtherProductType:
    credit_interest: Optional[ObReadProduct2DataProductOtherProductTypeCreditInterest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditInterest' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    loan_interest: Optional[ObReadProduct2DataProductOtherProductTypeLoanInterest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoanInterest' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    other_fees_charges: Optional[List[ObReadProduct2DataProductOtherProductTypeOtherFeesCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFeesCharges' }})
    overdraft: Optional[ObReadProduct2DataProductOtherProductTypeOverdraft] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overdraft' }})
    product_details: Optional[ObReadProduct2DataProductOtherProductTypeProductDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductDetails' }})
    repayment: Optional[ObReadProduct2DataProductOtherProductTypeRepayment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Repayment' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    
class ObReadProduct2DataProductProductTypeEnum(str, Enum):
    BUSINESS_CURRENT_ACCOUNT = "BusinessCurrentAccount"
    COMMERCIAL_CREDIT_CARD = "CommercialCreditCard"
    OTHER = "Other"
    PERSONAL_CURRENT_ACCOUNT = "PersonalCurrentAccount"
    SME_LOAN = "SMELoan"


@dataclass_json
@dataclass
class ObReadProduct2DataProduct:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    bca: Optional[obbcadata1.ObbcaData1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BCA' }})
    marketing_state_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MarketingStateId' }})
    other_product_type: Optional[ObReadProduct2DataProductOtherProductType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherProductType' }})
    pca: Optional[obpcadata1.ObpcaData1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PCA' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    product_type: ObReadProduct2DataProductProductTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductType' }})
    secondary_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryProductId' }})
    

@dataclass_json
@dataclass
class ObReadProduct2Data:
    product: Optional[List[ObReadProduct2DataProduct]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Product' }})
    

@dataclass_json
@dataclass
class ObReadProduct2:
    data: ObReadProduct2Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
