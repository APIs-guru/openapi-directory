from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetCommercialCreditCardsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommercialCreditCardsRequest:
    headers: GetCommercialCreditCardsHeaders = field(default=None)
    
class GetCommercialCreditCards400ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_SENT_A_REQUEST_WHICH_COULD_NOT_BE_UNDERSTOOD_ = "You have sent a request which could not be understood."

class GetCommercialCreditCards400ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED = "400"

class GetCommercialCreditCards400ErrorObjectTitleEnum(str, Enum):
    BAD_REQUEST = "Bad request"


@dataclass_json
@dataclass
class GetCommercialCreditCards400ErrorObject:
    description: GetCommercialCreditCards400ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetCommercialCreditCards400ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetCommercialCreditCards400ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetCommercialCreditCards408ErrorObjectDescriptionEnum(str, Enum):
    YOUR_CLIENT_HAS_FAILED_TO_SUBMIT_A_REQUEST_AND_A_TIMEOUT_HAS_OCCURRED_ = "Your client has failed to submit a request, and a timeout has occurred."

class GetCommercialCreditCards408ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_EIGHT = "408"

class GetCommercialCreditCards408ErrorObjectTitleEnum(str, Enum):
    CLIENT_TIMEOUT = "Client timeout"


@dataclass_json
@dataclass
class GetCommercialCreditCards408ErrorObject:
    description: GetCommercialCreditCards408ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetCommercialCreditCards408ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetCommercialCreditCards408ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetCommercialCreditCards429ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_REQUESTED_THIS_RESOURCE_TOO_OFTEN_SLOW_DOWN_ = "You have requested this resource too often. Slow down."

class GetCommercialCreditCards429ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_TWENTY_NINE = "429"

class GetCommercialCreditCards429ErrorObjectTitleEnum(str, Enum):
    TOO_MANY_REQUESTS = "Too many requests"


@dataclass_json
@dataclass
class GetCommercialCreditCards429ErrorObject:
    description: GetCommercialCreditCards429ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetCommercialCreditCards429ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetCommercialCreditCards429ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetCommercialCreditCards500ErrorObjectDescriptionEnum(str, Enum):
    AN_ERROR_OCCURRED_ON_THE_SERVER_NO_FURTHER_INFORMATION_IS_AVAILABLE_ = "An error occurred on the server. No further information is available."

class GetCommercialCreditCards500ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED = "500"

class GetCommercialCreditCards500ErrorObjectTitleEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class GetCommercialCreditCards500ErrorObject:
    description: GetCommercialCreditCards500ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetCommercialCreditCards500ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetCommercialCreditCards500ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetCommercialCreditCards503ErrorObjectDescriptionEnum(str, Enum):
    THE_SERVICE_IS_TEMPORARILY_UNAVAILABLE_ = "The service is temporarily unavailable."

class GetCommercialCreditCards503ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED_AND_THREE = "503"

class GetCommercialCreditCards503ErrorObjectTitleEnum(str, Enum):
    SERVICE_TEMPORARILY_UNAVAILABLE = "Service temporarily unavailable"


@dataclass_json
@dataclass
class GetCommercialCreditCards503ErrorObject:
    description: GetCommercialCreditCards503ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetCommercialCreditCards503ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetCommercialCreditCards503ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetCommercialCreditCardsErrorObject:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum(str, Enum):
    CASH_DEPOSIT = "CashDeposit"
    DEPOSIT = "Deposit"
    DIRECT_DEBIT = "DirectDebit"
    INITIAL_DEPOSIT = "InitialDeposit"
    INTERNET_LOGON = "InternetLogon"
    MOBILE_LOGON = "MobileLogon"
    REGULAR_DEPOSIT = "RegularDeposit"


