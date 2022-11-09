import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBusinessCurrentAccountsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetBusinessCurrentAccountsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetBusinessCurrentAccountsHeaders;
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
  @Metadata({ data: "json, name=description" })
  description: GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetBusinessCurrentAccounts400ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetBusinessCurrentAccounts408ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetBusinessCurrentAccounts429ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetBusinessCurrentAccounts500ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetBusinessCurrentAccounts503ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
  title: GetBusinessCurrentAccounts503ErrorObjectTitleEnum;
}


export class GetBusinessCurrentAccountsErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum {
    Atm = "ATM"
,    Branch = "Branch"
,    BusinessCommercialCentre = "BusinessCommercialCentre"
,    CallCentre = "CallCentre"
,    MobileApps = "MobileApps"
,    MobileBanking = "MobileBanking"
,    Online = "Online"
,    Phone = "Phone"
,    Post = "Post"
,    PostOffice = "PostOffice"
,    RelationshipManager = "RelationshipManager"
,    Text = "Text"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
    CashDeposit = "CashDeposit"
,    Deposit = "Deposit"
,    DirectDebit = "DirectDebit"
,    InitialDeposit = "InitialDeposit"
,    InternetLogon = "InternetLogon"
,    MobileLogon = "MobileLogon"
,    RegularDeposit = "RegularDeposit"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail
/** 
 * Benefit detail
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=BenefitDescription" })
  benefitDescription?: string;

  @Metadata({ data: "json, name=BenefitID" })
  benefitId?: string;

  @Metadata({ data: "json, name=BenefitName" })
  benefitName?: string;

  @Metadata({ data: "json, name=BenefitType" })
  benefitType?: string;

  @Metadata({ data: "json, name=BenefitValue" })
  benefitValue?: string;

  @Metadata({ data: "json, name=Counter" })
  counter?: number;

  @Metadata({ data: "json, name=CriteriaType" })
  criteriaType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];

  @Metadata({ data: "json, name=DefaultToAccounts" })
  defaultToAccounts?: boolean;

  @Metadata({ data: "json, name=MaximumCriteria" })
  maximumCriteria?: string;

  @Metadata({ data: "json, name=MinimumCriteria" })
  minimumCriteria?: string;

  @Metadata({ data: "json, name=PromotionEndDate" })
  promotionEndDate?: string;

  @Metadata({ data: "json, name=PromotionStartDate" })
  promotionStartDate?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem
/** 
 * Benefit Item
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=BenefitDetail", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail })
  benefitDetail?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail[];

  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup
/** 
 * Benefit Interest Group
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=BenefitItem" })
  benefitItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem;

  @Metadata({ data: "json, name=BenefitSubType" })
  benefitSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits
/** 
 * Benefit
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits extends SpeakeasyBase {
  @Metadata({ data: "json, name=Benefit" })
  benefit: boolean;

  @Metadata({ data: "json, name=BenefitGroup", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup })
  benefitGroup?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup[];
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem
/** 
 * Card Pricing
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=ExchangeRateAdjustment" })
  exchangeRateAdjustment?: string;

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing
/** 
 * Card Price
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing extends SpeakeasyBase {
  @Metadata({ data: "json, name=CAPricingItem" })
  caPricingItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem;

  @Metadata({ data: "json, name=ProductState" })
  productState: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum {
    BasicCard = "BasicCard"
,    BusinessQuickLodgeCard = "BusinessQuickLodgeCard"
,    Cashcard = "Cashcard"
,    ContactlessCashcard = "ContactlessCashcard"
,    ContactlessDebitMastercard = "ContactlessDebitMastercard"
,    ContactlessDebitVisa = "ContactlessDebitVisa"
,    DebitMastercard = "DebitMastercard"
,    VisaDebit = "VisaDebit"
,    DepositCard = "DepositCard"
,    OperatorCard = "OperatorCard"
,    PocaCard = "POCACard"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum {
    Daily = "Daily"
,    Weekly = "Weekly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    HalfYearly = "Half-Yearly"
,    Yearly = "Yearly"
,    Overnight = "Overnight"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum {
    Banded = "Banded"
,    Tiered = "Tiered"
,    Whole = "Whole"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum {
    Fixed = "Fixed"
,    Variable = "Variable"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum {
    Apr = "APR"
,    Aer = "AER"
,    Gross = "Gross"
,    Net = "Net"
,    RepApr = "RepApr"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers
/** 
 * Credit Interest Tiers
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers extends SpeakeasyBase {
  @Metadata({ data: "json, name=APRAERRate" })
  apraerRate?: string;

  @Metadata({ data: "json, name=DailyChargeForMaximum" })
  dailyChargeForMaximum?: string;

  @Metadata({ data: "json, name=DailyChargeForMinimum" })
  dailyChargeForMinimum?: string;

  @Metadata({ data: "json, name=InterestTier" })
  interestTier?: string;

  @Metadata({ data: "json, name=Rate" })
  rate?: string;

  @Metadata({ data: "json, name=RateComparisonType" })
  rateComparisonType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum;

  @Metadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum?: string;

  @Metadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum {
    Compound = "Compound"
,    PayAway = "PayAway"
,    SelfCredit = "SelfCredit"
,    SimpleInterest = "SimpleInterest"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem
/** 
 * Credit Interest item
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum;

  @Metadata({ data: "json, name=CalculationMethod" })
  calculationMethod?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum;

  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: string;

  @Metadata({ data: "json, name=FixedInterestLength" })
  fixedInterestLength?: number;

  @Metadata({ data: "json, name=InterestNotes" })
  interestNotes?: string;

  @Metadata({ data: "json, name=InterestRateType" })
  interestRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum;

  @Metadata({ data: "json, name=InterestTiers", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers })
  interestTiers?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers[];

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=PaymentMethod" })
  paymentMethod?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup
/** 
 * Credit Interest Group
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditInterestItem" })
  creditInterestItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem;

  @Metadata({ data: "json, name=InterestTierSubType" })
  interestTierSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest
/** 
 * Credit Interest
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditCharged" })
  creditCharged: boolean;

  @Metadata({ data: "json, name=CreditInterestGroup", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup })
  creditInterestGroup?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup[];
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard"
,    Soft = "Soft"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard"
,    Soft = "Soft"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum {
    AnyBusinessCustomer = "AnyBusinessCustomer"
,    BusinessOnly = "BusinessOnly"
,    CreditCard = "CreditCard"
,    CreditScoring = "CreditScoring"
,    EmailAddress = "EmailAddress"
,    ExistingCustomers = "ExistingCustomers"
,    IdAndV = "IdAndV"
,    Mortgage = "Mortgage"
,    NoArrearsOnLoan = "NoArrearsOnLoan"
,    NoCustomerInArrears = "NoCustomerInArrears"
,    NoOverOverdraftThirtyDays = "NoOverOverdraftThirtyDays"
,    NoSoleUkAccountOrBankrupt = "NoSoleUkAccountOrBankrupt"
,    Ntb = "NTB"
,    NtbBusiness = "NTBBusiness"
,    SoleStudentAccount = "SoleStudentAccount"
,    SoleUkAccount = "SoleUkAccount"
,    StudentsOnly = "StudentsOnly"
,    TwoMonthsOfCourseStart = "TwoMonthsOfCourseStart"
,    UcasFulltimeTwoYears = "UCASFulltimeTwoYears"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers"
,    NewCustomersOnly = "NewCustomersOnly"
,    SwitchersOnly = "SwitchersOnly"
,    StartUp = "StartUp"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm"
,    HalfYearly = "HalfYearly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum {
    Uk = "UK"
,    Eea = "EEA"
,    Eu = "EU"
,    Efta = "EFTA"
,    GbEng = "GB - ENG"
,    GbNir = "GB - NIR"
,    GbSct = "GB - SCT"
,    GbWls = "GB - WLS"
,    Irl = "IRL"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum {
    Joint = "Joint"
,    SoleIncome = "SoleIncome"
,    SoleOrJoint = "SoleOrJoint"
,    Turnover = "Turnover"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility
/** 
 * Eligibility
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgeRestricted" })
  ageRestricted: boolean;

  @Metadata({ data: "json, name=AnnualBusinessTurnover" })
  annualBusinessTurnover?: string;

  @Metadata({ data: "json, name=AnnualBusinessTurnoverCurrency" })
  annualBusinessTurnoverCurrency?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=EligibilityName" })
  eligibilityName?: string;

  @Metadata({ data: "json, name=EligibilityNotes" })
  eligibilityNotes?: string;

  @Metadata({ data: "json, name=EligibilityType" })
  eligibilityType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum;

  @Metadata({ data: "json, name=IncomeCondition" })
  incomeCondition?: string;

  @Metadata({ data: "json, name=IncomeTurnoverRelated" })
  incomeTurnoverRelated: boolean;

  @Metadata({ data: "json, name=MarketingEligibility" })
  marketingEligibility?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum[];

  @Metadata({ data: "json, name=MaxNumberOfAccounts" })
  maxNumberOfAccounts?: string;

  @Metadata({ data: "json, name=MaximumAge" })
  maximumAge?: number;

  @Metadata({ data: "json, name=MaximumAgeToOpen" })
  maximumAgeToOpen?: number;

  @Metadata({ data: "json, name=MaximumOpeningAmount" })
  maximumOpeningAmount?: boolean;

  @Metadata({ data: "json, name=MinIncomeTurnoverPaidIntoAccount" })
  minIncomeTurnoverPaidIntoAccount?: number;

  @Metadata({ data: "json, name=MinimumAge" })
  minimumAge?: number;

  @Metadata({ data: "json, name=MinimumDeposit" })
  minimumDeposit?: boolean;

  @Metadata({ data: "json, name=MinimumIncomeFrequency" })
  minimumIncomeFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum;

  @Metadata({ data: "json, name=MinimumIncomeTurnoverAmount" })
  minimumIncomeTurnoverAmount?: string;

  @Metadata({ data: "json, name=MinimumIncomeTurnoverCurrency" })
  minimumIncomeTurnoverCurrency?: string;

  @Metadata({ data: "json, name=MinimumOperatingBalance" })
  minimumOperatingBalance?: string;

  @Metadata({ data: "json, name=MinimumOperatingBalanceCurrency" })
  minimumOperatingBalanceCurrency?: string;

  @Metadata({ data: "json, name=MinimumOperatingBalanceExists" })
  minimumOperatingBalanceExists?: boolean;

  @Metadata({ data: "json, name=OpeningDepositMaximumAmount" })
  openingDepositMaximumAmount?: string;

  @Metadata({ data: "json, name=OpeningDepositMaximumCurrency" })
  openingDepositMaximumCurrency?: string;

  @Metadata({ data: "json, name=OpeningDepositMinimum" })
  openingDepositMinimum?: string;

  @Metadata({ data: "json, name=OpeningDepositMinimumCurrency" })
  openingDepositMinimumCurrency?: string;

  @Metadata({ data: "json, name=OtherFinancialHoldingRequired" })
  otherFinancialHoldingRequired: boolean;

  @Metadata({ data: "json, name=PreviousBankruptcy" })
  previousBankruptcy: boolean;

  @Metadata({ data: "json, name=ResidencyRestricted" })
  residencyRestricted: boolean;

  @Metadata({ data: "json, name=ResidencyRestrictedRegion" })
  residencyRestrictedRegion?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum;

  @Metadata({ data: "json, name=SingleJointIncome" })
  singleJointIncome?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum;

  @Metadata({ data: "json, name=ThirdSectorOrganisations" })
  thirdSectorOrganisations: boolean;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails
/** 
 * Feature Details
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CriteriaType" })
  criteriaType?: string;

  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=FeatureDescription" })
  featureDescription?: string;

  @Metadata({ data: "json, name=FeatureName" })
  featureName?: string;

  @Metadata({ data: "json, name=FeatureSubType" })
  featureSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum;

  @Metadata({ data: "json, name=FeatureType" })
  featureType?: string;

  @Metadata({ data: "json, name=FeatureValue" })
  featureValue?: string;

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature
/** 
 * Account Features
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=ExistingFeature" })
  existingFeature: boolean;

  @Metadata({ data: "json, name=FeatureDetails", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails })
  featureDetails?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails[];

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=ProductState" })
  productState?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
    AcademicTerm = "AcademicTerm"
,    AccountClosing = "AccountClosing"
,    AccountOpening = "AccountOpening"
,    AtTimeOfLoanRepayment = "AtTimeOfLoanRepayment"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    EveryFiveBusinessDays = "EveryFiveBusinessDays"
,    Item = "Item"
,    Monthly = "Monthly"
,    OnAccountAnniversary = "OnAccountAnniversary"
,    PerHour = "PerHour"
,    PerOccurrence = "PerOccurrence"
,    PerSheet = "PerSheet"
,    PerTransactionAmount = "PerTransactionAmount"
,    PerTransactionPercentage = "PerTransactionPercentage"
,    Quarterly = "Quarterly"
,    SixMonthly = "SixMonthly"
,    StartOfLoan = "StartOfLoan"
,    StatementMonthly = "StatementMonthly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
/** 
 * Fee Sub Details
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @Metadata({ data: "json, name=FeeFrequency" })
  feeFrequency: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;

  @Metadata({ data: "json, name=FeeHigherTier" })
  feeHigherTier?: number;

  @Metadata({ data: "json, name=FeeLowerTier" })
  feeLowerTier?: number;

  @Metadata({ data: "json, name=FeeMax" })
  feeMax?: string;

  @Metadata({ data: "json, name=FeeMin" })
  feeMin?: string;

  @Metadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @Metadata({ data: "json, name=FeesAndChargesNotes" })
  feesAndChargesNotes?: string;

  @Metadata({ data: "json, name=Negotiable" })
  negotiable: boolean;

  @Metadata({ data: "json, name=RepresentativeRate" })
  representativeRate?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
    Other = "Other"
,    AtmDonation = "ATMDonation"
,    AtmDeposAtmPaidIn = "ATMDeposATMPaidIn"
,    ReportCertBalance = "ReportCertBalance"
,    AtmAbroadConVisaCredit = "ATMAbroadConVisaCredit"
,    AtmAbroadConVisaDebit = "ATMAbroadConVisaDebit"
,    AtmCardnetEnvIn = "ATMCardnetEnvIn"
,    AtmCashGroupAtmCreditCard = "ATMCashGroupATMCreditCard"
,    AtmCashNonGroupAtmCredittcard = "ATMCashNonGroupATMCredittcard"
,    AtmCashGroupAtmDebitCard = "ATMCashGroupATMDebitCard"
,    AtmCashNonGroupAtmDebitcard = "ATMCashNonGroupATMDebitcard"
,    AtmConGroupAtm = "ATMConGroupATM"
,    AtmAbroad = "ATMAbroad"
,    AtmForeignCashDebCard = "ATMForeignCashDebCard"
,    AtmAbroadGoldVisaDebit = "ATMAbroadGoldVisaDebit"
,    AtmSpainCashCard = "ATMSpainCashCard"
,    AtmSpainDebitCard = "ATMSpainDebitCard"
,    AtmSpainConversionDebitCard = "ATMSpainConversionDebitCard"
,    AtmSpainConversionCashCard = "ATMSpainConversionCashCard"
,    AtmNonSterlingWithdrawal = "ATMNonSterlingWithdrawal"
,    AtmAbroadVisaCredit = "ATMAbroadVisaCredit"
,    AtmAbroadVisaDebit = "ATMAbroadVisaDebit"
,    AtmAbroadConVisaGoldDebit = "ATMAbroadConVisaGoldDebit"
,    AtmWidthdrawCash = "ATMWidthdrawCash"
,    BacsOnLineAncilliary = "BACSOnLineAncilliary"
,    BacsBatch = "BACSBatch"
,    BacsOnLineFile = "BACSOnLineFile"
,    BacsFileItem = "BACSFileItem"
,    BacsOnLineSetup = "BACSOnLineSetup "
,    BacsItem = "BACSItem"
,    BacsItemInterbranch = "BACSItemInterbranch"
,    BacsBulkBatch = "BACSBulkBatch"
,    BacsOnLineOverlimit = "BACSOnLineOverlimit"
,    BacsOnLinePayment = "BACSOnLinePayment"
,    BacsRecallItem = "BACSRecallItem"
,    BacsOnLineService = "BACSOnLineService"
,    BacsBulkInternet = "BACSBulkInternet"
,    BacstelDirDebSmartCard = "BACSTELDirDebSmartCard"
,    BacstelDirDebWebInit = "BACSTELDirDebWebInit"
,    BacsteLirDebWebInit = "BACSTELirDebWebInit"
,    BacstelDirDebOverlimit = "BACSTELDirDebOverlimit"
,    BacstelDirDebPayment = "BACSTELDirDebPayment"
,    BacstelDirDebService = "BACSTELDirDebService"
,    BacstelDirDebAncilliary = "BACSTELDirDebAncilliary"
,    BacsDirectItemProfile = "BACSDirectItemProfile"
,    BacstelAncilliary = "BACSTELAncilliary"
,    BacstelSmartCard = "BACSTELSmartCard"
,    BacstelFile = "BACSTELFile"
,    BacstelSetup = "BACSTELSetup "
,    BacstelOverlimit = "BACSTELOverlimit"
,    BacstelPayment = "BACSTELPayment"
,    BacstelService = "BACSTELService"
,    ChapsOutBranch = "CHAPSOutBranch"
,    ChapsCancellation = "CHAPSCancellation"
,    ChapsOutOnlineDepositAcc = "CHAPSOutOnlineDepositAcc"
,    ChapsIn = "CHAPSIn"
,    ChapsOutInterBank = "CHAPSOutInterBank"
,    ChapsInterBank = "CHAPSInterBank"
,    ChapsOutPost = "CHAPSOutPost"
,    ChapsOutInterBranch = "CHAPSOutInterBranch"
,    ChapsOut = "CHAPSOut"
,    ChapsOutOnline = "CHAPSOutOnline"
,    ChapSandForeignPay = "CHAPSandForeignPay"
,    ChapsOutManual = "CHAPSOutManual"
,    CardCardReplacement = "CardCardReplacement"
,    DraftsCounter = "DraftsCounter"
,    DraftsBankers = "DraftsBankers"
,    DraftsIntlPayableAbroad = "DraftsIntlPayableAbroad"
,    DraftsLostStolen = "DraftsLostStolen"
,    CardPersonalisedCard = "CardPersonalisedCard"
,    DraftsIntlStoppedCancelled = "DraftsIntlStoppedCancelled"
,    EuroChqXLess = "EuroChqXLess"
,    EuroChqXPlus = "EuroChqXPlus"
,    FpsOutFutureDated = "FPSOutFutureDated"
,    FpsOutImmediate = "FPSOutImmediate"
,    FpsOut = "FPSOut"
,    FpsOutOwn = "FPSOutOwn"
,    FpsInBranch = "FPSInBranch"
,    FpsukPayUrgent = "FPSUKPayUrgent"
,    LegalArticlesReport = "LegalArticlesReport"
,    LegalSealing = "LegalSealing"
,    LegalBondAndGuarantee = "LegalBondAndGuarantee"
,    LegalCourtOrder = "LegalCourtOrder"
,    LegalCoSearch = "LegalCoSearch"
,    LegalDepositAssignment = "LegalDepositAssignment"
,    LegalGuaranteePrep = "LegalGuaranteePrep"
,    LegalLifePolicyPrepCo = "LegalLifePolicyPrepCo"
,    LegalLifePolicyPrepPersonal = "LegalLifePolicyPrepPersonal"
,    LegalPriorityPariPassu = "LegalPriorityPariPassu"
,    LegalSubordinationAgreement = "LegalSubordinationAgreement"
,    DirDebDirectDebitAdmin = "DirDebDirectDebitAdmin"
,    DirDebDirectDebitCancel = "DirDebDirectDebitCancel"
,    IntlPayBibForeignLimit = "IntlPayBIBForeignLimit"
,    IntlPayCreditTransCust = "IntlPayCreditTransCust"
,    IntlPayCreditTransNonCust = "IntlPayCreditTransNonCust"
,    IntlPayUrgentPaymentForeign = "IntlPayUrgentPaymentForeign"
,    IntlPayExpressMoneyMover = "IntlPayExpressMoneyMover"
,    IntlPayEeaPayUrgent = "IntlPayEEAPayUrgent"
,    IntlPayIrishPayUrgent = "IntlPayIrishPayUrgent"
,    IntlPayEeaPay = "IntlPayEEAPay"
,    IntlPayForeignIn1CPlus = "IntlPayForeignIn1CPlus"
,    IntlPayForeignPaymentInUkAcc = "IntlPayForeignPaymentInUKAcc"
,    IntlPayForeignCharge = "IntlPayForeignCharge"
,    IntlPayForeignCancellation = "IntlPayForeignCancellation"
,    IntlPayForeignStandardEuEuroBic = "IntlPayForeignStandardEUEuroBIC"
,    IntlPayFxFeeRate = "IntlPayFXFeeRate"
,    IntlPayForeignInternet = "IntlPayForeignInternet"
,    IntlPayForeign = "IntlPayForeign"
,    IntlPayForeignInbound = "IntlPayForeignInbound"
,    IntlPayFxPaymentOut = "IntlPayFXPaymentOut"
,    IntlPayForeignInSub1C = "IntlPayForeignInSub1C"
,    IntlPayFxRate = "IntlPayFXRate"
,    IntlPayForeignStandardEuEuroNoBic = "IntlPayForeignStandardEUEuroNoBIC"
,    IntlPayFxPaymentOutIr = "IntlPayFXPaymentOutIR"
,    IntlPayFxFee = "IntlPayFXFee"
,    IntlPayPurchaseNonSterling = "IntlPayPurchaseNonSterling"
,    IntlPayPostPaymentForeign = "IntlPayPostPaymentForeign"
,    IntlPayPurchaseRateNonSterling = "IntlPayPurchaseRateNonSterling"
,    IntlPayPaymentTracing = "IntlPayPaymentTracing"
,    IntlPayStandardMoneyMover = "IntlPayStandardMoneyMover"
,    IntlPayMt101Transaction = "IntlPayMT101Transaction"
,    IntlPayTransNonSterling = "IntlPayTransNonSterling"
,    IntlPayTransRateNonSterling = "IntlPayTransRateNonSterling"
,    IntlPayForeignUrgentEuEuroBic = "IntlPayForeignUrgentEUEuroBIC"
,    IntlPayForeignUrgentEuEuroNoBic = "IntlPayForeignUrgentEUEuroNoBIC"
,    IntlPayUrgentPaymentGroup = "IntlPayUrgentPaymentGroup"
,    IntlPayUrgentPaymentUk = "IntlPayUrgentPaymentUK"
,    IntlPayUsaPayUrgent = "IntlPayUSAPayUrgent"
,    IntlPayCurrencyPurchase = "IntlPayCurrencyPurchase"
,    IntlPayWorldpayPayment = "IntlPayWorldpayPayment"
,    IntlPayCurrencyWithdraw = "IntlPayCurrencyWithdraw"
,    InvPayBankDetailsWrong = "InvPayBankDetailsWrong"
,    InvPayForeignBcnr = "InvPayForeignBCNR"
,    InvPayForeignRecall = "InvPayForeignRecall"
,    InvGeneralInq = "InvGeneralInq"
,    InvOldInstruction = "InvOldInstruction"
,    InvPayPaymentRecall = "InvPayPaymentRecall"
,    InvPayReturnDebitXvLess = "InvPayReturnDebitXVLess"
,    InvPayReturnDebitXvPlus = "InvPayReturnDebitXVPlus"
,    InvPayStopPayment = "InvPayStopPayment"
,    InvPayStandingOrdUnpaid = "InvPayStandingOrdUnpaid"
,    SafeKeepAccess = "SafeKeepAccess"
,    SafeKeepDeedMedium = "SafeKeepDeedMedium"
,    SafeKeepingEnvelope = "SafeKeepingEnvelope"
,    SafeKeepingInspection = "SafeKeepingInspection"
,    SafeKeepingLargeItem = "SafeKeepingLargeItem"
,    SafeKeepMultipleItems = "SafeKeepMultipleItems"
,    SafeKeepingParcel = "SafeKeepingParcel"
,    SafeKeepDeedSmall = "SafeKeepDeedSmall"
,    SafeKeepOneItem = "SafeKeepOneItem"
,    SafeKeepSafeCustody = "SafeKeepSafeCustody"
,    LoanArrangementFeePc = "LoanArrangementFeePC"
,    LoanArrangement = "LoanArrangement"
,    LoanEarlyRepayment = "LoanEarlyRepayment"
,    LoanLatePayment = "LoanLatePayment"
,    LoanSmeUnsecuredLoan = "LoanSMEUnsecuredLoan"
,    LoanTieredArrangement = "LoanTieredArrangement"
,    NightSafeNightSafeBankOpen = "NightSafeNightSafeBankOpen"
,    NightSafeCreditSub5K = "NightSafeCreditSub5K"
,    NightSafeNightSafe = "NightSafeNightSafe"
,    NightSafeNightSafePaidIn = "NightSafeNightSafePaidIn"
,    OverdraftAnnualReview = "OverdraftAnnualReview"
,    OverdraftTempOverdraft = "OverdraftTempOverdraft"
,    OverdraftUnauthorisedBorrowing = "OverdraftUnauthorisedBorrowing"
,    PoPostOfficeCounterCredit = "POPostOfficeCounterCredit"
,    PoPostOfficeCashCredit = "POPostOfficeCashCredit"
,    PoPostOfficeCashOut = "POPostOfficeCashOut"
,    PoPostOfficeWithdrawal = "POPostOfficeWithdrawal"
,    ChqBookTheftLossAllStopped = "ChqBookTheftLossAllStopped"
,    ChqIssuedCurrencyAcc = "ChqIssuedCurrencyAcc"
,    ChqCopy = "ChqCopy"
,    ChqDraft = "ChqDraft"
,    ChqIn = "ChqIn"
,    ChqDraftSterling = "ChqDraftSterling"
,    ChqOutIssued = "ChqOutIssued"
,    ChqSpecialChqPresentation = "ChqSpecialChqPresentation"
,    ChqCounterCheque = "ChqCounterCheque"
,    ChqChequeswithStatement = "ChqChequeswithStatement"
,    ChqStopped = "ChqStopped"
,    ChqTrans = "ChqTrans"
,    ChqDraftFx = "ChqDraftFX"
,    ChqForeignCourier = "ChqForeignCourier"
,    ChqForeignNegTenThou = "ChqForeignNegTenThou"
,    ChqForeignNegHundred = "ChqForeignNegHundred"
,    ChequeForeignBankDivi = "ChequeForeignBankDivi"
,    ChqForeignNegFiftyThou = "ChqForeignNegFiftyThou"
,    ChqPensionCheque = "ChqPensionCheque"
,    ChequeForeignOtherDivi = "ChequeForeignOtherDivi"
,    ChqForeignNegFiveThou = "ChqForeignNegFiveThou"
,    ChqForeignNegMax = "ChqForeignNegMax"
,    ChqForeignGbpmmdPlus = "ChqForeignGBPMMDPlus"
,    ChqGiftCheque = "ChqGiftCheque"
,    ChqCounterLodgement = "ChqCounterLodgement"
,    ChqCashDropLodgement = "ChqCashDropLodgement"
,    ChqChequePhotocopy = "ChqChequePhotocopy"
,    ChqPostOfficeCredit = "ChqPostOfficeCredit"
,    ChqPostOfficeChequeCollected = "ChqPostOfficeChequeCollected"
,    ChqChequeRetrieval = "ChqChequeRetrieval"
,    ChqReconcilliationPerTrans = "ChqReconcilliationPerTrans"
,    ChqSpecialPresentationCount = "ChqSpecialPresentationCount"
,    ChqSpecialPresentationPtt = "ChqSpecialPresentationPTT"
,    ChqUnpaidCharge = "ChqUnpaidCharge"
,    ChqUnpaidTransIn = "ChqUnpaidTransIn"
,    ChqUnpaidTransOut = "ChqUnpaidTransOut"
,    ChqUnpaidCheque = "ChqUnpaidCheque"
,    ReportAuditLetter = "ReportAuditLetter"
,    ReportFaxAdviceAdditional = "ReportFAXAdviceAdditional"
,    ReportTelAdviceAdditional = "ReportTelAdviceAdditional"
,    ReportCreditHistory = "ReportCreditHistory"
,    ReportCertInterestDuplicate = "ReportCertInterestDuplicate"
,    ReportCertInterest = "ReportCertInterest"
,    ReportCreditHistoryAdditionalInYear = "ReportCreditHistoryAdditionalInYear"
,    ReportForeignStatusEnqElec = "ReportForeignStatusEnqElec"
,    ReportForeignStatusEnq = "ReportForeignStatusEnq"
,    ReportCashBackorInterestAnal = "ReportCashBackorInterestAnal"
,    ReportStatementChqDaily = "ReportStatementChqDaily"
,    ReportStatementChqFortnightly = "ReportStatementChqFortnightly"
,    ReportStatementChqMonthly = "ReportStatementChqMonthly"
,    ReportStatementChqWeekly = "ReportStatementChqWeekly"
,    ReportStatementAndDiviChq = "ReportStatementAndDiviChq"
,    ReportReference = "ReportReference"
,    ReportReferralItem = "ReportReferralItem"
,    ReportStatementByAtm = "ReportStatementByATM"
,    ReportStatementByBranch = "ReportStatementByBranch"
,    ReportStatementCopyRegular = "ReportStatementCopyRegular"
,    ReportStatusEnquiry = "ReportStatusEnquiry"
,    ReportStatementFrequent = "ReportStatementFrequent"
,    ReportStatementMonthly = "ReportStatementMonthly"
,    ReportStatementCopy1 = "ReportStatementCopy1"
,    ReportStatementToBranch = "ReportStatementToBranch"
,    ReportSmsTextMiniStatementorAlert = "ReportSMSTextMiniStatementorAlert"
,    ReportStatementFortnightly = "ReportStatementFortnightly"
,    ReportSmsTextMiniStatementWoM = "ReportSMSTextMiniStatementWoM"
,    ReportSmsTextAlertBalance = "ReportSMSTextAlertBalance"
,    ReportSmsTextAlert = "ReportSMSTextAlert"
,    ReportTaxCert = "ReportTaxCert"
,    ReportWeeklyStatement = "ReportWeeklyStatement"
,    ReportTextMessageBanking = "ReportTextMessageBanking"
,    SepaCancellation = "SEPACancellation"
,    SepaBranch = "SEPABranch"
,    SepaCredit = "SEPACredit"
,    SepaDirectDebit = "SEPADirectDebit"
,    SepaIn = "SEPAIn"
,    SepaEuro = "SEPAEuro"
,    SepaOut = "SEPAOut"
,    SepaUnpaid = "SEPAUnpaid"
,    SepaWinbitsAnnualService = "SEPAWinbitsAnnual Service"
,    SepaWinbitsTransaction = "SEPAWinbitsTransaction"
,    TransBillPaymentBranch = "TransBillPaymentBranch"
,    TransBillCollect = "TransBillCollect"
,    TransTelephoneBillPayment = "TransTelephoneBillPayment"
,    TransBankPayment = "TransBankPayment"
,    TransBillPaymentTelephone = "TransBillPaymentTelephone"
,    TransCorrespondentBankFee = "TransCorrespondentBankFee"
,    TransCreditTransferUkDifferent = "TransCreditTransferUKDifferent"
,    TransCreditTransferUkSame = "TransCreditTransferUKSame"
,    TransCredit = "TransCredit"
,    TransCreditTransfer = "TransCreditTransfer"
,    TransBranchCredit = "TransBranchCredit"
,    TransDebit = "TransDebit"
,    TransDebCardDeb = "TransDebCardDeb"
,    TransUkDirDeb = "TransUKDirDeb"
,    TransManualDeb = "TransManualDeb"
,    TransBuyForeignWithGbp = "TransBuyForeignWithGBP"
,    TransGoodValueReq = "TransGoodValueReq"
,    TransSwiftOutUkForeign = "TransSWIFTOutUKForeign"
,    TransInconpleteInstruction = "TransInconpleteInstruction"
,    TransManualEntries = "TransManualEntries"
,    TransManualTrans = "TransManualTrans"
,    TransNonSterling = "TransNonSterling"
,    TransPosSaleForeign = "TransPOSSaleForeign"
,    TransPriPaymentPost = "TransPriPaymentPost"
,    TransPosSaleUk = "TransPOSSaleUK"
,    TransReturnPayment = "TransReturnPayment"
,    TransReconciliationPerTrans = "TransReconciliationPerTrans"
,    TransStandingOrdAdmin = "TransStandingOrdAdmin"
,    TransStandingOrd = "TransStandingOrd"
,    TransStandingOrdManPay = "TransStandingOrdManPay"
,    TransTravellersChqOtherBank = "TransTravellersChqOtherBank"
,    TransTelBusiPriPaymentForeignToUkAcc = "TransTelBusiPriPaymentForeignToUKAcc"
,    TransTeleItem = "TransTeleItem"
,    TransTelBusiPriPaymentToGrpAcc = "TransTelBusiPriPaymentToGrpAcc"
,    TransTravellersChqRate = "TransTravellersChqRate"
,    TransTransferExGroup = "TransTransferExGroup"
,    TransUnauthorisedPaidTrans = "TransUnauthorisedPaidTrans"
,    TransUrgentPaymentPostal = "TransUrgentPaymentPostal"
,    TransUnpaidTrans = "TransUnpaidTrans"
,    TransTelBusiPriPaymentToNonGrpAcc = "TransTelBusiPriPaymentToNonGrpAcc"
,    TransSwiftOutNonEeaSterling = "TransSWIFTOutNonEEASterling"
,    AutoAutoCredit = "AutoAutoCredit"
,    AutoAutomatedEntries = "AutoAutomatedEntries"
,    AutoAutoCreditPhoneInet = "AutoAutoCreditPhoneInet"
,    AutoAutomatedTrans = "AutoAutomatedTrans"
,    AutoDebitCardCommercial = "AutoDebitCardCommercial"
,    AutoFpsAutoCredit = "AutoFPSAutoCredit"
,    VisaConvertAbroadForeign = "VisaConvertAbroadForeign"
,    VisaBureauDeChange = "VisaBureauDeChange"
,    VisaTravellersChqorCurrency = "VisaTravellersChqorCurrency"
,    OnlineInternetBillPayment = "OnlineInternetBillPayment"
,    OnlineBusinessOnlineEuroPayment = "OnlineBusinessOnlineEuroPayment"
,    OnlineBusinessOnlineUrgentEuroPayment = "OnlineBusinessOnlineUrgentEuroPayment"
,    OnlineBusinessOnlineForeignPayment = "OnlineBusinessOnlineForeignPayment"
,    OnlineInterbankTransfer = "OnlineInterbankTransfer"
,    OnlineInterbankPerTransfer = "OnlineInterbankPerTransfer"
,    OnlineInterbranchTransfer = "OnlineInterbranchTransfer"
,    OnlineInterbranchPerTransfer = "OnlineInterbranchPerTransfer"
,    OnlineSubscriptionMonthly = "OnlineSubscriptionMonthly"
,    OnlineBankingPayment = "OnlineBankingPayment"
,    OnlineBankingSubscription = "OnlineBankingSubscription"
,    OnlinePosSale = "OnlinePOSSale"
,    OnlinePersonalCustAncillarys = "OnlinePersonalCustAncillarys"
,    OnlinePersonalCustService = "OnlinePersonalCustService"
,    OnlinePersonalCustOverlimits = "OnlinePersonalCustOverlimits"
,    OnlineReplacementCardReader = "OnlineReplacementCardReader"
,    OnlinePersonalCustSetUp = "OnlinePersonalCustSetUp"
,    OnlinePersonalCustTransaction = "OnlinePersonalCustTransaction"
,    OnlinePaymentinGbPtoUk = "OnlinePaymentinGBPtoUK"
,    OnlineUrgentPayment = "OnlineUrgentPayment"
,    OnlinePaymentinUsDtoUs = "OnlinePaymentinUSDtoUS"
,    OnlineBulkDirectDebSterling = "OnlineBulkDirectDebSterling"
,    ForeignChqSent = "ForeignChqSent"
,    ForeignChqSelf = "ForeignChqSelf"
,    ForeignChqEncashment = "ForeignChqEncashment"
,    ForeignFxInwardsCust = "ForeignFXInwardsCust"
,    ForeignFxTransfersRoi = "ForeignFXTransfersROI"
,    ForeignFxForwardTrans = "ForeignFXForwardTrans"
,    ForeignFxTransfersBoi = "ForeignFXTransfersBOI"
,    ForeignExMaintenance = "ForeignExMaintenance"
,    ForeignFxInwardsNonCust = "ForeignFXInwardsNonCust"
,    ForeignFxOutwards = "ForeignFXOutwards"
,    ForeignPurchase = "ForeignPurchase"
,    ForeignStatusRep = "ForeignStatusRep"
,    ForeignChqDraft = "ForeignChqDraft"
,    ForeignChqCLess = "ForeignChqCLess"
,    ForeignChqMLess = "ForeignChqMLess"
,    ForeignChqOther = "ForeignChqOther"
,    ForeignChqMPlus = "ForeignChqMPlus"
,    ForeignChqCcc = "ForeignChqCCC"
,    ServiceCAccountFee = "ServiceCAccountFee"
,    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly"
,    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly"
,    ServiceCBalanceHandling = "ServiceCBalanceHandling"
,    ServiceCFixedTariff = "ServiceCFixedTariff"
,    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage"
,    ServiceCMonitorDaily = "ServiceCMonitorDaily"
,    ServiceCManagementFee = "ServiceCManagementFee"
,    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee"
,    ServiceCMonitorMonthly = "ServiceCMonitorMonthly"
,    ServiceCMonitorWeekly = "ServiceCMonitorWeekly"
,    ServiceCSecurityFee = "ServiceCSecurityFee"
,    ServiceCmt940AccountFirst = "ServiceCMT940AccountFirst"
,    ServiceCmt940AccountSubsequent = "ServiceCMT940AccountSubsequent"
,    ServiceCOther = "ServiceCOther"
,    CounterCoinHandling = "CounterCoinHandling"
,    CounterCashIn = "CounterCashIn"
,    CounterCashInNotUs = "CounterCashInNotUs"
,    CounterCashOut = "CounterCashOut"
,    CounterCashX = "CounterCashX"
,    CounterForeignCashMax = "CounterForeignCashMax"
,    CounterForeignNoteHandling = "CounterForeignNoteHandling"
,    CounterForeignCashOut = "CounterForeignCashOut"
,    CounterCashFeeRate = "CounterCashFeeRate"
,    CounterForeignCashOutTx = "CounterForeignCashOutTx"
,    CounterCounterLodgement = "CounterCounterLodgement"
,    CounterCashDropLodgement = "CounterCashDropLodgement"
,    CounterNotesLodged = "CounterNotesLodged"
,    CounterNotesOut = "CounterNotesOut"
,    CounterCashInOwn = "CounterCashInOwn"
,    CounterPaidTrans = "CounterPaidTrans"
,    CounterCashFeePercent = "CounterCashFeePercent"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail
/** 
 * Fee Detail
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=FeeSubDetails" })
  feeSubDetails: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;

  @Metadata({ data: "json, name=FeeType" })
  feeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=Other" })
  other?: string;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails
/** 
 * Fee Details
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeDetail" })
  feeDetail: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail;

  @Metadata({ data: "json, name=FeeSubType" })
  feeSubType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees
/** 
 * Fees
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=FeeDetails", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails })
  feeDetails: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails[];

  @Metadata({ data: "json, name=FeeHigherTier" })
  feeHigherTier?: number;

  @Metadata({ data: "json, name=FeeLowerTier" })
  feeLowerTier?: number;

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges
/** 
 * Fees And Charges
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=Fees" })
  fees: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees;

  @Metadata({ data: "json, name=ProductState" })
  productState: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum {
    AndroidPay = "AndroidPay"
,    ApplePay = "ApplePay"
,    IssuerMobileApp = "IssuerMobileApp"
,    MobileBankingApp = "MobileBankingApp"
,    Other = "Other"
,    PayM = "PayM"
,    SamsungPay = "SamsungPay"
,    VodafoneWallet = "VodafoneWallet"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK"
,    Eu = "EU"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand
/** 
 * Brand
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrademarkID" })
  trademarkId: string;

  @Metadata({ data: "json, name=TrademarkIPOCode" })
  trademarkIpoCode: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName
/** 
 * Organisation Name
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
  @Metadata({ data: "json, name=LegalName" })
  legalName: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation
/** 
 * Parent organisation
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=BIC" })
  bic?: string;

  @Metadata({ data: "json, name=LEI" })
  lei?: string;

  @Metadata({ data: "json, name=OrganisationName" })
  organisationName: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation
/** 
 * Organisation
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Brand" })
  brand: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand;

  @Metadata({ data: "json, name=ParentOrganisation" })
  parentOrganisation: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum {
    No = "No"
,    Yes = "Yes"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum {
    AcademicTerm = "AcademicTerm"
,    Daily = "Daily"
,    Weekly = "Weekly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    HalfYearly = "Half-Yearly"
,    Yearly = "Yearly"
,    Overnight = "Overnight"
,    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum {
    AcademicTerm = "AcademicTerm"
,    Daily = "Daily"
,    Weekly = "Weekly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    HalfYearly = "Half-Yearly"
,    Yearly = "Yearly"
,    Overnight = "Overnight"
,    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross"
,    Net = "Net"
,    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum {
    Periodic = "Periodic"
,    Minimum = "Minimum"
,    Maximum = "Maximum"
,    Setup = "Setup"
,    Review = "Review"
,    Renewal = "Renewal"
,    MinimumSetup = "MinimumSetup"
,    MaximumSetup = "MaximumSetup"
,    Total = "Total"
,    Item = "Item"
,    EmergencyLending = "EmergencyLending"
,    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @Metadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType;

  @Metadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @Metadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType;

  @Metadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum;

  @Metadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum {
    Unarranged = "Unarranged"
,    Arranged = "Arranged"
,    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum {
    AcademicTerm = "AcademicTerm"
,    Daily = "Daily"
,    Weekly = "Weekly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    HalfYearly = "Half-Yearly"
,    Yearly = "Yearly"
,    Overnight = "Overnight"
,    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum {
    AcademicTerm = "AcademicTerm"
,    Daily = "Daily"
,    Weekly = "Weekly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    HalfYearly = "Half-Yearly"
,    Yearly = "Yearly"
,    Overnight = "Overnight"
,    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross"
,    Net = "Net"
,    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum {
    Periodic = "Periodic"
,    Minimum = "Minimum"
,    Maximum = "Maximum"
,    Setup = "Setup"
,    Review = "Review"
,    Renewal = "Renewal"
,    MinimumSetup = "MinimumSetup"
,    MaximumSetup = "MaximumSetup"
,    Total = "Total"
,    Item = "Item"
,    EmergencyLending = "EmergencyLending"
,    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @Metadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType;

  @Metadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @Metadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType;

  @Metadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum;

  @Metadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum {
    AcademicTerm = "AcademicTerm"
,    Daily = "Daily"
,    Weekly = "Weekly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    HalfYearly = "Half-Yearly"
,    Yearly = "Yearly"
,    Overnight = "Overnight"
,    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum {
    AcademicTerm = "AcademicTerm"
,    Daily = "Daily"
,    Weekly = "Weekly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    HalfYearly = "Half-Yearly"
,    Yearly = "Yearly"
,    Overnight = "Overnight"
,    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross"
,    Net = "Net"
,    Other = "Other"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum {
    Periodic = "Periodic"
,    Minimum = "Minimum"
,    Maximum = "Maximum"
,    Setup = "Setup"
,    Review = "Review"
,    Renewal = "Renewal"
,    MinimumSetup = "MinimumSetup"
,    MaximumSetup = "MaximumSetup"
,    Total = "Total"
,    Item = "Item"
,    EmergencyLending = "EmergencyLending"
,    Other = "Other"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @Metadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType;

  @Metadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @Metadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType;

  @Metadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum;

  @Metadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand
/** 
 * Tiers
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
  @Metadata({ data: "json, name=EAR" })
  ear?: string;

  @Metadata({ data: "json, name=FeesAndCharges", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges })
  feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[];

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=TierBandIdentification" })
  tierBandIdentification?: string;

  @Metadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum: string;

  @Metadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum: string;
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet
/** 
 * Tier Bandset
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArrangementOtherType" })
  arrangementOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType;

  @Metadata({ data: "json, name=ArrangementType" })
  arrangementType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum;

  @Metadata({ data: "json, name=BufferAmount" })
  bufferAmount?: string;

  @Metadata({ data: "json, name=CMADefinedIndicator" })
  cmaDefinedIndicator: boolean;

  @Metadata({ data: "json, name=EAR" })
  ear?: string;

  @Metadata({ data: "json, name=FeesAndCharges", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges })
  feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges[];

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=OverdraftTierBand", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand })
  overdraftTierBand?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand[];

  @Metadata({ data: "json, name=TierBandSetIdentification" })
  tierBandSetIdentification?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum {
    Committed = "Committed"
,    OnDemand = "OnDemand"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft
/** 
 * Overdraft
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=FeeChargeNegotiableIndicator" })
  feeChargeNegotiableIndicator?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum;

  @Metadata({ data: "json, name=FeesAndCharges", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges })
  feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges[];

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=MaximumMonthlyOverdraftCharge" })
  maximumMonthlyOverdraftCharge?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=OverdraftProductState" })
  overdraftProductState?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum;

  @Metadata({ data: "json, name=OverdraftTierBandSet", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet })
  overdraftTierBandSet?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet[];

  @Metadata({ data: "json, name=OverdraftType" })
  overdraftType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=Term" })
  term?: string;
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum {
    Basic = "Basic"
,    Business = "Business"
,    General = "General"
,    Graduate = "Graduate"
,    International = "International"
,    Packaged = "Packaged"
,    Personal = "Personal"
,    Premium = "Premium"
,    Reward = "Reward"
,    Sme = "SME"
,    Student = "Student"
,    YoungAdult = "YoungAdult"
,    Youth = "Youth"
}

export enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum {
    Bca = "BCA"
}


// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount
/** 
 * Business current account
**/
export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessChannels" })
  accessChannels: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum[];

