import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPersonalCurrentAccountsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}

export enum GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}

export enum GetPersonalCurrentAccounts400ErrorObjectStatusEnum {
    FourHundred = "400"
}

export enum GetPersonalCurrentAccounts400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}


export class GetPersonalCurrentAccounts400ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetPersonalCurrentAccounts400ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetPersonalCurrentAccounts400ErrorObjectTitleEnum;
}

export enum GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}

export enum GetPersonalCurrentAccounts408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}

export enum GetPersonalCurrentAccounts408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}


export class GetPersonalCurrentAccounts408ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetPersonalCurrentAccounts408ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetPersonalCurrentAccounts408ErrorObjectTitleEnum;
}

export enum GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}

export enum GetPersonalCurrentAccounts429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}

export enum GetPersonalCurrentAccounts429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}


export class GetPersonalCurrentAccounts429ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetPersonalCurrentAccounts429ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetPersonalCurrentAccounts429ErrorObjectTitleEnum;
}

export enum GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}

export enum GetPersonalCurrentAccounts500ErrorObjectStatusEnum {
    FiveHundred = "500"
}

export enum GetPersonalCurrentAccounts500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}


export class GetPersonalCurrentAccounts500ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetPersonalCurrentAccounts500ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetPersonalCurrentAccounts500ErrorObjectTitleEnum;
}

export enum GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}

export enum GetPersonalCurrentAccounts503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}

export enum GetPersonalCurrentAccounts503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}


export class GetPersonalCurrentAccounts503ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetPersonalCurrentAccounts503ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetPersonalCurrentAccounts503ErrorObjectTitleEnum;
}


export class GetPersonalCurrentAccountsErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
    CashDeposit = "CashDeposit",
    Deposit = "Deposit",
    DirectDebit = "DirectDebit",
    InitialDeposit = "InitialDeposit",
    InternetLogon = "InternetLogon",
    MobileLogon = "MobileLogon",
    RegularDeposit = "RegularDeposit"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail
/** 
 * Benefit detail
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
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
  criteriaType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];

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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem
/** 
 * Benefit Item
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BenefitDetail", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail })
  benefitDetail?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];

  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup
/** 
 * Benefit Interest Group
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BenefitItem" })
  benefitItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;

  @SpeakeasyMetadata({ data: "json, name=BenefitSubType" })
  benefitSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits
/** 
 * Benefit
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Benefit" })
  benefit: boolean;

  @SpeakeasyMetadata({ data: "json, name=BenefitGroup", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup })
  benefitGroup?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem
/** 
 * Card Pricing
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem extends SpeakeasyBase {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing
/** 
 * Card Price
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CAPricingItem" })
  caPricingItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem;

  @SpeakeasyMetadata({ data: "json, name=ProductState" })
  productState: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum {
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum {
    Fixed = "Fixed",
    Variable = "Variable"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum {
    Apr = "APR",
    Aer = "AER",
    Gross = "Gross",
    Net = "Net",
    RepApr = "RepApr"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers
/** 
 * Credit Interest Tiers
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers extends SpeakeasyBase {
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
  rateComparisonType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum {
    Compound = "Compound",
    PayAway = "PayAway",
    SelfCredit = "SelfCredit",
    SimpleInterest = "SimpleInterest"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem
/** 
 * Credit Interest item
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationMethod" })
  calculationMethod?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=FixedInterestLength" })
  fixedInterestLength?: number;

  @SpeakeasyMetadata({ data: "json, name=InterestNotes" })
  interestNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=InterestRateType" })
  interestRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=InterestTiers", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers })
  interestTiers?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers[];

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=PaymentMethod" })
  paymentMethod?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup
/** 
 * Credit Interest Group
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditInterestItem" })
  creditInterestItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem;

  @SpeakeasyMetadata({ data: "json, name=InterestTierSubType" })
  interestTierSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest
/** 
 * Credit Interest
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditCharged" })
  creditCharged: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreditInterestGroup", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup })
  creditInterestGroup?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup[];
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility
/** 
 * Eligibility
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
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
  eligibilityType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncomeCondition" })
  incomeCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=IncomeTurnoverRelated" })
  incomeTurnoverRelated: boolean;

  @SpeakeasyMetadata({ data: "json, name=MarketingEligibility" })
  marketingEligibility?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];

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
  minimumIncomeFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;

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
  residencyRestrictedRegion?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=SingleJointIncome" })
  singleJointIncome?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;

  @SpeakeasyMetadata({ data: "json, name=ThirdSectorOrganisations" })
  thirdSectorOrganisations: boolean;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails
/** 
 * Feature Details
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CriteriaType" })
  criteriaType?: string;

  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureDescription" })
  featureDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureName" })
  featureName?: string;

  @SpeakeasyMetadata({ data: "json, name=FeatureSubType" })
  featureSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum;

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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature
/** 
 * Account Features
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=ExistingFeature" })
  existingFeature: boolean;

  @SpeakeasyMetadata({ data: "json, name=FeatureDetails", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails })
  featureDetails?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails[];

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=ProductState" })
  productState?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
/** 
 * Fee Sub Details
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeFrequency" })
  feeFrequency: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;

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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail
/** 
 * Fee Detail
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeSubDetails" })
  feeSubDetails: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Other" })
  other?: string;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails
/** 
 * Fee Details
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeDetail" })
  feeDetail: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail;

  @SpeakeasyMetadata({ data: "json, name=FeeSubType" })
  feeSubType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees
/** 
 * Fees
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeDetails", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails })
  feeDetails: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails[];

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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges
/** 
 * Fees And Charges
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Fees" })
  fees: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees;

  @SpeakeasyMetadata({ data: "json, name=ProductState" })
  productState: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum {
    AndroidPay = "AndroidPay",
    ApplePay = "ApplePay",
    IssuerMobileApp = "IssuerMobileApp",
    MobileBankingApp = "MobileBankingApp",
    Other = "Other",
    PayM = "PayM",
    SamsungPay = "SamsungPay",
    VodafoneWallet = "VodafoneWallet"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
/** 
 * Brand
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrademarkID" })
  trademarkId: string;

  @SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" })
  trademarkIpoCode: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName
/** 
 * Organisation Name
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LegalName" })
  legalName: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation
/** 
 * Parent organisation
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BIC" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=LEI" })
  lei?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganisationName" })
  organisationName: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
/** 
 * Organisation
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Brand" })
  brand: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;

  @SpeakeasyMetadata({ data: "json, name=ParentOrganisation" })
  parentOrganisation: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum {
    No = "No",
    Yes = "Yes"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum {
    Unarranged = "Unarranged",
    Arranged = "Arranged",
    Other = "Other"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand
/** 
 * Tiers
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EAR" })
  ear?: string;

  @SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges })
  feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=TierBandIdentification" })
  tierBandIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet
/** 
 * Tier Bandset
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArrangementOtherType" })
  arrangementOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType;

  @SpeakeasyMetadata({ data: "json, name=ArrangementType" })
  arrangementType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=BufferAmount" })
  bufferAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=CMADefinedIndicator" })
  cmaDefinedIndicator: boolean;

  @SpeakeasyMetadata({ data: "json, name=EAR" })
  ear?: string;

  @SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges })
  feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=OverdraftTierBand", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand })
  overdraftTierBand?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand[];

  @SpeakeasyMetadata({ data: "json, name=TierBandSetIdentification" })
  tierBandSetIdentification?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum {
    Committed = "Committed",
    OnDemand = "OnDemand"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft
/** 
 * Overdraft
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeNegotiableIndicator" })
  feeChargeNegotiableIndicator?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum;

  @SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges })
  feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges[];

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumMonthlyOverdraftCharge" })
  maximumMonthlyOverdraftCharge?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=OverdraftProductState" })
  overdraftProductState?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum;

  @SpeakeasyMetadata({ data: "json, name=OverdraftTierBandSet", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet })
  overdraftTierBandSet?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftType" })
  overdraftType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=Term" })
  term?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum {
    Pca = "PCA"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData
/** 
 * Personal Current Account
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessChannels" })
  accessChannels: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum[];

  @SpeakeasyMetadata({ data: "json, name=Benefits" })
  benefits: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;

  @SpeakeasyMetadata({ data: "json, name=CAPricing", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing })
  caPricing: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing[];

  @SpeakeasyMetadata({ data: "json, name=CardNotes" })
  cardNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=CardType" })
  cardType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=CardWithdrawalLimit" })
  cardWithdrawalLimit: string;

  @SpeakeasyMetadata({ data: "json, name=ChequeBookAvailable" })
  chequeBookAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=Contactless" })
  contactless: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreditInterest" })
  creditInterest: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest;

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningForGettingAnAccount" })
  creditScoringPartOfAccountOpeningForGettingAnAccount: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningForIDVerification" })
  creditScoringPartOfAccountOpeningForIdVerification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore" })
  creditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScore?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum[];

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationText" })
  creditScoringPartOfAccountOpeningIdVerificationText?: string[];

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore" })
  creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[];

  @SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningText" })
  creditScoringPartOfAccountOpeningText?: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string[];

  @SpeakeasyMetadata({ data: "json, name=Eligibility" })
  eligibility: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;

  @SpeakeasyMetadata({ data: "json, name=Feature", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature })
  feature?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature[];

  @SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges })
  feesAndCharges: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[];

  @SpeakeasyMetadata({ data: "json, name=InternationalPaymentsSupported" })
  internationalPaymentsSupported: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaximumMonthlyCharge" })
  maximumMonthlyCharge?: string;

  @SpeakeasyMetadata({ data: "json, name=MobileWallet" })
  mobileWallet?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum[];

  @SpeakeasyMetadata({ data: "json, name=Organisation" })
  organisation: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;

  @SpeakeasyMetadata({ data: "json, name=Overdraft", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft })
  overdraft?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftOffered" })
  overdraftOffered: boolean;

  @SpeakeasyMetadata({ data: "json, name=ProductDescription" })
  productDescription: string;

  @SpeakeasyMetadata({ data: "json, name=ProductIdentifier" })
  productIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductSegment" })
  productSegment: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];

  @SpeakeasyMetadata({ data: "json, name=ProductType" })
  productType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProductURL" })
  productUrl: string[];

  @SpeakeasyMetadata({ data: "json, name=TsandCs" })
  tsandCs: string[];
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}


export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Agreement" })
  agreement: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=License" })
  license: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=TermsOfUse" })
  termsOfUse: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;

  @SpeakeasyMetadata({ data: "json, name=TotalResults" })
  totalResults: number;
}


export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData })
  data: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}


export class GetPersonalCurrentAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetPersonalCurrentAccountsHeaders;
}


export class GetPersonalCurrentAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredErrorObject?: GetPersonalCurrentAccounts400ErrorObject;

  @SpeakeasyMetadata()
  fourHundredAndEightErrorObject?: GetPersonalCurrentAccounts408ErrorObject;

  @SpeakeasyMetadata()
  fourHundredAndTwentyNineErrorObject?: GetPersonalCurrentAccounts429ErrorObject;

  @SpeakeasyMetadata()
  fiveHundredErrorObject?: GetPersonalCurrentAccounts500ErrorObject;

  @SpeakeasyMetadata()
  fiveHundredAndThreeErrorObject?: GetPersonalCurrentAccounts503ErrorObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorObject?: GetPersonalCurrentAccountsErrorObject;

  @SpeakeasyMetadata()
  getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
