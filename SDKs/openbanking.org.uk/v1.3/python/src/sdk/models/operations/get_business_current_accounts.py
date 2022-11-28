from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetBusinessCurrentAccountsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    
class GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_SENT_A_REQUEST_WHICH_COULD_NOT_BE_UNDERSTOOD_ = "You have sent a request which could not be understood."

class GetBusinessCurrentAccounts400ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED = "400"

class GetBusinessCurrentAccounts400ErrorObjectTitleEnum(str, Enum):
    BAD_REQUEST = "Bad request"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts400ErrorObject:
    description: GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBusinessCurrentAccounts400ErrorObjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBusinessCurrentAccounts400ErrorObjectTitleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum(str, Enum):
    YOUR_CLIENT_HAS_FAILED_TO_SUBMIT_A_REQUEST_AND_A_TIMEOUT_HAS_OCCURRED_ = "Your client has failed to submit a request, and a timeout has occurred."

class GetBusinessCurrentAccounts408ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_EIGHT = "408"

class GetBusinessCurrentAccounts408ErrorObjectTitleEnum(str, Enum):
    CLIENT_TIMEOUT = "Client timeout"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts408ErrorObject:
    description: GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBusinessCurrentAccounts408ErrorObjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBusinessCurrentAccounts408ErrorObjectTitleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_REQUESTED_THIS_RESOURCE_TOO_OFTEN_SLOW_DOWN_ = "You have requested this resource too often. Slow down."

class GetBusinessCurrentAccounts429ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_TWENTY_NINE = "429"

class GetBusinessCurrentAccounts429ErrorObjectTitleEnum(str, Enum):
    TOO_MANY_REQUESTS = "Too many requests"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts429ErrorObject:
    description: GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBusinessCurrentAccounts429ErrorObjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBusinessCurrentAccounts429ErrorObjectTitleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum(str, Enum):
    AN_ERROR_OCCURRED_ON_THE_SERVER_NO_FURTHER_INFORMATION_IS_AVAILABLE_ = "An error occurred on the server. No further information is available."

class GetBusinessCurrentAccounts500ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED = "500"

class GetBusinessCurrentAccounts500ErrorObjectTitleEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts500ErrorObject:
    description: GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBusinessCurrentAccounts500ErrorObjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBusinessCurrentAccounts500ErrorObjectTitleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum(str, Enum):
    THE_SERVICE_IS_TEMPORARILY_UNAVAILABLE_ = "The service is temporarily unavailable."

class GetBusinessCurrentAccounts503ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED_AND_THREE = "503"

