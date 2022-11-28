import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCommercialCreditCardsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}

export enum GetCommercialCreditCards400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}

export enum GetCommercialCreditCards400ErrorObjectStatusEnum {
    FourHundred = "400"
}

export enum GetCommercialCreditCards400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}


export class GetCommercialCreditCards400ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetCommercialCreditCards400ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCommercialCreditCards400ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetCommercialCreditCards400ErrorObjectTitleEnum;
}

export enum GetCommercialCreditCards408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}

export enum GetCommercialCreditCards408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}

export enum GetCommercialCreditCards408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}


export class GetCommercialCreditCards408ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetCommercialCreditCards408ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCommercialCreditCards408ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetCommercialCreditCards408ErrorObjectTitleEnum;
}

export enum GetCommercialCreditCards429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}

export enum GetCommercialCreditCards429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}

export enum GetCommercialCreditCards429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}


export class GetCommercialCreditCards429ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetCommercialCreditCards429ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCommercialCreditCards429ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetCommercialCreditCards429ErrorObjectTitleEnum;
}

export enum GetCommercialCreditCards500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}

export enum GetCommercialCreditCards500ErrorObjectStatusEnum {
    FiveHundred = "500"
}

export enum GetCommercialCreditCards500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}


export class GetCommercialCreditCards500ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetCommercialCreditCards500ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCommercialCreditCards500ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetCommercialCreditCards500ErrorObjectTitleEnum;
}

export enum GetCommercialCreditCards503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}

export enum GetCommercialCreditCards503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}

export enum GetCommercialCreditCards503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}


export class GetCommercialCreditCards503ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetCommercialCreditCards503ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetCommercialCreditCards503ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetCommercialCreditCards503ErrorObjectTitleEnum;
}


export class GetCommercialCreditCardsErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
    CashDeposit = "CashDeposit",
    Deposit = "Deposit",
    DirectDebit = "DirectDebit",
    InitialDeposit = "InitialDeposit",
    InternetLogon = "InternetLogon",
    MobileLogon = "MobileLogon",
    RegularDeposit = "RegularDeposit"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail
/** 
 * Benefit detail
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
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
  criteriaType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];

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


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem
/** 
 * Benefit Item
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BenefitDetail", elemType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail })
  benefitDetail?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];

  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup
/** 
 * Benefit Interest Group
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BenefitItem" })
  benefitItem: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;

  @SpeakeasyMetadata({ data: "json, name=BenefitSubType" })
  benefitSubType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits
/** 
 * Benefit
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Benefit" })
  benefit: boolean;

  @SpeakeasyMetadata({ data: "json, name=BenefitGroup", elemType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup })
  benefitGroup?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum {
    Annual = "Annual",
    Monthly = "Monthly"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum {
    Cashcard = "Cashcard",
    CreditMastercard = "CreditMastercard",
    CreditVisa = "CreditVisa"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum {
    Daily = "Daily",
    Flexible = "Flexible",
    Fortnightly = "Fortnightly",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem
/** 
 * Commercial Credit Card Item 
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APRRate" })
  aprRate: string;

  @SpeakeasyMetadata({ data: "json, name=AbilityToSetIndividualLimits" })
  abilityToSetIndividualLimits?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AccessToOnlineDataReportingTool" })
  accessToOnlineDataReportingTool: boolean;

  @SpeakeasyMetadata({ data: "json, name=AllocationofRepayment" })
  allocationofRepayment?: string;

  @SpeakeasyMetadata({ data: "json, name=AnnualAccountFeeType" })
  annualAccountFeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=AnnualFeeAmount" })
  annualFeeAmount: string;

  @SpeakeasyMetadata({ data: "json, name=BalanceTransferInterestRatePeriod" })
  balanceTransferInterestRatePeriod?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=BalanceTransferRate" })
  balanceTransferRate?: string;

  @SpeakeasyMetadata({ data: "json, name=CardScheme" })
  cardScheme: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum;

  @SpeakeasyMetadata({ data: "json, name=CashAdvanceRate" })
  cashAdvanceRate: string;

  @SpeakeasyMetadata({ data: "json, name=CashWithdrawalsAllowed" })
  cashWithdrawalsAllowed: boolean;

  @SpeakeasyMetadata({ data: "json, name=CashbackPercent" })
  cashbackPercent?: string;

  @SpeakeasyMetadata({ data: "json, name=ChequeFeePercent" })
  chequeFeePercent?: string;

  @SpeakeasyMetadata({ data: "json, name=ConvenienceCheque" })
  convenienceCheque: boolean;

  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=DaysInterestFreeCreditIfPaymentFull" })
  daysInterestFreeCreditIfPaymentFull: number;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRateAdjustment" })
  exchangeRateAdjustment: string;

  @SpeakeasyMetadata({ data: "json, name=FeesOnCheque" })
  feesOnCheque?: string;

  @SpeakeasyMetadata({ data: "json, name=ForeignCashFee" })
  foreignCashFee?: string;

  @SpeakeasyMetadata({ data: "json, name=ForeignCashFeeRate" })
  foreignCashFeeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=ForeignPurchaseFee" })
  foreignPurchaseFee?: string;

  @SpeakeasyMetadata({ data: "json, name=ForeignPurchaseFeeRate" })
  foreignPurchaseFeeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=IssuingEmergencyCardsFees" })
  issuingEmergencyCardsFees: string;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=MaximumNumberOfCardsPermitted" })
  maximumNumberOfCardsPermitted?: number;

  @SpeakeasyMetadata({ data: "json, name=MinimumCreditLimit" })
  minimumCreditLimit: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumLendingAmount" })
  minimumLendingAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumRepaymentAmount" })
  minimumRepaymentAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumRepaymentPercentage" })
  minimumRepaymentPercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=NonSterlingCashFee" })
  nonSterlingCashFee?: string;

  @SpeakeasyMetadata({ data: "json, name=NonSterlingCashFeeRate" })
  nonSterlingCashFeeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=NonSterlingPurchaseFee" })
  nonSterlingPurchaseFee?: string;

  @SpeakeasyMetadata({ data: "json, name=NonSterlingPurchaseFeeRate" })
  nonSterlingPurchaseFeeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=NonSterlingTransactionFee" })
  nonSterlingTransactionFee?: string;

  @SpeakeasyMetadata({ data: "json, name=NonSterlingTransactionFeeRate" })
  nonSterlingTransactionFeeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=OverLimitFee" })
  overLimitFee?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentDaysAfterStatement" })
  paymentDaysAfterStatement: number;

  @SpeakeasyMetadata({ data: "json, name=PaymentSchemeExchangeFee" })
  paymentSchemeExchangeFee?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentSchemeExchangeFeeRate" })
  paymentSchemeExchangeFeeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentSchemeExchangeRate" })
  paymentSchemeExchangeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=PurchaseRate" })
  purchaseRate: string;

  @SpeakeasyMetadata({ data: "json, name=RepaymentFrequency" })
  repaymentFrequency: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=RepaymentNotes" })
  repaymentNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StatementAtAccountLevel" })
  statementAtAccountLevel: boolean;

  @SpeakeasyMetadata({ data: "json, name=StatementAtPersonalLevel" })
  statementAtPersonalLevel: boolean;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails
/** 
 * Commercial Credit Card Group 
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CCSubType" })
  ccSubType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CommercialCreditCardItem" })
  commercialCreditCardItem: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem;
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility
/** 
 * Eligibility
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
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
  eligibilityType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncomeCondition" })
  incomeCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=IncomeTurnoverRelated" })
  incomeTurnoverRelated: boolean;

  @SpeakeasyMetadata({ data: "json, name=MarketingEligibility" })
  marketingEligibility?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];

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
  minimumIncomeFrequency?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;

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
  residencyRestrictedRegion?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=SingleJointIncome" })
  singleJointIncome?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;

  @SpeakeasyMetadata({ data: "json, name=ThirdSectorOrganisations" })
  thirdSectorOrganisations: boolean;
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
/** 
 * Brand
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrademarkID" })
  trademarkId: string;

  @SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" })
  trademarkIpoCode: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName
/** 
 * Organisation Name
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LegalName" })
  legalName: string;
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation
/** 
 * Parent organisation
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BIC" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=LEI" })
  lei?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganisationName" })
  organisationName: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
/** 
 * Organisation
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Brand" })
  brand: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;

  @SpeakeasyMetadata({ data: "json, name=ParentOrganisation" })
  parentOrganisation: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
    Cashback = "Cashback",
    Corporate = "Corporate",
    General = "General",
    Reward = "Reward",
    Sme = "SME"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum {
    CommercialCreditCards = "CommercialCreditCards"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData
/** 
 * Commercial Credit Card
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Benefits" })
  benefits: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Details" })
  details: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails;

  @SpeakeasyMetadata({ data: "json, name=Eligibility" })
  eligibility: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;

  @SpeakeasyMetadata({ data: "json, name=KeyFeatures" })
  keyFeatures: string;

  @SpeakeasyMetadata({ data: "json, name=Organisation" })
  organisation: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;

  @SpeakeasyMetadata({ data: "json, name=OtherKeyFeatures" })
  otherKeyFeatures?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentHoliday" })
  paymentHoliday: boolean;

  @SpeakeasyMetadata({ data: "json, name=PaymentHolidayDescription" })
  paymentHolidayDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductIdentifier" })
  productIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName: string;

  @SpeakeasyMetadata({ data: "json, name=ProductSegment" })
  productSegment?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];

  @SpeakeasyMetadata({ data: "json, name=ProductType" })
  productType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProductURL" })
  productUrl: string[];

  @SpeakeasyMetadata({ data: "json, name=TsandCs" })
  tsandCs: string[];
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}


export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Agreement" })
  agreement: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=License" })
  license: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=TermsOfUse" })
  termsOfUse: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;

  @SpeakeasyMetadata({ data: "json, name=TotalResults" })
  totalResults: number;
}


export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData })
  data: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}


export class GetCommercialCreditCardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetCommercialCreditCardsHeaders;
}


export class GetCommercialCreditCardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredErrorObject?: GetCommercialCreditCards400ErrorObject;

  @SpeakeasyMetadata()
  fourHundredAndEightErrorObject?: GetCommercialCreditCards408ErrorObject;

  @SpeakeasyMetadata()
  fourHundredAndTwentyNineErrorObject?: GetCommercialCreditCards429ErrorObject;

  @SpeakeasyMetadata()
  fiveHundredErrorObject?: GetCommercialCreditCards500ErrorObject;

  @SpeakeasyMetadata()
  fiveHundredAndThreeErrorObject?: GetCommercialCreditCards503ErrorObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorObject?: GetCommercialCreditCardsErrorObject;

  @SpeakeasyMetadata()
  getCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
