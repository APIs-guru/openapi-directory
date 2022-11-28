import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBusinessCurrentAccountsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}

export enum GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}

export enum GetBusinessCurrentAccounts400ErrorObjectStatusEnum {
    FourHundred = "400"
}

export enum GetBusinessCurrentAccounts400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}


export class GetBusinessCurrentAccounts400ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetBusinessCurrentAccounts400ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetBusinessCurrentAccounts400ErrorObjectTitleEnum;
}

export enum GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}

export enum GetBusinessCurrentAccounts408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}

export enum GetBusinessCurrentAccounts408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}


export class GetBusinessCurrentAccounts408ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetBusinessCurrentAccounts408ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetBusinessCurrentAccounts408ErrorObjectTitleEnum;
}

export enum GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}

export enum GetBusinessCurrentAccounts429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}

export enum GetBusinessCurrentAccounts429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}


export class GetBusinessCurrentAccounts429ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetBusinessCurrentAccounts429ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetBusinessCurrentAccounts429ErrorObjectTitleEnum;
}

export enum GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}

export enum GetBusinessCurrentAccounts500ErrorObjectStatusEnum {
    FiveHundred = "500"
}

export enum GetBusinessCurrentAccounts500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}


export class GetBusinessCurrentAccounts500ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetBusinessCurrentAccounts500ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetBusinessCurrentAccounts500ErrorObjectTitleEnum;
}

export enum GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}

export enum GetBusinessCurrentAccounts503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}

export enum GetBusinessCurrentAccounts503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}


export class GetBusinessCurrentAccounts503ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetBusinessCurrentAccounts503ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetBusinessCurrentAccounts503ErrorObjectTitleEnum;
}


export class GetBusinessCurrentAccountsErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum {
    Atm = "ATM",
    Branch = "Branch",
    BusinessCommercialCentre = "BusinessCommercialCentre",
    CallCentre = "CallCentre",
    MobileApps = "MobileApps",
    MobileBanking = "MobileBanking",
    Online = "Online",
    Phone = "Phone",
    Post = "Post",
    PostOffice = "PostOffice",
    RelationshipManager = "RelationshipManager",
    Text = "Text"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
    CashDeposit = "CashDeposit",
    Deposit = "Deposit",
    DirectDebit = "DirectDebit",
    InitialDeposit = "InitialDeposit",
    InternetLogon = "InternetLogon",
    MobileLogon = "MobileLogon",
    RegularDeposit = "RegularDeposit"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail
/** 
 * Benefit detail
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BenefitDescription" })
  benefitDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=BenefitID" })
  benefitId?: string;

  @SpeakeasyMetadata({ data: "json, name=BenefitName" })
  benefitName?: string;

  @SpeakeasyMetadata({ data: "json, name=BenefitType" })
  benefitType?: string;

  @SpeakeasyMetadata({ data: "json, name=BenefitValue" })
  benefitValue?: string;

  @SpeakeasyMetadata({ data: "json, name=Counter" })
  counter?: number;

  @SpeakeasyMetadata({ data: "json, name=CriteriaType" })
  criteriaType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=DefaultToAccounts" })
  defaultToAccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaximumCriteria" })
  maximumCriteria?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumCriteria" })
  minimumCriteria?: string;

  @SpeakeasyMetadata({ data: "json, name=PromotionEndDate" })
  promotionEndDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PromotionStartDate" })
  promotionStartDate?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem
/** 
 * Benefit Item
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BenefitDetail", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail })
  benefitDetail?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail[];

  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup
/** 
 * Benefit Interest Group
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BenefitItem" })
  benefitItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem;

  @SpeakeasyMetadata({ data: "json, name=BenefitSubType" })
  benefitSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits
/** 
 * Benefit
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Benefit" })
  benefit: boolean;

  @SpeakeasyMetadata({ data: "json, name=BenefitGroup", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup })
  benefitGroup?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup[];
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem
/** 
 * Card Pricing
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRateAdjustment" })
  exchangeRateAdjustment?: string;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing
/** 
 * Card Price
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CAPricingItem" })
  caPricingItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem;

  @SpeakeasyMetadata({ data: "json, name=ProductState" })
  productState: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum {
    BasicCard = "BasicCard",
    BusinessQuickLodgeCard = "BusinessQuickLodgeCard",
    Cashcard = "Cashcard",
    ContactlessCashcard = "ContactlessCashcard",
    ContactlessDebitMastercard = "ContactlessDebitMastercard",
    ContactlessDebitVisa = "ContactlessDebitVisa",
    DebitMastercard = "DebitMastercard",
    VisaDebit = "VisaDebit",
    DepositCard = "DepositCard",
    OperatorCard = "OperatorCard",
    PocaCard = "POCACard"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum {
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum {
    Fixed = "Fixed",
    Variable = "Variable"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum {
    Apr = "APR",
    Aer = "AER",
    Gross = "Gross",
    Net = "Net",
    RepApr = "RepApr"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers
/** 
 * Credit Interest Tiers
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APRAERRate" })
  apraerRate?: string;

  @SpeakeasyMetadata({ data: "json, name=DailyChargeForMaximum" })
  dailyChargeForMaximum?: string;

  @SpeakeasyMetadata({ data: "json, name=DailyChargeForMinimum" })
  dailyChargeForMinimum?: string;

  @SpeakeasyMetadata({ data: "json, name=InterestTier" })
  interestTier?: string;

  @SpeakeasyMetadata({ data: "json, name=Rate" })
  rate?: string;

  @SpeakeasyMetadata({ data: "json, name=RateComparisonType" })
  rateComparisonType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum {
    Compound = "Compound",
    PayAway = "PayAway",
    SelfCredit = "SelfCredit",
    SimpleInterest = "SimpleInterest"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem
/** 
 * Credit Interest item
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationMethod" })
  calculationMethod?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=FixedInterestLength" })
  fixedInterestLength?: number;

  @SpeakeasyMetadata({ data: "json, name=InterestNotes" })
  interestNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=InterestRateType" })
  interestRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InterestTiers", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers })
  interestTiers?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers[];

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=PaymentMethod" })
  paymentMethod?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup
/** 
 * Credit Interest Group
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditInterestItem" })
  creditInterestItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem;

  @SpeakeasyMetadata({ data: "json, name=InterestTierSubType" })
  interestTierSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest
/** 
 * Credit Interest
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditCharged" })
  creditCharged: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreditInterestGroup", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup })
  creditInterestGroup?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup[];
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum {
    AnyBusinessCustomer = "AnyBusinessCustomer",
    BusinessOnly = "BusinessOnly",
    CreditCard = "CreditCard",
    CreditScoring = "CreditScoring",
    EmailAddress = "EmailAddress",
    ExistingCustomers = "ExistingCustomers",
    IdAndV = "IdAndV",
    Mortgage = "Mortgage",
    NoArrearsOnLoan = "NoArrearsOnLoan",
    NoCustomerInArrears = "NoCustomerInArrears",
    NoOverOverdraftThirtyDays = "NoOverOverdraftThirtyDays",
    NoSoleUkAccountOrBankrupt = "NoSoleUkAccountOrBankrupt",
    Ntb = "NTB",
    NtbBusiness = "NTBBusiness",
    SoleStudentAccount = "SoleStudentAccount",
    SoleUkAccount = "SoleUkAccount",
    StudentsOnly = "StudentsOnly",
    TwoMonthsOfCourseStart = "TwoMonthsOfCourseStart",
    UcasFulltimeTwoYears = "UCASFulltimeTwoYears"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum {
    Uk = "UK",
    Eea = "EEA",
    Eu = "EU",
    Efta = "EFTA",
    GbEng = "GB - ENG",
    GbNir = "GB - NIR",
    GbSct = "GB - SCT",
    GbWls = "GB - WLS",
    Irl = "IRL"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility
/** 
 * Eligibility
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgeRestricted" })
  ageRestricted: boolean;

  @SpeakeasyMetadata({ data: "json, name=AnnualBusinessTurnover" })
  annualBusinessTurnover?: string;

  @SpeakeasyMetadata({ data: "json, name=AnnualBusinessTurnoverCurrency" })
  annualBusinessTurnoverCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=EligibilityName" })
  eligibilityName?: string;

  @SpeakeasyMetadata({ data: "json, name=EligibilityNotes" })
  eligibilityNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=EligibilityType" })
  eligibilityType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncomeCondition" })
  incomeCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=IncomeTurnoverRelated" })
  incomeTurnoverRelated: boolean;

  @SpeakeasyMetadata({ data: "json, name=MarketingEligibility" })
  marketingEligibility?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum[];

  @SpeakeasyMetadata({ data: "json, name=MaxNumberOfAccounts" })
  maxNumberOfAccounts?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumAge" })
  maximumAge?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumAgeToOpen" })
  maximumAgeToOpen?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumOpeningAmount" })
  maximumOpeningAmount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MinIncomeTurnoverPaidIntoAccount" })
  minIncomeTurnoverPaidIntoAccount?: number;

  @SpeakeasyMetadata({ data: "json, name=MinimumAge" })
  minimumAge?: number;

  @SpeakeasyMetadata({ data: "json, name=MinimumDeposit" })
  minimumDeposit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MinimumIncomeFrequency" })
  minimumIncomeFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=MinimumIncomeTurnoverAmount" })
  minimumIncomeTurnoverAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumIncomeTurnoverCurrency" })
  minimumIncomeTurnoverCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalance" })
  minimumOperatingBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalanceCurrency" })
  minimumOperatingBalanceCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalanceExists" })
  minimumOperatingBalanceExists?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OpeningDepositMaximumAmount" })
  openingDepositMaximumAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=OpeningDepositMaximumCurrency" })
  openingDepositMaximumCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=OpeningDepositMinimum" })
  openingDepositMinimum?: string;

  @SpeakeasyMetadata({ data: "json, name=OpeningDepositMinimumCurrency" })
  openingDepositMinimumCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=OtherFinancialHoldingRequired" })
  otherFinancialHoldingRequired: boolean;

  @SpeakeasyMetadata({ data: "json, name=PreviousBankruptcy" })
  previousBankruptcy: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResidencyRestricted" })
  residencyRestricted: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResidencyRestrictedRegion" })
  residencyRestrictedRegion?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=SingleJointIncome" })
  singleJointIncome?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum;

  @SpeakeasyMetadata({ data: "json, name=ThirdSectorOrganisations" })
  thirdSectorOrganisations: boolean;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails
/** 
 * Feature Details
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CriteriaType" })
  criteriaType?: string;

  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureDescription" })
  featureDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureName" })
  featureName?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureSubType" })
  featureSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeatureType" })
  featureType?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureValue" })
  featureValue?: string;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature
/** 
 * Account Features
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=ExistingFeature" })
  existingFeature: boolean;

  @SpeakeasyMetadata({ data: "json, name=FeatureDetails", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails })
  featureDetails?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails[];

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=ProductState" })
  productState?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    AccountClosing = "AccountClosing",
    AccountOpening = "AccountOpening",
    AtTimeOfLoanRepayment = "AtTimeOfLoanRepayment",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    EveryFiveBusinessDays = "EveryFiveBusinessDays",
    Item = "Item",
    Monthly = "Monthly",
    OnAccountAnniversary = "OnAccountAnniversary",
    PerHour = "PerHour",
    PerOccurrence = "PerOccurrence",
    PerSheet = "PerSheet",
    PerTransactionAmount = "PerTransactionAmount",
    PerTransactionPercentage = "PerTransactionPercentage",
    Quarterly = "Quarterly",
    SixMonthly = "SixMonthly",
    StartOfLoan = "StartOfLoan",
    StatementMonthly = "StatementMonthly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
/** 
 * Fee Sub Details
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeFrequency" })
  feeFrequency: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeHigherTier" })
  feeHigherTier?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeLowerTier" })
  feeLowerTier?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeMax" })
  feeMax?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeMin" })
  feeMin?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeesAndChargesNotes" })
  feesAndChargesNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=Negotiable" })
  negotiable: boolean;

  @SpeakeasyMetadata({ data: "json, name=RepresentativeRate" })
  representativeRate?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
    Other = "Other",
    AtmDonation = "ATMDonation",
    AtmDeposAtmPaidIn = "ATMDeposATMPaidIn",
    ReportCertBalance = "ReportCertBalance",
    AtmAbroadConVisaCredit = "ATMAbroadConVisaCredit",
    AtmAbroadConVisaDebit = "ATMAbroadConVisaDebit",
    AtmCardnetEnvIn = "ATMCardnetEnvIn",
    AtmCashGroupAtmCreditCard = "ATMCashGroupATMCreditCard",
    AtmCashNonGroupAtmCredittcard = "ATMCashNonGroupATMCredittcard",
    AtmCashGroupAtmDebitCard = "ATMCashGroupATMDebitCard",
    AtmCashNonGroupAtmDebitcard = "ATMCashNonGroupATMDebitcard",
    AtmConGroupAtm = "ATMConGroupATM",
    AtmAbroad = "ATMAbroad",
    AtmForeignCashDebCard = "ATMForeignCashDebCard",
    AtmAbroadGoldVisaDebit = "ATMAbroadGoldVisaDebit",
    AtmSpainCashCard = "ATMSpainCashCard",
    AtmSpainDebitCard = "ATMSpainDebitCard",
    AtmSpainConversionDebitCard = "ATMSpainConversionDebitCard",
    AtmSpainConversionCashCard = "ATMSpainConversionCashCard",
    AtmNonSterlingWithdrawal = "ATMNonSterlingWithdrawal",
    AtmAbroadVisaCredit = "ATMAbroadVisaCredit",
    AtmAbroadVisaDebit = "ATMAbroadVisaDebit",
    AtmAbroadConVisaGoldDebit = "ATMAbroadConVisaGoldDebit",
    AtmWidthdrawCash = "ATMWidthdrawCash",
    BacsOnLineAncilliary = "BACSOnLineAncilliary",
    BacsBatch = "BACSBatch",
    BacsOnLineFile = "BACSOnLineFile",
    BacsFileItem = "BACSFileItem",
    BacsOnLineSetup = "BACSOnLineSetup ",
    BacsItem = "BACSItem",
    BacsItemInterbranch = "BACSItemInterbranch",
    BacsBulkBatch = "BACSBulkBatch",
    BacsOnLineOverlimit = "BACSOnLineOverlimit",
    BacsOnLinePayment = "BACSOnLinePayment",
    BacsRecallItem = "BACSRecallItem",
    BacsOnLineService = "BACSOnLineService",
    BacsBulkInternet = "BACSBulkInternet",
    BacstelDirDebSmartCard = "BACSTELDirDebSmartCard",
    BacstelDirDebWebInit = "BACSTELDirDebWebInit",
    BacsteLirDebWebInit = "BACSTELirDebWebInit",
    BacstelDirDebOverlimit = "BACSTELDirDebOverlimit",
    BacstelDirDebPayment = "BACSTELDirDebPayment",
    BacstelDirDebService = "BACSTELDirDebService",
    BacstelDirDebAncilliary = "BACSTELDirDebAncilliary",
    BacsDirectItemProfile = "BACSDirectItemProfile",
    BacstelAncilliary = "BACSTELAncilliary",
    BacstelSmartCard = "BACSTELSmartCard",
    BacstelFile = "BACSTELFile",
    BacstelSetup = "BACSTELSetup ",
    BacstelOverlimit = "BACSTELOverlimit",
    BacstelPayment = "BACSTELPayment",
    BacstelService = "BACSTELService",
    ChapsOutBranch = "CHAPSOutBranch",
    ChapsCancellation = "CHAPSCancellation",
    ChapsOutOnlineDepositAcc = "CHAPSOutOnlineDepositAcc",
    ChapsIn = "CHAPSIn",
    ChapsOutInterBank = "CHAPSOutInterBank",
    ChapsInterBank = "CHAPSInterBank",
    ChapsOutPost = "CHAPSOutPost",
    ChapsOutInterBranch = "CHAPSOutInterBranch",
    ChapsOut = "CHAPSOut",
    ChapsOutOnline = "CHAPSOutOnline",
    ChapSandForeignPay = "CHAPSandForeignPay",
    ChapsOutManual = "CHAPSOutManual",
    CardCardReplacement = "CardCardReplacement",
    DraftsCounter = "DraftsCounter",
    DraftsBankers = "DraftsBankers",
    DraftsIntlPayableAbroad = "DraftsIntlPayableAbroad",
    DraftsLostStolen = "DraftsLostStolen",
    CardPersonalisedCard = "CardPersonalisedCard",
    DraftsIntlStoppedCancelled = "DraftsIntlStoppedCancelled",
    EuroChqXLess = "EuroChqXLess",
    EuroChqXPlus = "EuroChqXPlus",
    FpsOutFutureDated = "FPSOutFutureDated",
    FpsOutImmediate = "FPSOutImmediate",
    FpsOut = "FPSOut",
    FpsOutOwn = "FPSOutOwn",
    FpsInBranch = "FPSInBranch",
    FpsukPayUrgent = "FPSUKPayUrgent",
    LegalArticlesReport = "LegalArticlesReport",
    LegalSealing = "LegalSealing",
    LegalBondAndGuarantee = "LegalBondAndGuarantee",
    LegalCourtOrder = "LegalCourtOrder",
    LegalCoSearch = "LegalCoSearch",
    LegalDepositAssignment = "LegalDepositAssignment",
    LegalGuaranteePrep = "LegalGuaranteePrep",
    LegalLifePolicyPrepCo = "LegalLifePolicyPrepCo",
    LegalLifePolicyPrepPersonal = "LegalLifePolicyPrepPersonal",
    LegalPriorityPariPassu = "LegalPriorityPariPassu",
    LegalSubordinationAgreement = "LegalSubordinationAgreement",
    DirDebDirectDebitAdmin = "DirDebDirectDebitAdmin",
    DirDebDirectDebitCancel = "DirDebDirectDebitCancel",
    IntlPayBibForeignLimit = "IntlPayBIBForeignLimit",
    IntlPayCreditTransCust = "IntlPayCreditTransCust",
    IntlPayCreditTransNonCust = "IntlPayCreditTransNonCust",
    IntlPayUrgentPaymentForeign = "IntlPayUrgentPaymentForeign",
    IntlPayExpressMoneyMover = "IntlPayExpressMoneyMover",
    IntlPayEeaPayUrgent = "IntlPayEEAPayUrgent",
    IntlPayIrishPayUrgent = "IntlPayIrishPayUrgent",
    IntlPayEeaPay = "IntlPayEEAPay",
    IntlPayForeignIn1CPlus = "IntlPayForeignIn1CPlus",
    IntlPayForeignPaymentInUkAcc = "IntlPayForeignPaymentInUKAcc",
    IntlPayForeignCharge = "IntlPayForeignCharge",
    IntlPayForeignCancellation = "IntlPayForeignCancellation",
    IntlPayForeignStandardEuEuroBic = "IntlPayForeignStandardEUEuroBIC",
    IntlPayFxFeeRate = "IntlPayFXFeeRate",
    IntlPayForeignInternet = "IntlPayForeignInternet",
    IntlPayForeign = "IntlPayForeign",
    IntlPayForeignInbound = "IntlPayForeignInbound",
    IntlPayFxPaymentOut = "IntlPayFXPaymentOut",
    IntlPayForeignInSub1C = "IntlPayForeignInSub1C",
    IntlPayFxRate = "IntlPayFXRate",
    IntlPayForeignStandardEuEuroNoBic = "IntlPayForeignStandardEUEuroNoBIC",
    IntlPayFxPaymentOutIr = "IntlPayFXPaymentOutIR",
    IntlPayFxFee = "IntlPayFXFee",
    IntlPayPurchaseNonSterling = "IntlPayPurchaseNonSterling",
    IntlPayPostPaymentForeign = "IntlPayPostPaymentForeign",
    IntlPayPurchaseRateNonSterling = "IntlPayPurchaseRateNonSterling",
    IntlPayPaymentTracing = "IntlPayPaymentTracing",
    IntlPayStandardMoneyMover = "IntlPayStandardMoneyMover",
    IntlPayMt101Transaction = "IntlPayMT101Transaction",
    IntlPayTransNonSterling = "IntlPayTransNonSterling",
    IntlPayTransRateNonSterling = "IntlPayTransRateNonSterling",
    IntlPayForeignUrgentEuEuroBic = "IntlPayForeignUrgentEUEuroBIC",
    IntlPayForeignUrgentEuEuroNoBic = "IntlPayForeignUrgentEUEuroNoBIC",
    IntlPayUrgentPaymentGroup = "IntlPayUrgentPaymentGroup",
    IntlPayUrgentPaymentUk = "IntlPayUrgentPaymentUK",
    IntlPayUsaPayUrgent = "IntlPayUSAPayUrgent",
    IntlPayCurrencyPurchase = "IntlPayCurrencyPurchase",
    IntlPayWorldpayPayment = "IntlPayWorldpayPayment",
    IntlPayCurrencyWithdraw = "IntlPayCurrencyWithdraw",
    InvPayBankDetailsWrong = "InvPayBankDetailsWrong",
    InvPayForeignBcnr = "InvPayForeignBCNR",
    InvPayForeignRecall = "InvPayForeignRecall",
    InvGeneralInq = "InvGeneralInq",
    InvOldInstruction = "InvOldInstruction",
    InvPayPaymentRecall = "InvPayPaymentRecall",
    InvPayReturnDebitXvLess = "InvPayReturnDebitXVLess",
    InvPayReturnDebitXvPlus = "InvPayReturnDebitXVPlus",
    InvPayStopPayment = "InvPayStopPayment",
    InvPayStandingOrdUnpaid = "InvPayStandingOrdUnpaid",
    SafeKeepAccess = "SafeKeepAccess",
    SafeKeepDeedMedium = "SafeKeepDeedMedium",
    SafeKeepingEnvelope = "SafeKeepingEnvelope",
    SafeKeepingInspection = "SafeKeepingInspection",
    SafeKeepingLargeItem = "SafeKeepingLargeItem",
    SafeKeepMultipleItems = "SafeKeepMultipleItems",
    SafeKeepingParcel = "SafeKeepingParcel",
    SafeKeepDeedSmall = "SafeKeepDeedSmall",
    SafeKeepOneItem = "SafeKeepOneItem",
    SafeKeepSafeCustody = "SafeKeepSafeCustody",
    LoanArrangementFeePc = "LoanArrangementFeePC",
    LoanArrangement = "LoanArrangement",
    LoanEarlyRepayment = "LoanEarlyRepayment",
    LoanLatePayment = "LoanLatePayment",
    LoanSmeUnsecuredLoan = "LoanSMEUnsecuredLoan",
    LoanTieredArrangement = "LoanTieredArrangement",
    NightSafeNightSafeBankOpen = "NightSafeNightSafeBankOpen",
    NightSafeCreditSub5K = "NightSafeCreditSub5K",
    NightSafeNightSafe = "NightSafeNightSafe",
    NightSafeNightSafePaidIn = "NightSafeNightSafePaidIn",
    OverdraftAnnualReview = "OverdraftAnnualReview",
    OverdraftTempOverdraft = "OverdraftTempOverdraft",
    OverdraftUnauthorisedBorrowing = "OverdraftUnauthorisedBorrowing",
    PoPostOfficeCounterCredit = "POPostOfficeCounterCredit",
    PoPostOfficeCashCredit = "POPostOfficeCashCredit",
    PoPostOfficeCashOut = "POPostOfficeCashOut",
    PoPostOfficeWithdrawal = "POPostOfficeWithdrawal",
    ChqBookTheftLossAllStopped = "ChqBookTheftLossAllStopped",
    ChqIssuedCurrencyAcc = "ChqIssuedCurrencyAcc",
    ChqCopy = "ChqCopy",
    ChqDraft = "ChqDraft",
    ChqIn = "ChqIn",
    ChqDraftSterling = "ChqDraftSterling",
    ChqOutIssued = "ChqOutIssued",
    ChqSpecialChqPresentation = "ChqSpecialChqPresentation",
    ChqCounterCheque = "ChqCounterCheque",
    ChqChequeswithStatement = "ChqChequeswithStatement",
    ChqStopped = "ChqStopped",
    ChqTrans = "ChqTrans",
    ChqDraftFx = "ChqDraftFX",
    ChqForeignCourier = "ChqForeignCourier",
    ChqForeignNegTenThou = "ChqForeignNegTenThou",
    ChqForeignNegHundred = "ChqForeignNegHundred",
    ChequeForeignBankDivi = "ChequeForeignBankDivi",
    ChqForeignNegFiftyThou = "ChqForeignNegFiftyThou",
    ChqPensionCheque = "ChqPensionCheque",
    ChequeForeignOtherDivi = "ChequeForeignOtherDivi",
    ChqForeignNegFiveThou = "ChqForeignNegFiveThou",
    ChqForeignNegMax = "ChqForeignNegMax",
    ChqForeignGbpmmdPlus = "ChqForeignGBPMMDPlus",
    ChqGiftCheque = "ChqGiftCheque",
    ChqCounterLodgement = "ChqCounterLodgement",
    ChqCashDropLodgement = "ChqCashDropLodgement",
    ChqChequePhotocopy = "ChqChequePhotocopy",
    ChqPostOfficeCredit = "ChqPostOfficeCredit",
    ChqPostOfficeChequeCollected = "ChqPostOfficeChequeCollected",
    ChqChequeRetrieval = "ChqChequeRetrieval",
    ChqReconcilliationPerTrans = "ChqReconcilliationPerTrans",
    ChqSpecialPresentationCount = "ChqSpecialPresentationCount",
    ChqSpecialPresentationPtt = "ChqSpecialPresentationPTT",
    ChqUnpaidCharge = "ChqUnpaidCharge",
    ChqUnpaidTransIn = "ChqUnpaidTransIn",
    ChqUnpaidTransOut = "ChqUnpaidTransOut",
    ChqUnpaidCheque = "ChqUnpaidCheque",
    ReportAuditLetter = "ReportAuditLetter",
    ReportFaxAdviceAdditional = "ReportFAXAdviceAdditional",
    ReportTelAdviceAdditional = "ReportTelAdviceAdditional",
    ReportCreditHistory = "ReportCreditHistory",
    ReportCertInterestDuplicate = "ReportCertInterestDuplicate",
    ReportCertInterest = "ReportCertInterest",
    ReportCreditHistoryAdditionalInYear = "ReportCreditHistoryAdditionalInYear",
    ReportForeignStatusEnqElec = "ReportForeignStatusEnqElec",
    ReportForeignStatusEnq = "ReportForeignStatusEnq",
    ReportCashBackorInterestAnal = "ReportCashBackorInterestAnal",
    ReportStatementChqDaily = "ReportStatementChqDaily",
    ReportStatementChqFortnightly = "ReportStatementChqFortnightly",
    ReportStatementChqMonthly = "ReportStatementChqMonthly",
    ReportStatementChqWeekly = "ReportStatementChqWeekly",
    ReportStatementAndDiviChq = "ReportStatementAndDiviChq",
    ReportReference = "ReportReference",
    ReportReferralItem = "ReportReferralItem",
    ReportStatementByAtm = "ReportStatementByATM",
    ReportStatementByBranch = "ReportStatementByBranch",
    ReportStatementCopyRegular = "ReportStatementCopyRegular",
    ReportStatusEnquiry = "ReportStatusEnquiry",
    ReportStatementFrequent = "ReportStatementFrequent",
    ReportStatementMonthly = "ReportStatementMonthly",
    ReportStatementCopy1 = "ReportStatementCopy1",
    ReportStatementToBranch = "ReportStatementToBranch",
    ReportSmsTextMiniStatementorAlert = "ReportSMSTextMiniStatementorAlert",
    ReportStatementFortnightly = "ReportStatementFortnightly",
    ReportSmsTextMiniStatementWoM = "ReportSMSTextMiniStatementWoM",
    ReportSmsTextAlertBalance = "ReportSMSTextAlertBalance",
    ReportSmsTextAlert = "ReportSMSTextAlert",
    ReportTaxCert = "ReportTaxCert",
    ReportWeeklyStatement = "ReportWeeklyStatement",
    ReportTextMessageBanking = "ReportTextMessageBanking",
    SepaCancellation = "SEPACancellation",
    SepaBranch = "SEPABranch",
    SepaCredit = "SEPACredit",
    SepaDirectDebit = "SEPADirectDebit",
    SepaIn = "SEPAIn",
    SepaEuro = "SEPAEuro",
    SepaOut = "SEPAOut",
    SepaUnpaid = "SEPAUnpaid",
    SepaWinbitsAnnualService = "SEPAWinbitsAnnual Service",
    SepaWinbitsTransaction = "SEPAWinbitsTransaction",
    TransBillPaymentBranch = "TransBillPaymentBranch",
    TransBillCollect = "TransBillCollect",
    TransTelephoneBillPayment = "TransTelephoneBillPayment",
    TransBankPayment = "TransBankPayment",
    TransBillPaymentTelephone = "TransBillPaymentTelephone",
    TransCorrespondentBankFee = "TransCorrespondentBankFee",
    TransCreditTransferUkDifferent = "TransCreditTransferUKDifferent",
    TransCreditTransferUkSame = "TransCreditTransferUKSame",
    TransCredit = "TransCredit",
    TransCreditTransfer = "TransCreditTransfer",
    TransBranchCredit = "TransBranchCredit",
    TransDebit = "TransDebit",
    TransDebCardDeb = "TransDebCardDeb",
    TransUkDirDeb = "TransUKDirDeb",
    TransManualDeb = "TransManualDeb",
    TransBuyForeignWithGbp = "TransBuyForeignWithGBP",
    TransGoodValueReq = "TransGoodValueReq",
    TransSwiftOutUkForeign = "TransSWIFTOutUKForeign",
    TransInconpleteInstruction = "TransInconpleteInstruction",
    TransManualEntries = "TransManualEntries",
    TransManualTrans = "TransManualTrans",
    TransNonSterling = "TransNonSterling",
    TransPosSaleForeign = "TransPOSSaleForeign",
    TransPriPaymentPost = "TransPriPaymentPost",
    TransPosSaleUk = "TransPOSSaleUK",
    TransReturnPayment = "TransReturnPayment",
    TransReconciliationPerTrans = "TransReconciliationPerTrans",
    TransStandingOrdAdmin = "TransStandingOrdAdmin",
    TransStandingOrd = "TransStandingOrd",
    TransStandingOrdManPay = "TransStandingOrdManPay",
    TransTravellersChqOtherBank = "TransTravellersChqOtherBank",
    TransTelBusiPriPaymentForeignToUkAcc = "TransTelBusiPriPaymentForeignToUKAcc",
    TransTeleItem = "TransTeleItem",
    TransTelBusiPriPaymentToGrpAcc = "TransTelBusiPriPaymentToGrpAcc",
    TransTravellersChqRate = "TransTravellersChqRate",
    TransTransferExGroup = "TransTransferExGroup",
    TransUnauthorisedPaidTrans = "TransUnauthorisedPaidTrans",
    TransUrgentPaymentPostal = "TransUrgentPaymentPostal",
    TransUnpaidTrans = "TransUnpaidTrans",
    TransTelBusiPriPaymentToNonGrpAcc = "TransTelBusiPriPaymentToNonGrpAcc",
    TransSwiftOutNonEeaSterling = "TransSWIFTOutNonEEASterling",
    AutoAutoCredit = "AutoAutoCredit",
    AutoAutomatedEntries = "AutoAutomatedEntries",
    AutoAutoCreditPhoneInet = "AutoAutoCreditPhoneInet",
    AutoAutomatedTrans = "AutoAutomatedTrans",
    AutoDebitCardCommercial = "AutoDebitCardCommercial",
    AutoFpsAutoCredit = "AutoFPSAutoCredit",
    VisaConvertAbroadForeign = "VisaConvertAbroadForeign",
    VisaBureauDeChange = "VisaBureauDeChange",
    VisaTravellersChqorCurrency = "VisaTravellersChqorCurrency",
    OnlineInternetBillPayment = "OnlineInternetBillPayment",
    OnlineBusinessOnlineEuroPayment = "OnlineBusinessOnlineEuroPayment",
    OnlineBusinessOnlineUrgentEuroPayment = "OnlineBusinessOnlineUrgentEuroPayment",
    OnlineBusinessOnlineForeignPayment = "OnlineBusinessOnlineForeignPayment",
    OnlineInterbankTransfer = "OnlineInterbankTransfer",
    OnlineInterbankPerTransfer = "OnlineInterbankPerTransfer",
    OnlineInterbranchTransfer = "OnlineInterbranchTransfer",
    OnlineInterbranchPerTransfer = "OnlineInterbranchPerTransfer",
    OnlineSubscriptionMonthly = "OnlineSubscriptionMonthly",
    OnlineBankingPayment = "OnlineBankingPayment",
    OnlineBankingSubscription = "OnlineBankingSubscription",
    OnlinePosSale = "OnlinePOSSale",
    OnlinePersonalCustAncillarys = "OnlinePersonalCustAncillarys",
    OnlinePersonalCustService = "OnlinePersonalCustService",
    OnlinePersonalCustOverlimits = "OnlinePersonalCustOverlimits",
    OnlineReplacementCardReader = "OnlineReplacementCardReader",
    OnlinePersonalCustSetUp = "OnlinePersonalCustSetUp",
    OnlinePersonalCustTransaction = "OnlinePersonalCustTransaction",
    OnlinePaymentinGbPtoUk = "OnlinePaymentinGBPtoUK",
    OnlineUrgentPayment = "OnlineUrgentPayment",
    OnlinePaymentinUsDtoUs = "OnlinePaymentinUSDtoUS",
    OnlineBulkDirectDebSterling = "OnlineBulkDirectDebSterling",
    ForeignChqSent = "ForeignChqSent",
    ForeignChqSelf = "ForeignChqSelf",
    ForeignChqEncashment = "ForeignChqEncashment",
    ForeignFxInwardsCust = "ForeignFXInwardsCust",
    ForeignFxTransfersRoi = "ForeignFXTransfersROI",
    ForeignFxForwardTrans = "ForeignFXForwardTrans",
    ForeignFxTransfersBoi = "ForeignFXTransfersBOI",
    ForeignExMaintenance = "ForeignExMaintenance",
    ForeignFxInwardsNonCust = "ForeignFXInwardsNonCust",
    ForeignFxOutwards = "ForeignFXOutwards",
    ForeignPurchase = "ForeignPurchase",
    ForeignStatusRep = "ForeignStatusRep",
    ForeignChqDraft = "ForeignChqDraft",
    ForeignChqCLess = "ForeignChqCLess",
    ForeignChqMLess = "ForeignChqMLess",
    ForeignChqOther = "ForeignChqOther",
    ForeignChqMPlus = "ForeignChqMPlus",
    ForeignChqCcc = "ForeignChqCCC",
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly",
    ServiceCBalanceHandling = "ServiceCBalanceHandling",
    ServiceCFixedTariff = "ServiceCFixedTariff",
    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage",
    ServiceCMonitorDaily = "ServiceCMonitorDaily",
    ServiceCManagementFee = "ServiceCManagementFee",
    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee",
    ServiceCMonitorMonthly = "ServiceCMonitorMonthly",
    ServiceCMonitorWeekly = "ServiceCMonitorWeekly",
    ServiceCSecurityFee = "ServiceCSecurityFee",
    ServiceCmt940AccountFirst = "ServiceCMT940AccountFirst",
    ServiceCmt940AccountSubsequent = "ServiceCMT940AccountSubsequent",
    ServiceCOther = "ServiceCOther",
    CounterCoinHandling = "CounterCoinHandling",
    CounterCashIn = "CounterCashIn",
    CounterCashInNotUs = "CounterCashInNotUs",
    CounterCashOut = "CounterCashOut",
    CounterCashX = "CounterCashX",
    CounterForeignCashMax = "CounterForeignCashMax",
    CounterForeignNoteHandling = "CounterForeignNoteHandling",
    CounterForeignCashOut = "CounterForeignCashOut",
    CounterCashFeeRate = "CounterCashFeeRate",
    CounterForeignCashOutTx = "CounterForeignCashOutTx",
    CounterCounterLodgement = "CounterCounterLodgement",
    CounterCashDropLodgement = "CounterCashDropLodgement",
    CounterNotesLodged = "CounterNotesLodged",
    CounterNotesOut = "CounterNotesOut",
    CounterCashInOwn = "CounterCashInOwn",
    CounterPaidTrans = "CounterPaidTrans",
    CounterCashFeePercent = "CounterCashFeePercent"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail
/** 
 * Fee Detail
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeSubDetails" })
  feeSubDetails: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Other" })
  other?: string;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails
/** 
 * Fee Details
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeDetail" })
  feeDetail: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail;

  @SpeakeasyMetadata({ data: "json, name=FeeSubType" })
  feeSubType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees
/** 
 * Fees
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeDetails", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails })
  feeDetails: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails[];

  @SpeakeasyMetadata({ data: "json, name=FeeHigherTier" })
  feeHigherTier?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeLowerTier" })
  feeLowerTier?: number;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges
/** 
 * Fees And Charges
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Fees" })
  fees: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees;

  @SpeakeasyMetadata({ data: "json, name=ProductState" })
  productState: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum {
    AndroidPay = "AndroidPay",
    ApplePay = "ApplePay",
    IssuerMobileApp = "IssuerMobileApp",
    MobileBankingApp = "MobileBankingApp",
    Other = "Other",
    PayM = "PayM",
    SamsungPay = "SamsungPay",
    VodafoneWallet = "VodafoneWallet"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand
/** 
 * Brand
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrademarkID" })
  trademarkId: string;

  @SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" })
  trademarkIpoCode: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName
/** 
 * Organisation Name
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LegalName" })
  legalName: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation
/** 
 * Parent organisation
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BIC" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=LEI" })
  lei?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganisationName" })
  organisationName: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation
/** 
 * Organisation
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Brand" })
  brand: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand;

  @SpeakeasyMetadata({ data: "json, name=ParentOrganisation" })
  parentOrganisation: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum {
    No = "No",
    Yes = "Yes"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum {
    Periodic = "Periodic",
    Minimum = "Minimum",
    Maximum = "Maximum",
    Setup = "Setup",
    Review = "Review",
    Renewal = "Renewal",
    MinimumSetup = "MinimumSetup",
    MaximumSetup = "MaximumSetup",
    Total = "Total",
    Item = "Item",
    EmergencyLending = "EmergencyLending",
    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum {
    Unarranged = "Unarranged",
    Arranged = "Arranged",
    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum {
    Periodic = "Periodic",
    Minimum = "Minimum",
    Maximum = "Maximum",
    Setup = "Setup",
    Review = "Review",
    Renewal = "Renewal",
    MinimumSetup = "MinimumSetup",
    MaximumSetup = "MaximumSetup",
    Total = "Total",
    Item = "Item",
    EmergencyLending = "EmergencyLending",
    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight",
    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum {
    Periodic = "Periodic",
    Minimum = "Minimum",
    Maximum = "Maximum",
    Setup = "Setup",
    Review = "Review",
    Renewal = "Renewal",
    MinimumSetup = "MinimumSetup",
    MaximumSetup = "MaximumSetup",
    Total = "Total",
    Item = "Item",
    EmergencyLending = "EmergencyLending",
    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand
/** 
 * Tiers
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EAR" })
  ear?: string;

  @SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges })
  feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=TierBandIdentification" })
  tierBandIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet
/** 
 * Tier Bandset
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArrangementOtherType" })
  arrangementOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType;

  @SpeakeasyMetadata({ data: "json, name=ArrangementType" })
  arrangementType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=BufferAmount" })
  bufferAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=CMADefinedIndicator" })
  cmaDefinedIndicator: boolean;

  @SpeakeasyMetadata({ data: "json, name=EAR" })
  ear?: string;

  @SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges })
  feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=OverdraftTierBand", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand })
  overdraftTierBand?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand[];

  @SpeakeasyMetadata({ data: "json, name=TierBandSetIdentification" })
  tierBandSetIdentification?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum {
    Committed = "Committed",
    OnDemand = "OnDemand"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft
/** 
 * Overdraft
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeNegotiableIndicator" })
  feeChargeNegotiableIndicator?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum;

  @SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges })
  feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges[];

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumMonthlyOverdraftCharge" })
  maximumMonthlyOverdraftCharge?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=OverdraftProductState" })
  overdraftProductState?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum;

  @SpeakeasyMetadata({ data: "json, name=OverdraftTierBandSet", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet })
  overdraftTierBandSet?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftType" })
  overdraftType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=Term" })
  term?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum {
    Basic = "Basic",
    Business = "Business",
    General = "General",
    Graduate = "Graduate",
    International = "International",
    Packaged = "Packaged",
    Personal = "Personal",
    Premium = "Premium",
    Reward = "Reward",
    Sme = "SME",
    Student = "Student",
    YoungAdult = "YoungAdult",
    Youth = "Youth"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum {
    Bca = "BCA"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount
/** 
 * Business current account
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessChannels" })
  accessChannels: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum[];

  @SpeakeasyMetadata({ data: "json, name=Benefits" })
  benefits: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits;

  @SpeakeasyMetadata({ data: "json, name=CAPricing", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing })
  caPricing: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing[];

  @SpeakeasyMetadata({ data: "json, name=CardNotes" })
  cardNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=CardType" })
  cardType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=CardWithdrawalLimit" })
  cardWithdrawalLimit: string;

  @SpeakeasyMetadata({ data: "json, name=ChequeBookAvailable" })
  chequeBookAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=Contactless" })
  contactless: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreditInterest" })
  creditInterest: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest;

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningForGettingAnAccount" })
  creditScoringPartOfAccountOpeningForGettingAnAccount: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningForIDVerification" })
  creditScoringPartOfAccountOpeningForIdVerification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore" })
  creditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScore?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum[];

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationText" })
  creditScoringPartOfAccountOpeningIdVerificationText?: string[];

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore" })
  creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[];

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningText" })
  creditScoringPartOfAccountOpeningText?: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string[];

  @SpeakeasyMetadata({ data: "json, name=Eligibility" })
  eligibility: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility;

  @SpeakeasyMetadata({ data: "json, name=Feature", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature })
  feature?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature[];

  @SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges })
  feesAndCharges: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges[];

  @SpeakeasyMetadata({ data: "json, name=InternationalPaymentsSupported" })
  internationalPaymentsSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaximumMonthlyCharge" })
  maximumMonthlyCharge?: string;

  @SpeakeasyMetadata({ data: "json, name=MobileWallet" })
  mobileWallet?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum[];

  @SpeakeasyMetadata({ data: "json, name=Organisation" })
  organisation: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation;

  @SpeakeasyMetadata({ data: "json, name=Overdraft", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft })
  overdraft?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftOffered" })
  overdraftOffered: boolean;

  @SpeakeasyMetadata({ data: "json, name=ProductDescription" })
  productDescription: string;

  @SpeakeasyMetadata({ data: "json, name=ProductIdentifier" })
  productIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductSegment" })
  productSegment: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum[];

  @SpeakeasyMetadata({ data: "json, name=ProductType" })
  productType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProductURL" })
  productUrl: string[];

  @SpeakeasyMetadata({ data: "json, name=TsandCs" })
  tsandCs: string[];
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}


export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Agreement" })
  agreement: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=License" })
  license: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=TermsOfUse" })
  termsOfUse: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;

  @SpeakeasyMetadata({ data: "json, name=TotalResults" })
  totalResults: number;
}


export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount })
  data: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}


export class GetBusinessCurrentAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetBusinessCurrentAccountsHeaders;
}


export class GetBusinessCurrentAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredErrorObject?: GetBusinessCurrentAccounts400ErrorObject;

  @SpeakeasyMetadata()
  fourHundredAndEightErrorObject?: GetBusinessCurrentAccounts408ErrorObject;

  @SpeakeasyMetadata()
  fourHundredAndTwentyNineErrorObject?: GetBusinessCurrentAccounts429ErrorObject;

  @SpeakeasyMetadata()
  fiveHundredErrorObject?: GetBusinessCurrentAccounts500ErrorObject;

  @SpeakeasyMetadata()
  fiveHundredAndThreeErrorObject?: GetBusinessCurrentAccounts503ErrorObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorObject?: GetBusinessCurrentAccountsErrorObject;

  @SpeakeasyMetadata()
  getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
