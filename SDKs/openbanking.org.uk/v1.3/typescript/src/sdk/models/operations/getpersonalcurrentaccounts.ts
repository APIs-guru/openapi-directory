import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPersonalCurrentAccountsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetPersonalCurrentAccountsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPersonalCurrentAccountsHeaders;
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
  @Metadata({ data: "json, name=description" })
  description: GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetPersonalCurrentAccounts400ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetPersonalCurrentAccounts408ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetPersonalCurrentAccounts429ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetPersonalCurrentAccounts500ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetPersonalCurrentAccounts503ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
  title: GetPersonalCurrentAccounts503ErrorObjectTitleEnum;
}


export class GetPersonalCurrentAccountsErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
    CashDeposit = "CashDeposit"
,    Deposit = "Deposit"
,    DirectDebit = "DirectDebit"
,    InitialDeposit = "InitialDeposit"
,    InternetLogon = "InternetLogon"
,    MobileLogon = "MobileLogon"
,    RegularDeposit = "RegularDeposit"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail
/** 
 * Benefit detail
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
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
  criteriaType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];

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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem
/** 
 * Benefit Item
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=BenefitDetail", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail })
  benefitDetail?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];

  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup
/** 
 * Benefit Interest Group
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=BenefitItem" })
  benefitItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;

  @Metadata({ data: "json, name=BenefitSubType" })
  benefitSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits
/** 
 * Benefit
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
  @Metadata({ data: "json, name=Benefit" })
  benefit: boolean;

  @Metadata({ data: "json, name=BenefitGroup", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup })
  benefitGroup?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem
/** 
 * Card Pricing
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem extends SpeakeasyBase {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing
/** 
 * Card Price
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing extends SpeakeasyBase {
  @Metadata({ data: "json, name=CAPricingItem" })
  caPricingItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem;

  @Metadata({ data: "json, name=ProductState" })
  productState: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum {
    Daily = "Daily"
,    Weekly = "Weekly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    HalfYearly = "Half-Yearly"
,    Yearly = "Yearly"
,    Overnight = "Overnight"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum {
    Banded = "Banded"
,    Tiered = "Tiered"
,    Whole = "Whole"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum {
    Fixed = "Fixed"
,    Variable = "Variable"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum {
    Apr = "APR"
,    Aer = "AER"
,    Gross = "Gross"
,    Net = "Net"
,    RepApr = "RepApr"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers
/** 
 * Credit Interest Tiers
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers extends SpeakeasyBase {
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
  rateComparisonType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum;

  @Metadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum?: string;

  @Metadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum {
    Compound = "Compound"
,    PayAway = "PayAway"
,    SelfCredit = "SelfCredit"
,    SimpleInterest = "SimpleInterest"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem
/** 
 * Credit Interest item
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum;

  @Metadata({ data: "json, name=CalculationMethod" })
  calculationMethod?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum;

  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: string;

  @Metadata({ data: "json, name=FixedInterestLength" })
  fixedInterestLength?: number;

  @Metadata({ data: "json, name=InterestNotes" })
  interestNotes?: string;

  @Metadata({ data: "json, name=InterestRateType" })
  interestRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum;

  @Metadata({ data: "json, name=InterestTiers", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers })
  interestTiers?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers[];

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=PaymentMethod" })
  paymentMethod?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup
/** 
 * Credit Interest Group
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditInterestItem" })
  creditInterestItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem;

  @Metadata({ data: "json, name=InterestTierSubType" })
  interestTierSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest
/** 
 * Credit Interest
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditCharged" })
  creditCharged: boolean;

  @Metadata({ data: "json, name=CreditInterestGroup", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup })
  creditInterestGroup?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup[];
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard"
,    Soft = "Soft"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard"
,    Soft = "Soft"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers"
,    NewCustomersOnly = "NewCustomersOnly"
,    SwitchersOnly = "SwitchersOnly"
,    StartUp = "StartUp"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm"
,    HalfYearly = "HalfYearly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint"
,    SoleIncome = "SoleIncome"
,    SoleOrJoint = "SoleOrJoint"
,    Turnover = "Turnover"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility
/** 
 * Eligibility
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
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
  eligibilityType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;

  @Metadata({ data: "json, name=IncomeCondition" })
  incomeCondition?: string;

  @Metadata({ data: "json, name=IncomeTurnoverRelated" })
  incomeTurnoverRelated: boolean;

  @Metadata({ data: "json, name=MarketingEligibility" })
  marketingEligibility?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];

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
  minimumIncomeFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;

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
  residencyRestrictedRegion?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;

  @Metadata({ data: "json, name=SingleJointIncome" })
  singleJointIncome?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;

  @Metadata({ data: "json, name=ThirdSectorOrganisations" })
  thirdSectorOrganisations: boolean;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails
/** 
 * Feature Details
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CriteriaType" })
  criteriaType?: string;

  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=FeatureDescription" })
  featureDescription?: string;

  @Metadata({ data: "json, name=FeatureName" })
  featureName?: string;

  @Metadata({ data: "json, name=FeatureSubType" })
  featureSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum;

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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature
/** 
 * Account Features
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=ExistingFeature" })
  existingFeature: boolean;

  @Metadata({ data: "json, name=FeatureDetails", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails })
  featureDetails?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails[];

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=ProductState" })
  productState?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
/** 
 * Fee Sub Details
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @Metadata({ data: "json, name=FeeFrequency" })
  feeFrequency: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;

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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail
/** 
 * Fee Detail
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=FeeSubDetails" })
  feeSubDetails: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;

  @Metadata({ data: "json, name=FeeType" })
  feeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=Other" })
  other?: string;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails
/** 
 * Fee Details
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeDetail" })
  feeDetail: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail;

  @Metadata({ data: "json, name=FeeSubType" })
  feeSubType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees
/** 
 * Fees
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=FeeDetails", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails })
  feeDetails: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails[];

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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges
/** 
 * Fees And Charges
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=Fees" })
  fees: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees;

  @Metadata({ data: "json, name=ProductState" })
  productState: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum {
    AndroidPay = "AndroidPay"
,    ApplePay = "ApplePay"
,    IssuerMobileApp = "IssuerMobileApp"
,    MobileBankingApp = "MobileBankingApp"
,    Other = "Other"
,    PayM = "PayM"
,    SamsungPay = "SamsungPay"
,    VodafoneWallet = "VodafoneWallet"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK"
,    Eu = "EU"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
/** 
 * Brand
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrademarkID" })
  trademarkId: string;

  @Metadata({ data: "json, name=TrademarkIPOCode" })
  trademarkIpoCode: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName
/** 
 * Organisation Name
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
  @Metadata({ data: "json, name=LegalName" })
  legalName: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation
/** 
 * Parent organisation
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=BIC" })
  bic?: string;

  @Metadata({ data: "json, name=LEI" })
  lei?: string;

  @Metadata({ data: "json, name=OrganisationName" })
  organisationName: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
/** 
 * Organisation
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Brand" })
  brand: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;

  @Metadata({ data: "json, name=ParentOrganisation" })
  parentOrganisation: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum {
    No = "No"
,    Yes = "Yes"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross"
,    Net = "Net"
,    Other = "Other"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @Metadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType;

  @Metadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @Metadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType;

  @Metadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum;

  @Metadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum {
    Unarranged = "Unarranged"
,    Arranged = "Arranged"
,    Other = "Other"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross"
,    Net = "Net"
,    Other = "Other"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @Metadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType;

  @Metadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @Metadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType;

  @Metadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum;

  @Metadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType
/** 
 * Other Code Type
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross"
,    Net = "Net"
,    Other = "Other"
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum {
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


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges
/** 
 * Overdraft Fees Charges
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeChargeAmount" })
  feeChargeAmount?: string;

  @Metadata({ data: "json, name=FeeChargeApplicationFrequency" })
  feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeCalculationFrequency" })
  feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeChargeOtherApplicationFrequency" })
  feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherCalculationFrequency" })
  feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency;

  @Metadata({ data: "json, name=FeeChargeOtherType" })
  feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType;

  @Metadata({ data: "json, name=FeeChargeRate" })
  feeChargeRate?: string;

  @Metadata({ data: "json, name=FeeChargeRateOtherType" })
  feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType;

  @Metadata({ data: "json, name=FeeChargeRateType" })
  feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum;

  @Metadata({ data: "json, name=FeeChargeType" })
  feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand
/** 
 * Tiers
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
  @Metadata({ data: "json, name=EAR" })
  ear?: string;

  @Metadata({ data: "json, name=FeesAndCharges", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges })
  feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[];

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=TierBandIdentification" })
  tierBandIdentification?: string;

  @Metadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum: string;

  @Metadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum: string;
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet
/** 
 * Tier Bandset
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArrangementOtherType" })
  arrangementOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType;

  @Metadata({ data: "json, name=ArrangementType" })
  arrangementType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum;

  @Metadata({ data: "json, name=BufferAmount" })
  bufferAmount?: string;

  @Metadata({ data: "json, name=CMADefinedIndicator" })
  cmaDefinedIndicator: boolean;

  @Metadata({ data: "json, name=EAR" })
  ear?: string;

  @Metadata({ data: "json, name=FeesAndCharges", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges })
  feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges[];

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=OverdraftTierBand", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand })
  overdraftTierBand?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand[];

  @Metadata({ data: "json, name=TierBandSetIdentification" })
  tierBandSetIdentification?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum {
    Committed = "Committed"
,    OnDemand = "OnDemand"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft
/** 
 * Overdraft
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=FeeChargeNegotiableIndicator" })
  feeChargeNegotiableIndicator?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum;

  @Metadata({ data: "json, name=FeesAndCharges", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges })
  feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges[];

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=MaximumMonthlyOverdraftCharge" })
  maximumMonthlyOverdraftCharge?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=OverdraftProductState" })
  overdraftProductState?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum;

  @Metadata({ data: "json, name=OverdraftTierBandSet", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet })
  overdraftTierBandSet?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet[];

  @Metadata({ data: "json, name=OverdraftType" })
  overdraftType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=Term" })
  term?: string;
}

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
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

export enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum {
    Pca = "PCA"
}


// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData
/** 
 * Personal Current Account
**/
export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessChannels" })
  accessChannels: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum[];

  @Metadata({ data: "json, name=Benefits" })
  benefits: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;

  @Metadata({ data: "json, name=CAPricing", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing })
  caPricing: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing[];

  @Metadata({ data: "json, name=CardNotes" })
  cardNotes?: string;

  @Metadata({ data: "json, name=CardType" })
  cardType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum[];

  @Metadata({ data: "json, name=CardWithdrawalLimit" })
  cardWithdrawalLimit: string;

  @Metadata({ data: "json, name=ChequeBookAvailable" })
  chequeBookAvailable: boolean;

  @Metadata({ data: "json, name=Contactless" })
  contactless: boolean;

  @Metadata({ data: "json, name=CreditInterest" })
  creditInterest: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest;

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningForGettingAnAccount" })
  creditScoringPartOfAccountOpeningForGettingAnAccount: boolean;

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningForIDVerification" })
  creditScoringPartOfAccountOpeningForIdVerification?: boolean;

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore" })
  creditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScore?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum[];

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationText" })
  creditScoringPartOfAccountOpeningIdVerificationText?: string[];

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore" })
  creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[];

  @Metadata({ data: "json, name=CreditScoringPartOfAccountOpeningText" })
  creditScoringPartOfAccountOpeningText?: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string[];

  @Metadata({ data: "json, name=Eligibility" })
  eligibility: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;

  @Metadata({ data: "json, name=Feature", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature })
  feature?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature[];

  @Metadata({ data: "json, name=FeesAndCharges", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges })
  feesAndCharges: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[];

  @Metadata({ data: "json, name=InternationalPaymentsSupported" })
  internationalPaymentsSupported: boolean;

  @Metadata({ data: "json, name=MaximumMonthlyCharge" })
  maximumMonthlyCharge?: string;

  @Metadata({ data: "json, name=MobileWallet" })
  mobileWallet?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum[];

  @Metadata({ data: "json, name=Organisation" })
  organisation: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;

  @Metadata({ data: "json, name=Overdraft", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft })
  overdraft?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft[];

  @Metadata({ data: "json, name=OverdraftOffered" })
  overdraftOffered: boolean;

  @Metadata({ data: "json, name=ProductDescription" })
  productDescription: string;

  @Metadata({ data: "json, name=ProductIdentifier" })
  productIdentifier: string;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=ProductSegment" })
  productSegment: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];

  @Metadata({ data: "json, name=ProductType" })
  productType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum;

  @Metadata({ data: "json, name=ProductURL" })
  productUrl: string[];

  @Metadata({ data: "json, name=TsandCs" })
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
  @Metadata({ data: "json, name=Agreement" })
  agreement: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated: Date;

  @Metadata({ data: "json, name=License" })
  license: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;

  @Metadata({ data: "json, name=TermsOfUse" })
  termsOfUse: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;

  @Metadata({ data: "json, name=TotalResults" })
  totalResults: number;
}


export class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData })
  data: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];

  @Metadata({ data: "json, name=meta" })
  meta: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}


export class GetPersonalCurrentAccountsResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredErrorObject?: GetPersonalCurrentAccounts400ErrorObject;

  @Metadata()
  fourHundredAndEightErrorObject?: GetPersonalCurrentAccounts408ErrorObject;

  @Metadata()
  fourHundredAndTwentyNineErrorObject?: GetPersonalCurrentAccounts429ErrorObject;

  @Metadata()
  fiveHundredErrorObject?: GetPersonalCurrentAccounts500ErrorObject;

  @Metadata()
  fiveHundredAndThreeErrorObject?: GetPersonalCurrentAccounts503ErrorObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorObject?: GetPersonalCurrentAccountsErrorObject;

  @Metadata()
  getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