class GetBusinessCurrentAccounts503ErrorObjectTitleEnum(str, Enum):
    SERVICE_TEMPORARILY_UNAVAILABLE = "Service temporarily unavailable"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts503ErrorObject:
    description: GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBusinessCurrentAccounts503ErrorObjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBusinessCurrentAccounts503ErrorObjectTitleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccountsErrorObject:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountAccessChannelsEnum(str, Enum):
    ATM = "ATM"
    BRANCH = "Branch"
    BUSINESS_COMMERCIAL_CENTRE = "BusinessCommercialCentre"
    CALL_CENTRE = "CallCentre"
    MOBILE_APPS = "MobileApps"
    MOBILE_BANKING = "MobileBanking"
    ONLINE = "Online"
    PHONE = "Phone"
    POST = "Post"
    POST_OFFICE = "PostOffice"
    RELATIONSHIP_MANAGER = "RelationshipManager"
    TEXT = "Text"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum(str, Enum):
    CASH_DEPOSIT = "CashDeposit"
    DEPOSIT = "Deposit"
    DIRECT_DEBIT = "DirectDebit"
    INITIAL_DEPOSIT = "InitialDeposit"
    INTERNET_LOGON = "InternetLogon"
    MOBILE_LOGON = "MobileLogon"
    REGULAR_DEPOSIT = "RegularDeposit"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail
    Benefit detail
    """
    
    benefit_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitDescription') }})
    benefit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitID') }})
    benefit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitName') }})
    benefit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitType') }})
    benefit_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitValue') }})
    counter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Counter') }})
    criteria_type: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CriteriaType') }})
    default_to_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultToAccounts') }})
    maximum_criteria: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumCriteria') }})
    minimum_criteria: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumCriteria') }})
    promotion_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PromotionEndDate') }})
    promotion_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PromotionStartDate') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroupBenefitItem:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroupBenefitItem
    Benefit Item
    """
    
    benefit_detail: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitDetail') }})
    date_of_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    length_promotional_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    start_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroup:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroup
    Benefit Interest Group
    """
    
    benefit_item: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroupBenefitItem = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitItem') }})
    benefit_sub_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitSubType') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefits:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefits
    Benefit
    """
    
    benefit: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Benefit') }})
    benefit_group: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefitsBenefitGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BenefitGroup') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCaPricingCaPricingItem:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCaPricingCaPricingItem
    Card Pricing
    """
    
    date_of_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    exchange_rate_adjustment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExchangeRateAdjustment') }})
    length_promotional_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    start_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCaPricingProductStateEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCaPricing:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCaPricing
    Card Price
    """
    
    ca_pricing_item: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCaPricingCaPricingItem = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CAPricingItem') }})
    product_state: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCaPricingProductStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductState') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCardTypeEnum(str, Enum):
    BASIC_CARD = "BasicCard"
    BUSINESS_QUICK_LODGE_CARD = "BusinessQuickLodgeCard"
    CASHCARD = "Cashcard"
    CONTACTLESS_CASHCARD = "ContactlessCashcard"
    CONTACTLESS_DEBIT_MASTERCARD = "ContactlessDebitMastercard"
    CONTACTLESS_DEBIT_VISA = "ContactlessDebitVisa"
    DEBIT_MASTERCARD = "DebitMastercard"
    VISA_DEBIT = "VisaDebit"
    DEPOSIT_CARD = "DepositCard"
    OPERATOR_CARD = "OperatorCard"
    POCA_CARD = "POCACard"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum(str, Enum):
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum(str, Enum):
    BANDED = "Banded"
    TIERED = "Tiered"
    WHOLE = "Whole"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum(str, Enum):
    FIXED = "Fixed"
    VARIABLE = "Variable"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum(str, Enum):
    APR = "APR"
    AER = "AER"
    GROSS = "Gross"
    NET = "Net"
    REP_APR = "RepApr"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers
    Credit Interest Tiers
    """
    
    apraer_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('APRAERRate') }})
    daily_charge_for_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyChargeForMaximum') }})
    daily_charge_for_minimum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyChargeForMinimum') }})
    interest_tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterestTier') }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rate') }})
    rate_comparison_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RateComparisonType') }})
    tier_value_maximum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMaximum') }})
    tier_value_minimum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMinimum') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum(str, Enum):
    COMPOUND = "Compound"
    PAY_AWAY = "PayAway"
    SELF_CREDIT = "SelfCredit"
    SIMPLE_INTEREST = "SimpleInterest"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem
    Credit Interest item
    """
    
    calculation_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationFrequency') }})
    calculation_method: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalculationMethod') }})
    date_of_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    fixed_interest_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FixedInterestLength') }})
    interest_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterestNotes') }})
    interest_rate_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterestRateType') }})
    interest_tiers: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterestTiers') }})
    length_promotional_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    payment_method: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentMethod') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    start_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroup:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroup
    Credit Interest Group
    """
    
    credit_interest_item: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditInterestItem') }})
    interest_tier_sub_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterestTierSubType') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterest:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterest
    Credit Interest
    """
    
    credit_charged: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditCharged') }})
    credit_interest_group: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterestCreditInterestGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditInterestGroup') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum(str, Enum):
    HARD = "Hard"
    SOFT = "Soft"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum(str, Enum):
    HARD = "Hard"
    SOFT = "Soft"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibilityEligibilityTypeEnum(str, Enum):
    ANY_BUSINESS_CUSTOMER = "AnyBusinessCustomer"
    BUSINESS_ONLY = "BusinessOnly"
    CREDIT_CARD = "CreditCard"
    CREDIT_SCORING = "CreditScoring"
    EMAIL_ADDRESS = "EmailAddress"
    EXISTING_CUSTOMERS = "ExistingCustomers"
    ID_AND_V = "IdAndV"
    MORTGAGE = "Mortgage"
    NO_ARREARS_ON_LOAN = "NoArrearsOnLoan"
    NO_CUSTOMER_IN_ARREARS = "NoCustomerInArrears"
    NO_OVER_OVERDRAFT_THIRTY_DAYS = "NoOverOverdraftThirtyDays"
    NO_SOLE_UK_ACCOUNT_OR_BANKRUPT = "NoSoleUkAccountOrBankrupt"
    NTB = "NTB"
    NTB_BUSINESS = "NTBBusiness"
    SOLE_STUDENT_ACCOUNT = "SoleStudentAccount"
    SOLE_UK_ACCOUNT = "SoleUkAccount"
    STUDENTS_ONLY = "StudentsOnly"
    TWO_MONTHS_OF_COURSE_START = "TwoMonthsOfCourseStart"
    UCAS_FULLTIME_TWO_YEARS = "UCASFulltimeTwoYears"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibilityMarketingEligibilityEnum(str, Enum):
    EXISTING_CUSTOMERS = "ExistingCustomers"
    NEW_CUSTOMERS_ONLY = "NewCustomersOnly"
    SWITCHERS_ONLY = "SwitchersOnly"
    START_UP = "StartUp"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum(str, Enum):
    UK = "UK"
    EEA = "EEA"
    EU = "EU"
    EFTA = "EFTA"
    GB_ENG = "GB - ENG"
    GB_NIR = "GB - NIR"
    GB_SCT = "GB - SCT"
    GB_WLS = "GB - WLS"
    IRL = "IRL"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibilitySingleJointIncomeEnum(str, Enum):
    JOINT = "Joint"
    SOLE_INCOME = "SoleIncome"
    SOLE_OR_JOINT = "SoleOrJoint"
    TURNOVER = "Turnover"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibility:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibility
    Eligibility
    """
    
    age_restricted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgeRestricted') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    income_turnover_related: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncomeTurnoverRelated') }})
    other_financial_holding_required: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherFinancialHoldingRequired') }})
    previous_bankruptcy: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousBankruptcy') }})
    residency_restricted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResidencyRestricted') }})
    third_sector_organisations: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThirdSectorOrganisations') }})
    annual_business_turnover: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnualBusinessTurnover') }})
    annual_business_turnover_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnualBusinessTurnoverCurrency') }})
    eligibility_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EligibilityName') }})
    eligibility_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EligibilityNotes') }})
    eligibility_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibilityEligibilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EligibilityType') }})
    income_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncomeCondition') }})
    marketing_eligibility: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibilityMarketingEligibilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MarketingEligibility') }})
    max_number_of_accounts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxNumberOfAccounts') }})
    maximum_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumAge') }})
    maximum_age_to_open: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumAgeToOpen') }})
    maximum_opening_amount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumOpeningAmount') }})
    min_income_turnover_paid_into_account: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinIncomeTurnoverPaidIntoAccount') }})
    minimum_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumAge') }})
    minimum_deposit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumDeposit') }})
    minimum_income_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumIncomeFrequency') }})
    minimum_income_turnover_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumIncomeTurnoverAmount') }})
    minimum_income_turnover_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumIncomeTurnoverCurrency') }})
    minimum_operating_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumOperatingBalance') }})
    minimum_operating_balance_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumOperatingBalanceCurrency') }})
    minimum_operating_balance_exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumOperatingBalanceExists') }})
    opening_deposit_maximum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDepositMaximumAmount') }})
    opening_deposit_maximum_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDepositMaximumCurrency') }})
    opening_deposit_minimum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDepositMinimum') }})
    opening_deposit_minimum_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDepositMinimumCurrency') }})
    residency_restricted_region: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResidencyRestrictedRegion') }})
    single_joint_income: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibilitySingleJointIncomeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SingleJointIncome') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeatureFeatureDetails:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeatureFeatureDetails
    Feature Details
    """
    
    criteria_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CriteriaType') }})
    date_of_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    feature_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureDescription') }})
    feature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureName') }})
    feature_sub_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureSubType') }})
    feature_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureType') }})
    feature_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureValue') }})
    length_promotional_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    start_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeatureProductStateEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeature:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeature
    Account Features
    """
    
    existing_feature: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExistingFeature') }})
    date_of_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    feature_details: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeatureFeatureDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeatureDetails') }})
    length_promotional_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    product_state: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeatureProductStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductState') }})
    start_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    ACCOUNT_CLOSING = "AccountClosing"
    ACCOUNT_OPENING = "AccountOpening"
    AT_TIME_OF_LOAN_REPAYMENT = "AtTimeOfLoanRepayment"
    CHARGING_PERIOD = "ChargingPeriod"
    DAILY = "Daily"
    EVERY_FIVE_BUSINESS_DAYS = "EveryFiveBusinessDays"
    ITEM = "Item"
    MONTHLY = "Monthly"
    ON_ACCOUNT_ANNIVERSARY = "OnAccountAnniversary"
    PER_HOUR = "PerHour"
    PER_OCCURRENCE = "PerOccurrence"
    PER_SHEET = "PerSheet"
    PER_TRANSACTION_AMOUNT = "PerTransactionAmount"
    PER_TRANSACTION_PERCENTAGE = "PerTransactionPercentage"
    QUARTERLY = "Quarterly"
    SIX_MONTHLY = "SixMonthly"
    START_OF_LOAN = "StartOfLoan"
    STATEMENT_MONTHLY = "StatementMonthly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
    Fee Sub Details
    """
    
    fee_frequency: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeFrequency') }})
    negotiable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Negotiable') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeAmount') }})
    fee_higher_tier: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeHigherTier') }})
    fee_lower_tier: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeLowerTier') }})
    fee_max: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeMax') }})
    fee_min: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeMin') }})
    fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeRate') }})
    fees_and_charges_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeesAndChargesNotes') }})
    representative_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepresentativeRate') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum(str, Enum):
    OTHER = "Other"
    ATM_DONATION = "ATMDonation"
    ATM_DEPOS_ATM_PAID_IN = "ATMDeposATMPaidIn"
    REPORT_CERT_BALANCE = "ReportCertBalance"
    ATM_ABROAD_CON_VISA_CREDIT = "ATMAbroadConVisaCredit"
    ATM_ABROAD_CON_VISA_DEBIT = "ATMAbroadConVisaDebit"
    ATM_CARDNET_ENV_IN = "ATMCardnetEnvIn"
    ATM_CASH_GROUP_ATM_CREDIT_CARD = "ATMCashGroupATMCreditCard"
    ATM_CASH_NON_GROUP_ATM_CREDITTCARD = "ATMCashNonGroupATMCredittcard"
    ATM_CASH_GROUP_ATM_DEBIT_CARD = "ATMCashGroupATMDebitCard"
    ATM_CASH_NON_GROUP_ATM_DEBITCARD = "ATMCashNonGroupATMDebitcard"
    ATM_CON_GROUP_ATM = "ATMConGroupATM"
    ATM_ABROAD = "ATMAbroad"
    ATM_FOREIGN_CASH_DEB_CARD = "ATMForeignCashDebCard"
    ATM_ABROAD_GOLD_VISA_DEBIT = "ATMAbroadGoldVisaDebit"
    ATM_SPAIN_CASH_CARD = "ATMSpainCashCard"
    ATM_SPAIN_DEBIT_CARD = "ATMSpainDebitCard"
    ATM_SPAIN_CONVERSION_DEBIT_CARD = "ATMSpainConversionDebitCard"
    ATM_SPAIN_CONVERSION_CASH_CARD = "ATMSpainConversionCashCard"
    ATM_NON_STERLING_WITHDRAWAL = "ATMNonSterlingWithdrawal"
    ATM_ABROAD_VISA_CREDIT = "ATMAbroadVisaCredit"
    ATM_ABROAD_VISA_DEBIT = "ATMAbroadVisaDebit"
    ATM_ABROAD_CON_VISA_GOLD_DEBIT = "ATMAbroadConVisaGoldDebit"
    ATM_WIDTHDRAW_CASH = "ATMWidthdrawCash"
    BACS_ON_LINE_ANCILLIARY = "BACSOnLineAncilliary"
    BACS_BATCH = "BACSBatch"
    BACS_ON_LINE_FILE = "BACSOnLineFile"
    BACS_FILE_ITEM = "BACSFileItem"
    BACS_ON_LINE_SETUP = "BACSOnLineSetup "
    BACS_ITEM = "BACSItem"
    BACS_ITEM_INTERBRANCH = "BACSItemInterbranch"
    BACS_BULK_BATCH = "BACSBulkBatch"
    BACS_ON_LINE_OVERLIMIT = "BACSOnLineOverlimit"
    BACS_ON_LINE_PAYMENT = "BACSOnLinePayment"
    BACS_RECALL_ITEM = "BACSRecallItem"
    BACS_ON_LINE_SERVICE = "BACSOnLineService"
    BACS_BULK_INTERNET = "BACSBulkInternet"
    BACSTEL_DIR_DEB_SMART_CARD = "BACSTELDirDebSmartCard"
    BACSTEL_DIR_DEB_WEB_INIT = "BACSTELDirDebWebInit"
    BACSTE_LIR_DEB_WEB_INIT = "BACSTELirDebWebInit"
    BACSTEL_DIR_DEB_OVERLIMIT = "BACSTELDirDebOverlimit"
    BACSTEL_DIR_DEB_PAYMENT = "BACSTELDirDebPayment"
    BACSTEL_DIR_DEB_SERVICE = "BACSTELDirDebService"
    BACSTEL_DIR_DEB_ANCILLIARY = "BACSTELDirDebAncilliary"
    BACS_DIRECT_ITEM_PROFILE = "BACSDirectItemProfile"
    BACSTEL_ANCILLIARY = "BACSTELAncilliary"
    BACSTEL_SMART_CARD = "BACSTELSmartCard"
    BACSTEL_FILE = "BACSTELFile"
    BACSTEL_SETUP = "BACSTELSetup "
    BACSTEL_OVERLIMIT = "BACSTELOverlimit"
    BACSTEL_PAYMENT = "BACSTELPayment"
    BACSTEL_SERVICE = "BACSTELService"
    CHAPS_OUT_BRANCH = "CHAPSOutBranch"
    CHAPS_CANCELLATION = "CHAPSCancellation"
    CHAPS_OUT_ONLINE_DEPOSIT_ACC = "CHAPSOutOnlineDepositAcc"
    CHAPS_IN = "CHAPSIn"
    CHAPS_OUT_INTER_BANK = "CHAPSOutInterBank"
    CHAPS_INTER_BANK = "CHAPSInterBank"
    CHAPS_OUT_POST = "CHAPSOutPost"
    CHAPS_OUT_INTER_BRANCH = "CHAPSOutInterBranch"
    CHAPS_OUT = "CHAPSOut"
    CHAPS_OUT_ONLINE = "CHAPSOutOnline"
    CHAP_SAND_FOREIGN_PAY = "CHAPSandForeignPay"
    CHAPS_OUT_MANUAL = "CHAPSOutManual"
    CARD_CARD_REPLACEMENT = "CardCardReplacement"
    DRAFTS_COUNTER = "DraftsCounter"
    DRAFTS_BANKERS = "DraftsBankers"
    DRAFTS_INTL_PAYABLE_ABROAD = "DraftsIntlPayableAbroad"
    DRAFTS_LOST_STOLEN = "DraftsLostStolen"
    CARD_PERSONALISED_CARD = "CardPersonalisedCard"
    DRAFTS_INTL_STOPPED_CANCELLED = "DraftsIntlStoppedCancelled"
    EURO_CHQ_X_LESS = "EuroChqXLess"
    EURO_CHQ_X_PLUS = "EuroChqXPlus"
    FPS_OUT_FUTURE_DATED = "FPSOutFutureDated"
    FPS_OUT_IMMEDIATE = "FPSOutImmediate"
    FPS_OUT = "FPSOut"
    FPS_OUT_OWN = "FPSOutOwn"
    FPS_IN_BRANCH = "FPSInBranch"
    FPSUK_PAY_URGENT = "FPSUKPayUrgent"
    LEGAL_ARTICLES_REPORT = "LegalArticlesReport"
    LEGAL_SEALING = "LegalSealing"
    LEGAL_BOND_AND_GUARANTEE = "LegalBondAndGuarantee"
    LEGAL_COURT_ORDER = "LegalCourtOrder"
    LEGAL_CO_SEARCH = "LegalCoSearch"
    LEGAL_DEPOSIT_ASSIGNMENT = "LegalDepositAssignment"
    LEGAL_GUARANTEE_PREP = "LegalGuaranteePrep"
    LEGAL_LIFE_POLICY_PREP_CO = "LegalLifePolicyPrepCo"
    LEGAL_LIFE_POLICY_PREP_PERSONAL = "LegalLifePolicyPrepPersonal"
    LEGAL_PRIORITY_PARI_PASSU = "LegalPriorityPariPassu"
    LEGAL_SUBORDINATION_AGREEMENT = "LegalSubordinationAgreement"
    DIR_DEB_DIRECT_DEBIT_ADMIN = "DirDebDirectDebitAdmin"
    DIR_DEB_DIRECT_DEBIT_CANCEL = "DirDebDirectDebitCancel"
    INTL_PAY_BIB_FOREIGN_LIMIT = "IntlPayBIBForeignLimit"
    INTL_PAY_CREDIT_TRANS_CUST = "IntlPayCreditTransCust"
    INTL_PAY_CREDIT_TRANS_NON_CUST = "IntlPayCreditTransNonCust"
    INTL_PAY_URGENT_PAYMENT_FOREIGN = "IntlPayUrgentPaymentForeign"
    INTL_PAY_EXPRESS_MONEY_MOVER = "IntlPayExpressMoneyMover"
    INTL_PAY_EEA_PAY_URGENT = "IntlPayEEAPayUrgent"
    INTL_PAY_IRISH_PAY_URGENT = "IntlPayIrishPayUrgent"
    INTL_PAY_EEA_PAY = "IntlPayEEAPay"
    INTL_PAY_FOREIGN_IN1_C_PLUS = "IntlPayForeignIn1CPlus"
    INTL_PAY_FOREIGN_PAYMENT_IN_UK_ACC = "IntlPayForeignPaymentInUKAcc"
    INTL_PAY_FOREIGN_CHARGE = "IntlPayForeignCharge"
    INTL_PAY_FOREIGN_CANCELLATION = "IntlPayForeignCancellation"
    INTL_PAY_FOREIGN_STANDARD_EU_EURO_BIC = "IntlPayForeignStandardEUEuroBIC"
    INTL_PAY_FX_FEE_RATE = "IntlPayFXFeeRate"
    INTL_PAY_FOREIGN_INTERNET = "IntlPayForeignInternet"
    INTL_PAY_FOREIGN = "IntlPayForeign"
    INTL_PAY_FOREIGN_INBOUND = "IntlPayForeignInbound"
    INTL_PAY_FX_PAYMENT_OUT = "IntlPayFXPaymentOut"
    INTL_PAY_FOREIGN_IN_SUB1_C = "IntlPayForeignInSub1C"
    INTL_PAY_FX_RATE = "IntlPayFXRate"
    INTL_PAY_FOREIGN_STANDARD_EU_EURO_NO_BIC = "IntlPayForeignStandardEUEuroNoBIC"
    INTL_PAY_FX_PAYMENT_OUT_IR = "IntlPayFXPaymentOutIR"
    INTL_PAY_FX_FEE = "IntlPayFXFee"
    INTL_PAY_PURCHASE_NON_STERLING = "IntlPayPurchaseNonSterling"
    INTL_PAY_POST_PAYMENT_FOREIGN = "IntlPayPostPaymentForeign"
    INTL_PAY_PURCHASE_RATE_NON_STERLING = "IntlPayPurchaseRateNonSterling"
    INTL_PAY_PAYMENT_TRACING = "IntlPayPaymentTracing"
    INTL_PAY_STANDARD_MONEY_MOVER = "IntlPayStandardMoneyMover"
    INTL_PAY_MT101_TRANSACTION = "IntlPayMT101Transaction"
    INTL_PAY_TRANS_NON_STERLING = "IntlPayTransNonSterling"
    INTL_PAY_TRANS_RATE_NON_STERLING = "IntlPayTransRateNonSterling"
    INTL_PAY_FOREIGN_URGENT_EU_EURO_BIC = "IntlPayForeignUrgentEUEuroBIC"
    INTL_PAY_FOREIGN_URGENT_EU_EURO_NO_BIC = "IntlPayForeignUrgentEUEuroNoBIC"
    INTL_PAY_URGENT_PAYMENT_GROUP = "IntlPayUrgentPaymentGroup"
    INTL_PAY_URGENT_PAYMENT_UK = "IntlPayUrgentPaymentUK"
    INTL_PAY_USA_PAY_URGENT = "IntlPayUSAPayUrgent"
    INTL_PAY_CURRENCY_PURCHASE = "IntlPayCurrencyPurchase"
    INTL_PAY_WORLDPAY_PAYMENT = "IntlPayWorldpayPayment"
    INTL_PAY_CURRENCY_WITHDRAW = "IntlPayCurrencyWithdraw"
    INV_PAY_BANK_DETAILS_WRONG = "InvPayBankDetailsWrong"
    INV_PAY_FOREIGN_BCNR = "InvPayForeignBCNR"
    INV_PAY_FOREIGN_RECALL = "InvPayForeignRecall"
    INV_GENERAL_INQ = "InvGeneralInq"
    INV_OLD_INSTRUCTION = "InvOldInstruction"
    INV_PAY_PAYMENT_RECALL = "InvPayPaymentRecall"
    INV_PAY_RETURN_DEBIT_XV_LESS = "InvPayReturnDebitXVLess"
    INV_PAY_RETURN_DEBIT_XV_PLUS = "InvPayReturnDebitXVPlus"
    INV_PAY_STOP_PAYMENT = "InvPayStopPayment"
    INV_PAY_STANDING_ORD_UNPAID = "InvPayStandingOrdUnpaid"
    SAFE_KEEP_ACCESS = "SafeKeepAccess"
    SAFE_KEEP_DEED_MEDIUM = "SafeKeepDeedMedium"
    SAFE_KEEPING_ENVELOPE = "SafeKeepingEnvelope"
    SAFE_KEEPING_INSPECTION = "SafeKeepingInspection"
    SAFE_KEEPING_LARGE_ITEM = "SafeKeepingLargeItem"
    SAFE_KEEP_MULTIPLE_ITEMS = "SafeKeepMultipleItems"
    SAFE_KEEPING_PARCEL = "SafeKeepingParcel"
    SAFE_KEEP_DEED_SMALL = "SafeKeepDeedSmall"
    SAFE_KEEP_ONE_ITEM = "SafeKeepOneItem"
    SAFE_KEEP_SAFE_CUSTODY = "SafeKeepSafeCustody"
    LOAN_ARRANGEMENT_FEE_PC = "LoanArrangementFeePC"
    LOAN_ARRANGEMENT = "LoanArrangement"
    LOAN_EARLY_REPAYMENT = "LoanEarlyRepayment"
    LOAN_LATE_PAYMENT = "LoanLatePayment"
    LOAN_SME_UNSECURED_LOAN = "LoanSMEUnsecuredLoan"
    LOAN_TIERED_ARRANGEMENT = "LoanTieredArrangement"
    NIGHT_SAFE_NIGHT_SAFE_BANK_OPEN = "NightSafeNightSafeBankOpen"
    NIGHT_SAFE_CREDIT_SUB5_K = "NightSafeCreditSub5K"
    NIGHT_SAFE_NIGHT_SAFE = "NightSafeNightSafe"
    NIGHT_SAFE_NIGHT_SAFE_PAID_IN = "NightSafeNightSafePaidIn"
    OVERDRAFT_ANNUAL_REVIEW = "OverdraftAnnualReview"
    OVERDRAFT_TEMP_OVERDRAFT = "OverdraftTempOverdraft"
    OVERDRAFT_UNAUTHORISED_BORROWING = "OverdraftUnauthorisedBorrowing"
    PO_POST_OFFICE_COUNTER_CREDIT = "POPostOfficeCounterCredit"
    PO_POST_OFFICE_CASH_CREDIT = "POPostOfficeCashCredit"
    PO_POST_OFFICE_CASH_OUT = "POPostOfficeCashOut"
    PO_POST_OFFICE_WITHDRAWAL = "POPostOfficeWithdrawal"
    CHQ_BOOK_THEFT_LOSS_ALL_STOPPED = "ChqBookTheftLossAllStopped"
    CHQ_ISSUED_CURRENCY_ACC = "ChqIssuedCurrencyAcc"
    CHQ_COPY = "ChqCopy"
    CHQ_DRAFT = "ChqDraft"
    CHQ_IN = "ChqIn"
    CHQ_DRAFT_STERLING = "ChqDraftSterling"
    CHQ_OUT_ISSUED = "ChqOutIssued"
    CHQ_SPECIAL_CHQ_PRESENTATION = "ChqSpecialChqPresentation"
    CHQ_COUNTER_CHEQUE = "ChqCounterCheque"
    CHQ_CHEQUESWITH_STATEMENT = "ChqChequeswithStatement"
    CHQ_STOPPED = "ChqStopped"
    CHQ_TRANS = "ChqTrans"
    CHQ_DRAFT_FX = "ChqDraftFX"
    CHQ_FOREIGN_COURIER = "ChqForeignCourier"
    CHQ_FOREIGN_NEG_TEN_THOU = "ChqForeignNegTenThou"
    CHQ_FOREIGN_NEG_HUNDRED = "ChqForeignNegHundred"
    CHEQUE_FOREIGN_BANK_DIVI = "ChequeForeignBankDivi"
    CHQ_FOREIGN_NEG_FIFTY_THOU = "ChqForeignNegFiftyThou"
    CHQ_PENSION_CHEQUE = "ChqPensionCheque"
    CHEQUE_FOREIGN_OTHER_DIVI = "ChequeForeignOtherDivi"
    CHQ_FOREIGN_NEG_FIVE_THOU = "ChqForeignNegFiveThou"
    CHQ_FOREIGN_NEG_MAX = "ChqForeignNegMax"
    CHQ_FOREIGN_GBPMMD_PLUS = "ChqForeignGBPMMDPlus"
    CHQ_GIFT_CHEQUE = "ChqGiftCheque"
    CHQ_COUNTER_LODGEMENT = "ChqCounterLodgement"
    CHQ_CASH_DROP_LODGEMENT = "ChqCashDropLodgement"
    CHQ_CHEQUE_PHOTOCOPY = "ChqChequePhotocopy"
    CHQ_POST_OFFICE_CREDIT = "ChqPostOfficeCredit"
    CHQ_POST_OFFICE_CHEQUE_COLLECTED = "ChqPostOfficeChequeCollected"
    CHQ_CHEQUE_RETRIEVAL = "ChqChequeRetrieval"
    CHQ_RECONCILLIATION_PER_TRANS = "ChqReconcilliationPerTrans"
    CHQ_SPECIAL_PRESENTATION_COUNT = "ChqSpecialPresentationCount"
    CHQ_SPECIAL_PRESENTATION_PTT = "ChqSpecialPresentationPTT"
    CHQ_UNPAID_CHARGE = "ChqUnpaidCharge"
    CHQ_UNPAID_TRANS_IN = "ChqUnpaidTransIn"
    CHQ_UNPAID_TRANS_OUT = "ChqUnpaidTransOut"
    CHQ_UNPAID_CHEQUE = "ChqUnpaidCheque"
    REPORT_AUDIT_LETTER = "ReportAuditLetter"
    REPORT_FAX_ADVICE_ADDITIONAL = "ReportFAXAdviceAdditional"
    REPORT_TEL_ADVICE_ADDITIONAL = "ReportTelAdviceAdditional"
    REPORT_CREDIT_HISTORY = "ReportCreditHistory"
    REPORT_CERT_INTEREST_DUPLICATE = "ReportCertInterestDuplicate"
    REPORT_CERT_INTEREST = "ReportCertInterest"
    REPORT_CREDIT_HISTORY_ADDITIONAL_IN_YEAR = "ReportCreditHistoryAdditionalInYear"
    REPORT_FOREIGN_STATUS_ENQ_ELEC = "ReportForeignStatusEnqElec"
    REPORT_FOREIGN_STATUS_ENQ = "ReportForeignStatusEnq"
    REPORT_CASH_BACKOR_INTEREST_ANAL = "ReportCashBackorInterestAnal"
    REPORT_STATEMENT_CHQ_DAILY = "ReportStatementChqDaily"
    REPORT_STATEMENT_CHQ_FORTNIGHTLY = "ReportStatementChqFortnightly"
    REPORT_STATEMENT_CHQ_MONTHLY = "ReportStatementChqMonthly"
    REPORT_STATEMENT_CHQ_WEEKLY = "ReportStatementChqWeekly"
    REPORT_STATEMENT_AND_DIVI_CHQ = "ReportStatementAndDiviChq"
    REPORT_REFERENCE = "ReportReference"
    REPORT_REFERRAL_ITEM = "ReportReferralItem"
    REPORT_STATEMENT_BY_ATM = "ReportStatementByATM"
    REPORT_STATEMENT_BY_BRANCH = "ReportStatementByBranch"
    REPORT_STATEMENT_COPY_REGULAR = "ReportStatementCopyRegular"
    REPORT_STATUS_ENQUIRY = "ReportStatusEnquiry"
    REPORT_STATEMENT_FREQUENT = "ReportStatementFrequent"
    REPORT_STATEMENT_MONTHLY = "ReportStatementMonthly"
    REPORT_STATEMENT_COPY1 = "ReportStatementCopy1"
    REPORT_STATEMENT_TO_BRANCH = "ReportStatementToBranch"
    REPORT_SMS_TEXT_MINI_STATEMENTOR_ALERT = "ReportSMSTextMiniStatementorAlert"
    REPORT_STATEMENT_FORTNIGHTLY = "ReportStatementFortnightly"
    REPORT_SMS_TEXT_MINI_STATEMENT_WO_M = "ReportSMSTextMiniStatementWoM"
    REPORT_SMS_TEXT_ALERT_BALANCE = "ReportSMSTextAlertBalance"
    REPORT_SMS_TEXT_ALERT = "ReportSMSTextAlert"
    REPORT_TAX_CERT = "ReportTaxCert"
    REPORT_WEEKLY_STATEMENT = "ReportWeeklyStatement"
    REPORT_TEXT_MESSAGE_BANKING = "ReportTextMessageBanking"
    SEPA_CANCELLATION = "SEPACancellation"
    SEPA_BRANCH = "SEPABranch"
    SEPA_CREDIT = "SEPACredit"
    SEPA_DIRECT_DEBIT = "SEPADirectDebit"
    SEPA_IN = "SEPAIn"
    SEPA_EURO = "SEPAEuro"
    SEPA_OUT = "SEPAOut"
    SEPA_UNPAID = "SEPAUnpaid"
    SEPA_WINBITS_ANNUAL_SERVICE = "SEPAWinbitsAnnual Service"
    SEPA_WINBITS_TRANSACTION = "SEPAWinbitsTransaction"
    TRANS_BILL_PAYMENT_BRANCH = "TransBillPaymentBranch"
    TRANS_BILL_COLLECT = "TransBillCollect"
    TRANS_TELEPHONE_BILL_PAYMENT = "TransTelephoneBillPayment"
    TRANS_BANK_PAYMENT = "TransBankPayment"
    TRANS_BILL_PAYMENT_TELEPHONE = "TransBillPaymentTelephone"
    TRANS_CORRESPONDENT_BANK_FEE = "TransCorrespondentBankFee"
    TRANS_CREDIT_TRANSFER_UK_DIFFERENT = "TransCreditTransferUKDifferent"
    TRANS_CREDIT_TRANSFER_UK_SAME = "TransCreditTransferUKSame"
    TRANS_CREDIT = "TransCredit"
    TRANS_CREDIT_TRANSFER = "TransCreditTransfer"
    TRANS_BRANCH_CREDIT = "TransBranchCredit"
    TRANS_DEBIT = "TransDebit"
    TRANS_DEB_CARD_DEB = "TransDebCardDeb"
    TRANS_UK_DIR_DEB = "TransUKDirDeb"
    TRANS_MANUAL_DEB = "TransManualDeb"
    TRANS_BUY_FOREIGN_WITH_GBP = "TransBuyForeignWithGBP"
    TRANS_GOOD_VALUE_REQ = "TransGoodValueReq"
    TRANS_SWIFT_OUT_UK_FOREIGN = "TransSWIFTOutUKForeign"
    TRANS_INCONPLETE_INSTRUCTION = "TransInconpleteInstruction"
    TRANS_MANUAL_ENTRIES = "TransManualEntries"
    TRANS_MANUAL_TRANS = "TransManualTrans"
    TRANS_NON_STERLING = "TransNonSterling"
    TRANS_POS_SALE_FOREIGN = "TransPOSSaleForeign"
    TRANS_PRI_PAYMENT_POST = "TransPriPaymentPost"
    TRANS_POS_SALE_UK = "TransPOSSaleUK"
    TRANS_RETURN_PAYMENT = "TransReturnPayment"
    TRANS_RECONCILIATION_PER_TRANS = "TransReconciliationPerTrans"
    TRANS_STANDING_ORD_ADMIN = "TransStandingOrdAdmin"
    TRANS_STANDING_ORD = "TransStandingOrd"
    TRANS_STANDING_ORD_MAN_PAY = "TransStandingOrdManPay"
    TRANS_TRAVELLERS_CHQ_OTHER_BANK = "TransTravellersChqOtherBank"
    TRANS_TEL_BUSI_PRI_PAYMENT_FOREIGN_TO_UK_ACC = "TransTelBusiPriPaymentForeignToUKAcc"
    TRANS_TELE_ITEM = "TransTeleItem"
    TRANS_TEL_BUSI_PRI_PAYMENT_TO_GRP_ACC = "TransTelBusiPriPaymentToGrpAcc"
    TRANS_TRAVELLERS_CHQ_RATE = "TransTravellersChqRate"
    TRANS_TRANSFER_EX_GROUP = "TransTransferExGroup"
    TRANS_UNAUTHORISED_PAID_TRANS = "TransUnauthorisedPaidTrans"
    TRANS_URGENT_PAYMENT_POSTAL = "TransUrgentPaymentPostal"
    TRANS_UNPAID_TRANS = "TransUnpaidTrans"
    TRANS_TEL_BUSI_PRI_PAYMENT_TO_NON_GRP_ACC = "TransTelBusiPriPaymentToNonGrpAcc"
    TRANS_SWIFT_OUT_NON_EEA_STERLING = "TransSWIFTOutNonEEASterling"
    AUTO_AUTO_CREDIT = "AutoAutoCredit"
    AUTO_AUTOMATED_ENTRIES = "AutoAutomatedEntries"
    AUTO_AUTO_CREDIT_PHONE_INET = "AutoAutoCreditPhoneInet"
    AUTO_AUTOMATED_TRANS = "AutoAutomatedTrans"
    AUTO_DEBIT_CARD_COMMERCIAL = "AutoDebitCardCommercial"
    AUTO_FPS_AUTO_CREDIT = "AutoFPSAutoCredit"
    VISA_CONVERT_ABROAD_FOREIGN = "VisaConvertAbroadForeign"
    VISA_BUREAU_DE_CHANGE = "VisaBureauDeChange"
    VISA_TRAVELLERS_CHQOR_CURRENCY = "VisaTravellersChqorCurrency"
    ONLINE_INTERNET_BILL_PAYMENT = "OnlineInternetBillPayment"
    ONLINE_BUSINESS_ONLINE_EURO_PAYMENT = "OnlineBusinessOnlineEuroPayment"
    ONLINE_BUSINESS_ONLINE_URGENT_EURO_PAYMENT = "OnlineBusinessOnlineUrgentEuroPayment"
    ONLINE_BUSINESS_ONLINE_FOREIGN_PAYMENT = "OnlineBusinessOnlineForeignPayment"
    ONLINE_INTERBANK_TRANSFER = "OnlineInterbankTransfer"
    ONLINE_INTERBANK_PER_TRANSFER = "OnlineInterbankPerTransfer"
    ONLINE_INTERBRANCH_TRANSFER = "OnlineInterbranchTransfer"
    ONLINE_INTERBRANCH_PER_TRANSFER = "OnlineInterbranchPerTransfer"
    ONLINE_SUBSCRIPTION_MONTHLY = "OnlineSubscriptionMonthly"
    ONLINE_BANKING_PAYMENT = "OnlineBankingPayment"
    ONLINE_BANKING_SUBSCRIPTION = "OnlineBankingSubscription"
    ONLINE_POS_SALE = "OnlinePOSSale"
    ONLINE_PERSONAL_CUST_ANCILLARYS = "OnlinePersonalCustAncillarys"
    ONLINE_PERSONAL_CUST_SERVICE = "OnlinePersonalCustService"
    ONLINE_PERSONAL_CUST_OVERLIMITS = "OnlinePersonalCustOverlimits"
    ONLINE_REPLACEMENT_CARD_READER = "OnlineReplacementCardReader"
    ONLINE_PERSONAL_CUST_SET_UP = "OnlinePersonalCustSetUp"
    ONLINE_PERSONAL_CUST_TRANSACTION = "OnlinePersonalCustTransaction"
    ONLINE_PAYMENTIN_GB_PTO_UK = "OnlinePaymentinGBPtoUK"
    ONLINE_URGENT_PAYMENT = "OnlineUrgentPayment"
    ONLINE_PAYMENTIN_US_DTO_US = "OnlinePaymentinUSDtoUS"
    ONLINE_BULK_DIRECT_DEB_STERLING = "OnlineBulkDirectDebSterling"
    FOREIGN_CHQ_SENT = "ForeignChqSent"
    FOREIGN_CHQ_SELF = "ForeignChqSelf"
    FOREIGN_CHQ_ENCASHMENT = "ForeignChqEncashment"
    FOREIGN_FX_INWARDS_CUST = "ForeignFXInwardsCust"
    FOREIGN_FX_TRANSFERS_ROI = "ForeignFXTransfersROI"
    FOREIGN_FX_FORWARD_TRANS = "ForeignFXForwardTrans"
    FOREIGN_FX_TRANSFERS_BOI = "ForeignFXTransfersBOI"
    FOREIGN_EX_MAINTENANCE = "ForeignExMaintenance"
    FOREIGN_FX_INWARDS_NON_CUST = "ForeignFXInwardsNonCust"
    FOREIGN_FX_OUTWARDS = "ForeignFXOutwards"
    FOREIGN_PURCHASE = "ForeignPurchase"
    FOREIGN_STATUS_REP = "ForeignStatusRep"
    FOREIGN_CHQ_DRAFT = "ForeignChqDraft"
    FOREIGN_CHQ_C_LESS = "ForeignChqCLess"
    FOREIGN_CHQ_M_LESS = "ForeignChqMLess"
    FOREIGN_CHQ_OTHER = "ForeignChqOther"
    FOREIGN_CHQ_M_PLUS = "ForeignChqMPlus"
    FOREIGN_CHQ_CCC = "ForeignChqCCC"
    SERVICE_C_ACCOUNT_FEE = "ServiceCAccountFee"
    SERVICE_C_ACCOUNT_FEE_MONTHLY = "ServiceCAccountFeeMonthly"
    SERVICE_C_ACCOUNT_FEE_QUARTERLY = "ServiceCAccountFeeQuarterly"
    SERVICE_C_BALANCE_HANDLING = "ServiceCBalanceHandling"
    SERVICE_C_FIXED_TARIFF = "ServiceCFixedTariff"
    SERVICE_C_BUSI_DEP_ACC_BREAKAGE = "ServiceCBusiDepAccBreakage"
    SERVICE_C_MONITOR_DAILY = "ServiceCMonitorDaily"
    SERVICE_C_MANAGEMENT_FEE = "ServiceCManagementFee"
    SERVICE_C_MINIMUM_MONTHLY_FEE = "ServiceCMinimumMonthlyFee"
    SERVICE_C_MONITOR_MONTHLY = "ServiceCMonitorMonthly"
    SERVICE_C_MONITOR_WEEKLY = "ServiceCMonitorWeekly"
    SERVICE_C_SECURITY_FEE = "ServiceCSecurityFee"
    SERVICE_CMT940_ACCOUNT_FIRST = "ServiceCMT940AccountFirst"
    SERVICE_CMT940_ACCOUNT_SUBSEQUENT = "ServiceCMT940AccountSubsequent"
    SERVICE_C_OTHER = "ServiceCOther"
    COUNTER_COIN_HANDLING = "CounterCoinHandling"
    COUNTER_CASH_IN = "CounterCashIn"
    COUNTER_CASH_IN_NOT_US = "CounterCashInNotUs"
    COUNTER_CASH_OUT = "CounterCashOut"
    COUNTER_CASH_X = "CounterCashX"
    COUNTER_FOREIGN_CASH_MAX = "CounterForeignCashMax"
    COUNTER_FOREIGN_NOTE_HANDLING = "CounterForeignNoteHandling"
    COUNTER_FOREIGN_CASH_OUT = "CounterForeignCashOut"
    COUNTER_CASH_FEE_RATE = "CounterCashFeeRate"
    COUNTER_FOREIGN_CASH_OUT_TX = "CounterForeignCashOutTx"
    COUNTER_COUNTER_LODGEMENT = "CounterCounterLodgement"
    COUNTER_CASH_DROP_LODGEMENT = "CounterCashDropLodgement"
    COUNTER_NOTES_LODGED = "CounterNotesLodged"
    COUNTER_NOTES_OUT = "CounterNotesOut"
    COUNTER_CASH_IN_OWN = "CounterCashInOwn"
    COUNTER_PAID_TRANS = "CounterPaidTrans"
    COUNTER_CASH_FEE_PERCENT = "CounterCashFeePercent"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail
    Fee Detail
    """
    
    fee_sub_details: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeSubDetails') }})
    fee_type: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeType') }})
    date_of_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    length_promotional_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    other: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Other') }})
    start_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetails:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetails
    Fee Details
    """
    
    fee_detail: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeDetail') }})
    fee_sub_type: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeSubType') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFees:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFees
    Fees
    """
    
    fee_details: List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFeesFeeDetails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeDetails') }})
    date_of_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    fee_higher_tier: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeHigherTier') }})
    fee_lower_tier: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeLowerTier') }})
    length_promotional_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    start_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesProductStateEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndCharges:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndCharges
    Fees And Charges
    """
    
    fees: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesFees = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Fees') }})
    product_state: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndChargesProductStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductState') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountMobileWalletEnum(str, Enum):
    ANDROID_PAY = "AndroidPay"
    APPLE_PAY = "ApplePay"
    ISSUER_MOBILE_APP = "IssuerMobileApp"
    MOBILE_BANKING_APP = "MobileBankingApp"
    OTHER = "Other"
    PAY_M = "PayM"
    SAMSUNG_PAY = "SamsungPay"
    VODAFONE_WALLET = "VodafoneWallet"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum(str, Enum):
    UK = "UK"
    EU = "EU"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationBrand:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationBrand
    Brand
    """
    
    trademark_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrademarkID') }})
    trademark_ipo_code: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrademarkIPOCode') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationParentOrganisationOrganisationName:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationParentOrganisationOrganisationName
    Organisation Name
    """
    
    legal_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LegalName') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationParentOrganisation:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationParentOrganisation
    Parent organisation
    """
    
    organisation_name: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationParentOrganisationOrganisationName = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganisationName') }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BIC') }})
    lei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LEI') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisation:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisation
    Organisation
    """
    
    brand: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationBrand = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Brand') }})
    parent_organisation: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisationParentOrganisation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentOrganisation') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum(str, Enum):
    NO = "No"
    YES = "Yes"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum(str, Enum):
    PERIODIC = "Periodic"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"
    SETUP = "Setup"
    REVIEW = "Review"
    RENEWAL = "Renewal"
    MINIMUM_SETUP = "MinimumSetup"
    MAXIMUM_SETUP = "MaximumSetup"
    TOTAL = "Total"
    ITEM = "Item"
    EMERGENCY_LENDING = "EmergencyLending"
    OTHER = "Other"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndCharges:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndCharges
    Overdraft Fees Charges
    """
    
    fee_charge_type: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeType') }})
    fee_charge_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeAmount') }})
    fee_charge_application_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeApplicationFrequency') }})
    fee_charge_calculation_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCalculationFrequency') }})
    fee_charge_other_application_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherApplicationFrequency') }})
    fee_charge_other_calculation_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherCalculationFrequency') }})
    fee_charge_other_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherType') }})
    fee_charge_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRate') }})
    fee_charge_rate_other_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateOtherType') }})
    fee_charge_rate_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateType') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftProductStateEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum(str, Enum):
    UNARRANGED = "Unarranged"
    ARRANGED = "Arranged"
    OTHER = "Other"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum(str, Enum):
    PERIODIC = "Periodic"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"
    SETUP = "Setup"
    REVIEW = "Review"
    RENEWAL = "Renewal"
    MINIMUM_SETUP = "MinimumSetup"
    MAXIMUM_SETUP = "MaximumSetup"
    TOTAL = "Total"
    ITEM = "Item"
    EMERGENCY_LENDING = "EmergencyLending"
    OTHER = "Other"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges
    Overdraft Fees Charges
    """
    
    fee_charge_type: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeType') }})
    fee_charge_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeAmount') }})
    fee_charge_application_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeApplicationFrequency') }})
    fee_charge_calculation_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCalculationFrequency') }})
    fee_charge_other_application_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherApplicationFrequency') }})
    fee_charge_other_calculation_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherCalculationFrequency') }})
    fee_charge_other_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherType') }})
    fee_charge_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRate') }})
    fee_charge_rate_other_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateOtherType') }})
    fee_charge_rate_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateType') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    DAILY = "Daily"
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    HALF_YEARLY = "Half-Yearly"
    YEARLY = "Yearly"
    OVERNIGHT = "Overnight"
    OTHER = "Other"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType
    Other Code Type
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum(str, Enum):
    GROSS = "Gross"
    NET = "Net"
    OTHER = "Other"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum(str, Enum):
    PERIODIC = "Periodic"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"
    SETUP = "Setup"
    REVIEW = "Review"
    RENEWAL = "Renewal"
    MINIMUM_SETUP = "MinimumSetup"
    MAXIMUM_SETUP = "MaximumSetup"
    TOTAL = "Total"
    ITEM = "Item"
    EMERGENCY_LENDING = "EmergencyLending"
    OTHER = "Other"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges
    Overdraft Fees Charges
    """
    
    fee_charge_type: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeType') }})
    fee_charge_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeAmount') }})
    fee_charge_application_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeApplicationFrequency') }})
    fee_charge_calculation_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeCalculationFrequency') }})
    fee_charge_other_application_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherApplicationFrequency') }})
    fee_charge_other_calculation_frequency: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherCalculationFrequency') }})
    fee_charge_other_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeOtherType') }})
    fee_charge_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRate') }})
    fee_charge_rate_other_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateOtherType') }})
    fee_charge_rate_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeRateType') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand
    Tiers
    """
    
    tier_value_maximum: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMaximum') }})
    tier_value_minimum: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierValueMinimum') }})
    ear: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EAR') }})
    fees_and_charges: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeesAndCharges') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    tier_band_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandIdentification') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSet:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSet
    Tier Bandset
    """
    
    arrangement_type: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArrangementType') }})
    cma_defined_indicator: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CMADefinedIndicator') }})
    arrangement_other_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArrangementOtherType') }})
    buffer_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferAmount') }})
    ear: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EAR') }})
    fees_and_charges: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeesAndCharges') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    overdraft_tier_band: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftTierBand') }})
    tier_band_set_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TierBandSetIdentification') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTypeEnum(str, Enum):
    COMMITTED = "Committed"
    ON_DEMAND = "OnDemand"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraft:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraft
    Overdraft
    """
    
    date_of_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateOfChange') }})
    fee_charge_negotiable_indicator: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeeChargeNegotiableIndicator') }})
    fees_and_charges: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftFeesAndCharges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeesAndCharges') }})
    length_promotional_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LengthPromotionalInDays') }})
    maximum_monthly_overdraft_charge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumMonthlyOverdraftCharge') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    overdraft_product_state: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftProductStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftProductState') }})
    overdraft_tier_band_set: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTierBandSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftTierBandSet') }})
    overdraft_type: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraftOverdraftTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftType') }})
    start_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPromotionOrFutureTerms') }})
    stop_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopPromotionOrFutureTerms') }})
    term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Term') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountProductSegmentEnum(str, Enum):
    BASIC = "Basic"
    BUSINESS = "Business"
    GENERAL = "General"
    GRADUATE = "Graduate"
    INTERNATIONAL = "International"
    PACKAGED = "Packaged"
    PERSONAL = "Personal"
    PREMIUM = "Premium"
    REWARD = "Reward"
    SME = "SME"
    STUDENT = "Student"
    YOUNG_ADULT = "YoungAdult"
    YOUTH = "Youth"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountProductTypeEnum(str, Enum):
    BCA = "BCA"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccount:
    r"""GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccount
    Business current account
    """
    
    access_channels: List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountAccessChannelsEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessChannels') }})
    benefits: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountBenefits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Benefits') }})
    ca_pricing: List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCaPricing] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CAPricing') }})
    card_type: List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCardTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CardType') }})
    card_withdrawal_limit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CardWithdrawalLimit') }})
    cheque_book_available: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChequeBookAvailable') }})
    contactless: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Contactless') }})
    credit_interest: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditInterest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditInterest') }})
    credit_scoring_part_of_account_opening_for_getting_an_account: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningForGettingAnAccount') }})
    currency: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    eligibility: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountEligibility = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Eligibility') }})
    fees_and_charges: List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeesAndCharges] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeesAndCharges') }})
    international_payments_supported: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InternationalPaymentsSupported') }})
    organisation: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOrganisation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Organisation') }})
    overdraft_offered: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverdraftOffered') }})
    product_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductDescription') }})
    product_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductIdentifier') }})
    product_segment: List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountProductSegmentEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductSegment') }})
    product_type: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountProductTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductType') }})
    product_url: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductURL') }})
    tsand_cs: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TsandCs') }})
    card_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CardNotes') }})
    credit_scoring_part_of_account_opening_for_id_verification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningForIDVerification') }})
    credit_scoring_part_of_account_opening_id_verification_is_a_hard_or_soft_credit_score: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore') }})
    credit_scoring_part_of_account_opening_id_verification_text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningIDVerificationText') }})
    credit_scoring_part_of_account_opening_is_a_hard_or_soft_credit_score: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore') }})
    credit_scoring_part_of_account_opening_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditScoringPartOfAccountOpeningText') }})
    feature: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountFeature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Feature') }})
    maximum_monthly_charge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumMonthlyCharge') }})
    mobile_wallet: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountMobileWalletEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MobileWallet') }})
    overdraft: Optional[List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccountOverdraft]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Overdraft') }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum(str, Enum):
    USE_OF_THE_AP_IS_AND_ANY_RELATED_DATA_WILL_BE_SUBJECT_TO_THE_TERMS_OF_THE_OPEN_LICENCE_AND_SUBJECT_TO_TERMS_AND_CONDITIONS = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_OPEN_LICENCE = "https://www.openbanking.org.uk/open-licence"