  @Metadata({ data: "json, name=Benefits" })
  benefits: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits;

  @Metadata({ data: "json, name=CAPricing", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing })
  caPricing: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing[];

  @Metadata({ data: "json, name=CardNotes" })
  cardNotes?: string;

  @Metadata({ data: "json, name=CardType" })
  cardType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum[];

  @Metadata({ data: "json, name=CardWithdrawalLimit" })
  cardWithdrawalLimit: string;

  @Metadata({ data: "json, name=ChequeBookAvailable" })
  chequeBookAvailable: boolean;

  @Metadata({ data: "json, name=Contactless" })
  contactless: boolean;

  @Metadata({ data: "json, name=CreditInterest" })
  creditInterest: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest;

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningForGettingAnAccount" })
  creditScoringPartOfAccountOpeningForGettingAnAccount: boolean;

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningForIDVerification" })
  creditScoringPartOfAccountOpeningForIdVerification?: boolean;

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore" })
  creditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScore?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum[];

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationText" })
  creditScoringPartOfAccountOpeningIdVerificationText?: string[];

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore" })
  creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[];

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningText" })
  creditScoringPartOfAccountOpeningText?: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string[];

  @Metadata({ data: "json, name=Eligibility" })
  eligibility: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility;