@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetail:
    benefit_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BenefitDescription' }})
    benefit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BenefitID' }})
    benefit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BenefitName' }})
    benefit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BenefitType' }})
    benefit_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BenefitValue' }})
    counter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Counter' }})
    criteria_type: Optional[List[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CriteriaType' }})
    default_to_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultToAccounts' }})
    maximum_criteria: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumCriteria' }})
    minimum_criteria: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumCriteria' }})
    promotion_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PromotionEndDate' }})
    promotion_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PromotionStartDate' }})
    

@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItem:
    benefit_detail: Optional[List[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BenefitDetail' }})
    date_of_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateOfChange' }})
    length_promotional_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LengthPromotionalInDays' }})
    start_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartPromotionOrFutureTerms' }})
    stop_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopPromotionOrFutureTerms' }})
    
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"


@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroup:
    benefit_item: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItem = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BenefitItem' }})
    benefit_sub_type: Optional[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BenefitSubType' }})
    

@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefits:
    benefit: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Benefit' }})
    benefit_group: Optional[List[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BenefitGroup' }})
    
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCcSubTypeEnum(str, Enum):
    FUTURE_MULTIPLE_TERMS = "FutureMultipleTerms"
    PROMOTIONAL = "Promotional"
    REGULAR = "Regular"

class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum(str, Enum):
    ANNUAL = "Annual"
    MONTHLY = "Monthly"

class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemCardSchemeEnum(str, Enum):
    CASHCARD = "Cashcard"
    CREDIT_MASTERCARD = "CreditMastercard"
    CREDIT_VISA = "CreditVisa"

class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum(str, Enum):
    DAILY = "Daily"
    FLEXIBLE = "Flexible"
    FORTNIGHTLY = "Fortnightly"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItem:
    apr_rate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APRRate' }})
    ability_to_set_individual_limits: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AbilityToSetIndividualLimits' }})
    access_to_online_data_reporting_tool: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToOnlineDataReportingTool' }})
    allocationof_repayment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocationofRepayment' }})
    annual_account_fee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnnualAccountFeeType' }})
    annual_fee_amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnnualFeeAmount' }})
    balance_transfer_interest_rate_period: Optional[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BalanceTransferInterestRatePeriod' }})
    balance_transfer_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BalanceTransferRate' }})
    card_scheme: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemCardSchemeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CardScheme' }})
    cash_advance_rate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CashAdvanceRate' }})
    cash_withdrawals_allowed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CashWithdrawalsAllowed' }})
    cashback_percent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CashbackPercent' }})
    cheque_fee_percent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChequeFeePercent' }})
    convenience_cheque: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConvenienceCheque' }})
    date_of_change: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateOfChange' }})
    days_interest_free_credit_if_payment_full: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DaysInterestFreeCreditIfPaymentFull' }})
    exchange_rate_adjustment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExchangeRateAdjustment' }})
    fees_on_cheque: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeesOnCheque' }})
    foreign_cash_fee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForeignCashFee' }})
    foreign_cash_fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForeignCashFeeRate' }})
    foreign_purchase_fee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForeignPurchaseFee' }})
    foreign_purchase_fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForeignPurchaseFeeRate' }})
    issuing_emergency_cards_fees: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssuingEmergencyCardsFees' }})
    length_promotional_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LengthPromotionalInDays' }})
    maximum_number_of_cards_permitted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumNumberOfCardsPermitted' }})
    minimum_credit_limit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumCreditLimit' }})
    minimum_lending_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumLendingAmount' }})
    minimum_repayment_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumRepaymentAmount' }})
    minimum_repayment_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumRepaymentPercentage' }})
    non_sterling_cash_fee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonSterlingCashFee' }})
    non_sterling_cash_fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonSterlingCashFeeRate' }})
    non_sterling_purchase_fee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonSterlingPurchaseFee' }})
    non_sterling_purchase_fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonSterlingPurchaseFeeRate' }})
    non_sterling_transaction_fee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonSterlingTransactionFee' }})
    non_sterling_transaction_fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonSterlingTransactionFeeRate' }})
    over_limit_fee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverLimitFee' }})
    payment_days_after_statement: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentDaysAfterStatement' }})
    payment_scheme_exchange_fee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentSchemeExchangeFee' }})
    payment_scheme_exchange_fee_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentSchemeExchangeFeeRate' }})
    payment_scheme_exchange_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentSchemeExchangeRate' }})
    purchase_rate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PurchaseRate' }})
    repayment_frequency: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepaymentFrequency' }})
    repayment_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepaymentNotes' }})
    start_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartPromotionOrFutureTerms' }})
    statement_at_account_level: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementAtAccountLevel' }})
    statement_at_personal_level: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementAtPersonalLevel' }})
    stop_promotion_or_future_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopPromotionOrFutureTerms' }})
    

@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetails:
    cc_sub_type: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCcSubTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CCSubType' }})
    commercial_credit_card_item: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItem = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommercialCreditCardItem' }})
    
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum(str, Enum):
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

class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum(str, Enum):
    EXISTING_CUSTOMERS = "ExistingCustomers"
    NEW_CUSTOMERS_ONLY = "NewCustomersOnly"
    SWITCHERS_ONLY = "SwitchersOnly"
    START_UP = "StartUp"

class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum(str, Enum):
    ACADEMIC_TERM = "AcademicTerm"
    HALF_YEARLY = "HalfYearly"
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    WEEKLY = "Weekly"
    YEARLY = "Yearly"

class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum(str, Enum):
    UK = "UK"
    EEA = "EEA"
    EU = "EU"
    EFTA = "EFTA"
    GB_ENG = "GB - ENG"
    GB_NIR = "GB - NIR"
    GB_SCT = "GB - SCT"
    GB_WLS = "GB - WLS"
    IRL = "IRL"

class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum(str, Enum):
    JOINT = "Joint"
    SOLE_INCOME = "SoleIncome"
    SOLE_OR_JOINT = "SoleOrJoint"
    TURNOVER = "Turnover"


@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibility:
    age_restricted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgeRestricted' }})
    annual_business_turnover: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnnualBusinessTurnover' }})
    annual_business_turnover_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnnualBusinessTurnoverCurrency' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    eligibility_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EligibilityName' }})
    eligibility_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EligibilityNotes' }})
    eligibility_type: Optional[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EligibilityType' }})
    income_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncomeCondition' }})
    income_turnover_related: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncomeTurnoverRelated' }})
    marketing_eligibility: Optional[List[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MarketingEligibility' }})
    max_number_of_accounts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxNumberOfAccounts' }})
    maximum_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumAge' }})
    maximum_age_to_open: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumAgeToOpen' }})
    maximum_opening_amount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumOpeningAmount' }})
    min_income_turnover_paid_into_account: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinIncomeTurnoverPaidIntoAccount' }})
    minimum_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumAge' }})
    minimum_deposit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumDeposit' }})
    minimum_income_frequency: Optional[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumIncomeFrequency' }})
    minimum_income_turnover_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumIncomeTurnoverAmount' }})
    minimum_income_turnover_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumIncomeTurnoverCurrency' }})
    minimum_operating_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumOperatingBalance' }})
    minimum_operating_balance_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumOperatingBalanceCurrency' }})
    minimum_operating_balance_exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumOperatingBalanceExists' }})
    opening_deposit_maximum_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningDepositMaximumAmount' }})
    opening_deposit_maximum_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningDepositMaximumCurrency' }})
    opening_deposit_minimum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningDepositMinimum' }})
    opening_deposit_minimum_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningDepositMinimumCurrency' }})
    other_financial_holding_required: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherFinancialHoldingRequired' }})
    previous_bankruptcy: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreviousBankruptcy' }})
    residency_restricted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResidencyRestricted' }})
    residency_restricted_region: Optional[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResidencyRestrictedRegion' }})
    single_joint_income: Optional[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SingleJointIncome' }})
    third_sector_organisations: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThirdSectorOrganisations' }})
    
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum(str, Enum):
    UK = "UK"
    EU = "EU"


@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand:
    trademark_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrademarkID' }})
    trademark_ipo_code: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrademarkIPOCode' }})
    

@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName:
    legal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LegalName' }})
    

@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation:
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BIC' }})
    lei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LEI' }})
    organisation_name: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganisationName' }})
    

@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation:
    brand: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Brand' }})
    parent_organisation: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentOrganisation' }})
    
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum(str, Enum):
    CASHBACK = "Cashback"
    CORPORATE = "Corporate"
    GENERAL = "General"
    REWARD = "Reward"
    SME = "SME"

class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnum(str, Enum):
    COMMERCIAL_CREDIT_CARDS = "CommercialCreditCards"


@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONData:
    benefits: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Benefits' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    details: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    eligibility: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibility = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Eligibility' }})
    key_features: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyFeatures' }})
    organisation: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Organisation' }})
    other_key_features: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherKeyFeatures' }})
    payment_holiday: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentHoliday' }})
    payment_holiday_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentHolidayDescription' }})
    product_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductIdentifier' }})
    product_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    product_segment: Optional[List[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductSegment' }})
    product_type: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductType' }})
    product_url: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductURL' }})
    tsand_cs: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TsandCs' }})
    
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum(str, Enum):
    USE_OF_THE_AP_IS_AND_ANY_RELATED_DATA_WILL_BE_SUBJECT_TO_THE_TERMS_OF_THE_OPEN_LICENCE_AND_SUBJECT_TO_TERMS_AND_CONDITIONS = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"

class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_OPEN_LICENCE = "https://www.openbanking.org.uk/open-licence"

class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_TERMS = "https://www.openbanking.org.uk/terms"


@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData:
    agreement: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Agreement' }})
    last_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    license: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'License' }})
    terms_of_use: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TermsOfUse' }})
    total_results: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalResults' }})
    

@dataclass_json
@dataclass
class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSON:
    data: List[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetCommercialCreditCardsResponse:
    four_hundred_error_object: Optional[GetCommercialCreditCards400ErrorObject] = field(default=None)
    four_hundred_and_eight_error_object: Optional[GetCommercialCreditCards408ErrorObject] = field(default=None)
    four_hundred_and_twenty_nine_error_object: Optional[GetCommercialCreditCards429ErrorObject] = field(default=None)
    five_hundred_error_object: Optional[GetCommercialCreditCards500ErrorObject] = field(default=None)
    five_hundred_and_three_error_object: Optional[GetCommercialCreditCards503ErrorObject] = field(default=None)
    content_type: str = field(default=None)
    error_object: Optional[GetCommercialCreditCardsErrorObject] = field(default=None)
    get_commercial_credit_cards_200_application_prs_openbanking_opendata_v1_3_plus_json_object: Optional[GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSON] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
