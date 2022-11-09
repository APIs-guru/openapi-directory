import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCommercialCreditCardsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetCommercialCreditCardsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetCommercialCreditCardsHeaders;
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
  @Metadata({ data: "json, name=description" })
  description: GetCommercialCreditCards400ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetCommercialCreditCards400ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetCommercialCreditCards408ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetCommercialCreditCards408ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetCommercialCreditCards429ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetCommercialCreditCards429ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetCommercialCreditCards500ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetCommercialCreditCards500ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetCommercialCreditCards503ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetCommercialCreditCards503ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
  title: GetCommercialCreditCards503ErrorObjectTitleEnum;
}


export class GetCommercialCreditCardsErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
    CashDeposit = "CashDeposit"
,    Deposit = "Deposit"
,    DirectDebit = "DirectDebit"
,    InitialDeposit = "InitialDeposit"
,    InternetLogon = "InternetLogon"
,    MobileLogon = "MobileLogon"
,    RegularDeposit = "RegularDeposit"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail
/** 
 * Benefit detail
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
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
  criteriaType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];

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


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem
/** 
 * Benefit Item
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=BenefitDetail", elemType: operations.GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail })
  benefitDetail?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];

  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup
/** 
 * Benefit Interest Group
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=BenefitItem" })
  benefitItem: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;

  @Metadata({ data: "json, name=BenefitSubType" })
  benefitSubType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits
/** 
 * Benefit
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
  @Metadata({ data: "json, name=Benefit" })
  benefit: boolean;

  @Metadata({ data: "json, name=BenefitGroup", elemType: operations.GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup })
  benefitGroup?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms"
,    Promotional = "Promotional"
,    Regular = "Regular"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum {
    Annual = "Annual"
,    Monthly = "Monthly"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum {
    Cashcard = "Cashcard"
,    CreditMastercard = "CreditMastercard"
,    CreditVisa = "CreditVisa"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum {
    Daily = "Daily"
,    Flexible = "Flexible"
,    Fortnightly = "Fortnightly"
,    HalfYearly = "HalfYearly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem
/** 
 * Commercial Credit Card Item 
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=APRRate" })
  aprRate: string;

  @Metadata({ data: "json, name=AbilityToSetIndividualLimits" })
  abilityToSetIndividualLimits?: boolean;

  @Metadata({ data: "json, name=AccessToOnlineDataReportingTool" })
  accessToOnlineDataReportingTool: boolean;

  @Metadata({ data: "json, name=AllocationofRepayment" })
  allocationofRepayment?: string;

  @Metadata({ data: "json, name=AnnualAccountFeeType" })
  annualAccountFeeType?: string;

  @Metadata({ data: "json, name=AnnualFeeAmount" })
  annualFeeAmount: string;

  @Metadata({ data: "json, name=BalanceTransferInterestRatePeriod" })
  balanceTransferInterestRatePeriod?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum;

  @Metadata({ data: "json, name=BalanceTransferRate" })
  balanceTransferRate?: string;

  @Metadata({ data: "json, name=CardScheme" })
  cardScheme: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum;

  @Metadata({ data: "json, name=CashAdvanceRate" })
  cashAdvanceRate: string;

  @Metadata({ data: "json, name=CashWithdrawalsAllowed" })
  cashWithdrawalsAllowed: boolean;

  @Metadata({ data: "json, name=CashbackPercent" })
  cashbackPercent?: string;

  @Metadata({ data: "json, name=ChequeFeePercent" })
  chequeFeePercent?: string;

  @Metadata({ data: "json, name=ConvenienceCheque" })
  convenienceCheque: boolean;

  @Metadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @Metadata({ data: "json, name=DaysInterestFreeCreditIfPaymentFull" })
  daysInterestFreeCreditIfPaymentFull: number;

  @Metadata({ data: "json, name=ExchangeRateAdjustment" })
  exchangeRateAdjustment: string;

  @Metadata({ data: "json, name=FeesOnCheque" })
  feesOnCheque?: string;

  @Metadata({ data: "json, name=ForeignCashFee" })
  foreignCashFee?: string;

  @Metadata({ data: "json, name=ForeignCashFeeRate" })
  foreignCashFeeRate?: string;

  @Metadata({ data: "json, name=ForeignPurchaseFee" })
  foreignPurchaseFee?: string;

  @Metadata({ data: "json, name=ForeignPurchaseFeeRate" })
  foreignPurchaseFeeRate?: string;

  @Metadata({ data: "json, name=IssuingEmergencyCardsFees" })
  issuingEmergencyCardsFees: string;

  @Metadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @Metadata({ data: "json, name=MaximumNumberOfCardsPermitted" })
  maximumNumberOfCardsPermitted?: number;

  @Metadata({ data: "json, name=MinimumCreditLimit" })
  minimumCreditLimit: string;

  @Metadata({ data: "json, name=MinimumLendingAmount" })
  minimumLendingAmount?: string;

  @Metadata({ data: "json, name=MinimumRepaymentAmount" })
  minimumRepaymentAmount?: string;

  @Metadata({ data: "json, name=MinimumRepaymentPercentage" })
  minimumRepaymentPercentage?: string;

  @Metadata({ data: "json, name=NonSterlingCashFee" })
  nonSterlingCashFee?: string;

  @Metadata({ data: "json, name=NonSterlingCashFeeRate" })
  nonSterlingCashFeeRate?: string;

  @Metadata({ data: "json, name=NonSterlingPurchaseFee" })
  nonSterlingPurchaseFee?: string;

  @Metadata({ data: "json, name=NonSterlingPurchaseFeeRate" })
  nonSterlingPurchaseFeeRate?: string;

  @Metadata({ data: "json, name=NonSterlingTransactionFee" })
  nonSterlingTransactionFee?: string;

  @Metadata({ data: "json, name=NonSterlingTransactionFeeRate" })
  nonSterlingTransactionFeeRate?: string;

  @Metadata({ data: "json, name=OverLimitFee" })
  overLimitFee?: string;

  @Metadata({ data: "json, name=PaymentDaysAfterStatement" })
  paymentDaysAfterStatement: number;

  @Metadata({ data: "json, name=PaymentSchemeExchangeFee" })
  paymentSchemeExchangeFee?: string;

  @Metadata({ data: "json, name=PaymentSchemeExchangeFeeRate" })
  paymentSchemeExchangeFeeRate?: string;

  @Metadata({ data: "json, name=PaymentSchemeExchangeRate" })
  paymentSchemeExchangeRate?: string;

  @Metadata({ data: "json, name=PurchaseRate" })
  purchaseRate: string;

  @Metadata({ data: "json, name=RepaymentFrequency" })
  repaymentFrequency: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum;

  @Metadata({ data: "json, name=RepaymentNotes" })
  repaymentNotes?: string;

  @Metadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @Metadata({ data: "json, name=StatementAtAccountLevel" })
  statementAtAccountLevel: boolean;

  @Metadata({ data: "json, name=StatementAtPersonalLevel" })
  statementAtPersonalLevel: boolean;

  @Metadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails
/** 
 * Commercial Credit Card Group 
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CCSubType" })
  ccSubType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum;

  @Metadata({ data: "json, name=CommercialCreditCardItem" })
  commercialCreditCardItem: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem;
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers"
,    NewCustomersOnly = "NewCustomersOnly"
,    SwitchersOnly = "SwitchersOnly"
,    StartUp = "StartUp"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm"
,    HalfYearly = "HalfYearly"
,    Monthly = "Monthly"
,    Quarterly = "Quarterly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint"
,    SoleIncome = "SoleIncome"
,    SoleOrJoint = "SoleOrJoint"
,    Turnover = "Turnover"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility
/** 
 * Eligibility
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
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
  eligibilityType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;

  @Metadata({ data: "json, name=IncomeCondition" })
  incomeCondition?: string;

  @Metadata({ data: "json, name=IncomeTurnoverRelated" })
  incomeTurnoverRelated: boolean;

  @Metadata({ data: "json, name=MarketingEligibility" })
  marketingEligibility?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];

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
  minimumIncomeFrequency?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;

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
  residencyRestrictedRegion?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;

  @Metadata({ data: "json, name=SingleJointIncome" })
  singleJointIncome?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;

  @Metadata({ data: "json, name=ThirdSectorOrganisations" })
  thirdSectorOrganisations: boolean;
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK"
,    Eu = "EU"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
/** 
 * Brand
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrademarkID" })
  trademarkId: string;

  @Metadata({ data: "json, name=TrademarkIPOCode" })
  trademarkIpoCode: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName
/** 
 * Organisation Name
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
  @Metadata({ data: "json, name=LegalName" })
  legalName: string;
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation
/** 
 * Parent organisation
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=BIC" })
  bic?: string;

  @Metadata({ data: "json, name=LEI" })
  lei?: string;

  @Metadata({ data: "json, name=OrganisationName" })
  organisationName: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
/** 
 * Organisation
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Brand" })
  brand: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;

  @Metadata({ data: "json, name=ParentOrganisation" })
  parentOrganisation: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
    Cashback = "Cashback"
,    Corporate = "Corporate"
,    General = "General"
,    Reward = "Reward"
,    Sme = "SME"
}

export enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum {
    CommercialCreditCards = "CommercialCreditCards"
}


// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData
/** 
 * Commercial Credit Card
**/
export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Benefits" })
  benefits: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Details" })
  details: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails;

  @Metadata({ data: "json, name=Eligibility" })
  eligibility: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;

  @Metadata({ data: "json, name=KeyFeatures" })
  keyFeatures: string;

  @Metadata({ data: "json, name=Organisation" })
  organisation: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;

  @Metadata({ data: "json, name=OtherKeyFeatures" })
  otherKeyFeatures?: string;

  @Metadata({ data: "json, name=PaymentHoliday" })
  paymentHoliday: boolean;

  @Metadata({ data: "json, name=PaymentHolidayDescription" })
  paymentHolidayDescription?: string;

  @Metadata({ data: "json, name=ProductIdentifier" })
  productIdentifier: string;

  @Metadata({ data: "json, name=ProductName" })
  productName: string;

  @Metadata({ data: "json, name=ProductSegment" })
  productSegment?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];

  @Metadata({ data: "json, name=ProductType" })
  productType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum;

  @Metadata({ data: "json, name=ProductURL" })
  productUrl: string[];

  @Metadata({ data: "json, name=TsandCs" })
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
  @Metadata({ data: "json, name=Agreement" })
  agreement: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated: Date;

  @Metadata({ data: "json, name=License" })
  license: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;

  @Metadata({ data: "json, name=TermsOfUse" })
  termsOfUse: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;

  @Metadata({ data: "json, name=TotalResults" })
  totalResults: number;
}


export class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData })
  data: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];

  @Metadata({ data: "json, name=meta" })
  meta: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}


export class GetCommercialCreditCardsResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredErrorObject?: GetCommercialCreditCards400ErrorObject;

  @Metadata()
  fourHundredAndEightErrorObject?: GetCommercialCreditCards408ErrorObject;

  @Metadata()
  fourHundredAndTwentyNineErrorObject?: GetCommercialCreditCards429ErrorObject;

  @Metadata()
  fiveHundredErrorObject?: GetCommercialCreditCards500ErrorObject;

  @Metadata()
  fiveHundredAndThreeErrorObject?: GetCommercialCreditCards503ErrorObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorObject?: GetCommercialCreditCardsErrorObject;

  @Metadata()
  getCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