  @Metadata({ data: "json, name=Feature", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature })
  feature?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature[];

  @Metadata({ data: "json, name=FeesAndCharges", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges })
  feesAndCharges: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges[];

  @Metadata({ data: "json, name=InternationalPaymentsSupported" })
  internationalPaymentsSupported: boolean;

  @Metadata({ data: "json, name=MaximumMonthlyCharge" })
  maximumMonthlyCharge?: string;

  @Metadata({ data: "json, name=MobileWallet" })
  mobileWallet?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum[];

  @Metadata({ data: "json, name=Organisation" })
  organisation: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation;

  @Metadata({ data: "json, name=Overdraft", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft })
  overdraft?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft[];

  @Metadata({ data: "json, name=OverdraftOffered" })
  overdraftOffered: boolean;

  @Metadata({ data: "json, name=ProductDescription" })
  productDescription: string;

  @Metadata({ data: "json, name=ProductIdentifier" })
  productIdentifier: string;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=ProductSegment" })
  productSegment: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum[];

  @Metadata({ data: "json, name=ProductType" })
  productType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum;

  @Metadata({ data: "json, name=ProductURL" })
  productUrl: string[];

  @Metadata({ data: "json, name=TsandCs" })
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
  @Metadata({ data: "json, name=Agreement" })
  agreement: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated: Date;

  @Metadata({ data: "json, name=License" })
  license: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;

  @Metadata({ data: "json, name=TermsOfUse" })
  termsOfUse: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;

  @Metadata({ data: "json, name=TotalResults" })
  totalResults: number;
}


export class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount })
  data: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount[];

  @Metadata({ data: "json, name=meta" })
  meta: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}


export class GetBusinessCurrentAccountsResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredErrorObject?: GetBusinessCurrentAccounts400ErrorObject;

  @Metadata()
  fourHundredAndEightErrorObject?: GetBusinessCurrentAccounts408ErrorObject;

  @Metadata()
  fourHundredAndTwentyNineErrorObject?: GetBusinessCurrentAccounts429ErrorObject;

  @Metadata()
  fiveHundredErrorObject?: GetBusinessCurrentAccounts500ErrorObject;

  @Metadata()
  fiveHundredAndThreeErrorObject?: GetBusinessCurrentAccounts503ErrorObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorObject?: GetBusinessCurrentAccountsErrorObject;

  @Metadata()
  getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