class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_TERMS = "https://www.openbanking.org.uk/terms"


@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData:
    agreement: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Agreement') }})
    last_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    license: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('License') }})
    terms_of_use: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TermsOfUse') }})
    total_results: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalResults') }})
    

@dataclass_json
@dataclass
class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON:
    data: List[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONBusinessCurrentAccount] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetBusinessCurrentAccountsRequest:
    headers: GetBusinessCurrentAccountsHeaders = field()
    

@dataclass
class GetBusinessCurrentAccountsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    four_hundred_error_object: Optional[GetBusinessCurrentAccounts400ErrorObject] = field(default=None)
    four_hundred_and_eight_error_object: Optional[GetBusinessCurrentAccounts408ErrorObject] = field(default=None)
    four_hundred_and_twenty_nine_error_object: Optional[GetBusinessCurrentAccounts429ErrorObject] = field(default=None)
    five_hundred_error_object: Optional[GetBusinessCurrentAccounts500ErrorObject] = field(default=None)
    five_hundred_and_three_error_object: Optional[GetBusinessCurrentAccounts503ErrorObject] = field(default=None)
    error_object: Optional[GetBusinessCurrentAccountsErrorObject] = field(default=None)
    get_business_current_accounts_200_application_prs_openbanking_opendata_v1_3_plus_json_object: Optional[GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON] = field(default=None)
    
