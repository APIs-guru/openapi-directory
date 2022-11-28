import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCommercialCreditCardsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare enum GetCommercialCreditCards400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetCommercialCreditCards400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetCommercialCreditCards400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
export declare class GetCommercialCreditCards400ErrorObject extends SpeakeasyBase {
    description: GetCommercialCreditCards400ErrorObjectDescriptionEnum;
    status: GetCommercialCreditCards400ErrorObjectStatusEnum;
    title: GetCommercialCreditCards400ErrorObjectTitleEnum;
}
export declare enum GetCommercialCreditCards408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetCommercialCreditCards408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetCommercialCreditCards408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
export declare class GetCommercialCreditCards408ErrorObject extends SpeakeasyBase {
    description: GetCommercialCreditCards408ErrorObjectDescriptionEnum;
    status: GetCommercialCreditCards408ErrorObjectStatusEnum;
    title: GetCommercialCreditCards408ErrorObjectTitleEnum;
}
export declare enum GetCommercialCreditCards429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetCommercialCreditCards429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetCommercialCreditCards429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
export declare class GetCommercialCreditCards429ErrorObject extends SpeakeasyBase {
    description: GetCommercialCreditCards429ErrorObjectDescriptionEnum;
    status: GetCommercialCreditCards429ErrorObjectStatusEnum;
    title: GetCommercialCreditCards429ErrorObjectTitleEnum;
}
export declare enum GetCommercialCreditCards500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetCommercialCreditCards500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetCommercialCreditCards500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
export declare class GetCommercialCreditCards500ErrorObject extends SpeakeasyBase {
    description: GetCommercialCreditCards500ErrorObjectDescriptionEnum;
    status: GetCommercialCreditCards500ErrorObjectStatusEnum;
    title: GetCommercialCreditCards500ErrorObjectTitleEnum;
}
export declare enum GetCommercialCreditCards503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetCommercialCreditCards503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetCommercialCreditCards503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
export declare class GetCommercialCreditCards503ErrorObject extends SpeakeasyBase {
    description: GetCommercialCreditCards503ErrorObjectDescriptionEnum;
    status: GetCommercialCreditCards503ErrorObjectStatusEnum;
    title: GetCommercialCreditCards503ErrorObjectTitleEnum;
}
export declare class GetCommercialCreditCardsErrorObject extends SpeakeasyBase {
    description: string;
    status: string;
    title: string;
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
    CashDeposit = "CashDeposit",
    Deposit = "Deposit",
    DirectDebit = "DirectDebit",
    InitialDeposit = "InitialDeposit",
    InternetLogon = "InternetLogon",
    MobileLogon = "MobileLogon",
    RegularDeposit = "RegularDeposit"
}
/**
 * Benefit detail
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
    benefitDescription?: string;
    benefitId?: string;
    benefitName?: string;
    benefitType?: string;
    benefitValue?: string;
    counter?: number;
    criteriaType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];
    defaultToAccounts?: boolean;
    maximumCriteria?: string;
    minimumCriteria?: string;
    promotionEndDate?: string;
    promotionStartDate?: string;
}
/**
 * Benefit Item
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
    benefitDetail?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];
    dateOfChange?: string;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Benefit Interest Group
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
    benefitItem: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;
    benefitSubType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}
/**
 * Benefit
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
    benefit: boolean;
    benefitGroup?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum {
    Annual = "Annual",
    Monthly = "Monthly"
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum {
    Cashcard = "Cashcard",
    CreditMastercard = "CreditMastercard",
    CreditVisa = "CreditVisa"
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum {
    Daily = "Daily",
    Flexible = "Flexible",
    Fortnightly = "Fortnightly",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
/**
 * Commercial Credit Card Item
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem extends SpeakeasyBase {
    aprRate: string;
    abilityToSetIndividualLimits?: boolean;
    accessToOnlineDataReportingTool: boolean;
    allocationofRepayment?: string;
    annualAccountFeeType?: string;
    annualFeeAmount: string;
    balanceTransferInterestRatePeriod?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum;
    balanceTransferRate?: string;
    cardScheme: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum;
    cashAdvanceRate: string;
    cashWithdrawalsAllowed: boolean;
    cashbackPercent?: string;
    chequeFeePercent?: string;
    convenienceCheque: boolean;
    dateOfChange?: string;
    daysInterestFreeCreditIfPaymentFull: number;
    exchangeRateAdjustment: string;
    feesOnCheque?: string;
    foreignCashFee?: string;
    foreignCashFeeRate?: string;
    foreignPurchaseFee?: string;
    foreignPurchaseFeeRate?: string;
    issuingEmergencyCardsFees: string;
    lengthPromotionalInDays?: number;
    maximumNumberOfCardsPermitted?: number;
    minimumCreditLimit: string;
    minimumLendingAmount?: string;
    minimumRepaymentAmount?: string;
    minimumRepaymentPercentage?: string;
    nonSterlingCashFee?: string;
    nonSterlingCashFeeRate?: string;
    nonSterlingPurchaseFee?: string;
    nonSterlingPurchaseFeeRate?: string;
    nonSterlingTransactionFee?: string;
    nonSterlingTransactionFeeRate?: string;
    overLimitFee?: string;
    paymentDaysAfterStatement: number;
    paymentSchemeExchangeFee?: string;
    paymentSchemeExchangeFeeRate?: string;
    paymentSchemeExchangeRate?: string;
    purchaseRate: string;
    repaymentFrequency: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum;
    repaymentNotes?: string;
    startPromotionOrFutureTerms?: string;
    statementAtAccountLevel: boolean;
    statementAtPersonalLevel: boolean;
    stopPromotionOrFutureTerms?: string;
}
/**
 * Commercial Credit Card Group
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails extends SpeakeasyBase {
    ccSubType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum;
    commercialCreditCardItem: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem;
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}
/**
 * Eligibility
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
    ageRestricted: boolean;
    annualBusinessTurnover?: string;
    annualBusinessTurnoverCurrency?: string;
    description: string;
    eligibilityName?: string;
    eligibilityNotes?: string;
    eligibilityType?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;
    incomeCondition?: string;
    incomeTurnoverRelated: boolean;
    marketingEligibility?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];
    maxNumberOfAccounts?: string;
    maximumAge?: number;
    maximumAgeToOpen?: number;
    maximumOpeningAmount?: boolean;
    minIncomeTurnoverPaidIntoAccount?: number;
    minimumAge?: number;
    minimumDeposit?: boolean;
    minimumIncomeFrequency?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;
    minimumIncomeTurnoverAmount?: string;
    minimumIncomeTurnoverCurrency?: string;
    minimumOperatingBalance?: string;
    minimumOperatingBalanceCurrency?: string;
    minimumOperatingBalanceExists?: boolean;
    openingDepositMaximumAmount?: string;
    openingDepositMaximumCurrency?: string;
    openingDepositMinimum?: string;
    openingDepositMinimumCurrency?: string;
    otherFinancialHoldingRequired: boolean;
    previousBankruptcy: boolean;
    residencyRestricted: boolean;
    residencyRestrictedRegion?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;
    singleJointIncome?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;
    thirdSectorOrganisations: boolean;
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
    trademarkId: string;
    trademarkIpoCode: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
}
/**
 * Organisation Name
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    legalName: string;
}
/**
 * Parent organisation
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
    bic?: string;
    lei?: string;
    organisationName: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
    brand: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;
    parentOrganisation: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
    Cashback = "Cashback",
    Corporate = "Corporate",
    General = "General",
    Reward = "Reward",
    Sme = "SME"
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum {
    CommercialCreditCards = "CommercialCreditCards"
}
/**
 * Commercial Credit Card
**/
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
    benefits: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;
    description: string;
    details: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails;
    eligibility: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;
    keyFeatures: string;
    organisation: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;
    otherKeyFeatures?: string;
    paymentHoliday: boolean;
    paymentHolidayDescription?: string;
    productIdentifier: string;
    productName: string;
    productSegment?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];
    productType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum;
    productUrl: string[];
    tsandCs: string[];
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
export declare enum GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    license: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    termsOfUse: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
export declare class GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];
    meta: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetCommercialCreditCardsRequest extends SpeakeasyBase {
    headers: GetCommercialCreditCardsHeaders;
}
export declare class GetCommercialCreditCardsResponse extends SpeakeasyBase {
    fourHundredErrorObject?: GetCommercialCreditCards400ErrorObject;
    fourHundredAndEightErrorObject?: GetCommercialCreditCards408ErrorObject;
    fourHundredAndTwentyNineErrorObject?: GetCommercialCreditCards429ErrorObject;
    fiveHundredErrorObject?: GetCommercialCreditCards500ErrorObject;
    fiveHundredAndThreeErrorObject?: GetCommercialCreditCards503ErrorObject;
    contentType: string;
    errorObject?: GetCommercialCreditCardsErrorObject;
    getCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson;
    headers: Map<string, string[]>;
    statusCode: number;
}
