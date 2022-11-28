import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPersonalCurrentAccountsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare enum GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetPersonalCurrentAccounts400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetPersonalCurrentAccounts400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
export declare class GetPersonalCurrentAccounts400ErrorObject extends SpeakeasyBase {
    description: GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum;
    status: GetPersonalCurrentAccounts400ErrorObjectStatusEnum;
    title: GetPersonalCurrentAccounts400ErrorObjectTitleEnum;
}
export declare enum GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetPersonalCurrentAccounts408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetPersonalCurrentAccounts408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
export declare class GetPersonalCurrentAccounts408ErrorObject extends SpeakeasyBase {
    description: GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum;
    status: GetPersonalCurrentAccounts408ErrorObjectStatusEnum;
    title: GetPersonalCurrentAccounts408ErrorObjectTitleEnum;
}
export declare enum GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetPersonalCurrentAccounts429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetPersonalCurrentAccounts429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
export declare class GetPersonalCurrentAccounts429ErrorObject extends SpeakeasyBase {
    description: GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum;
    status: GetPersonalCurrentAccounts429ErrorObjectStatusEnum;
    title: GetPersonalCurrentAccounts429ErrorObjectTitleEnum;
}
export declare enum GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetPersonalCurrentAccounts500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetPersonalCurrentAccounts500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
export declare class GetPersonalCurrentAccounts500ErrorObject extends SpeakeasyBase {
    description: GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum;
    status: GetPersonalCurrentAccounts500ErrorObjectStatusEnum;
    title: GetPersonalCurrentAccounts500ErrorObjectTitleEnum;
}
export declare enum GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetPersonalCurrentAccounts503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetPersonalCurrentAccounts503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
export declare class GetPersonalCurrentAccounts503ErrorObject extends SpeakeasyBase {
    description: GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum;
    status: GetPersonalCurrentAccounts503ErrorObjectStatusEnum;
    title: GetPersonalCurrentAccounts503ErrorObjectTitleEnum;
}
export declare class GetPersonalCurrentAccountsErrorObject extends SpeakeasyBase {
    description: string;
    status: string;
    title: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
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
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
    benefitDescription?: string;
    benefitId?: string;
    benefitName?: string;
    benefitType?: string;
    benefitValue?: string;
    counter?: number;
    criteriaType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];
    defaultToAccounts?: boolean;
    maximumCriteria?: string;
    minimumCriteria?: string;
    promotionEndDate?: string;
    promotionStartDate?: string;
}
/**
 * Benefit Item
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
    benefitDetail?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];
    dateOfChange?: string;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Benefit Interest Group
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
    benefitItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;
    benefitSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}
/**
 * Benefit
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
    benefit: boolean;
    benefitGroup?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}
/**
 * Card Pricing
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem extends SpeakeasyBase {
    dateOfChange?: string;
    exchangeRateAdjustment?: string;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Card Price
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing extends SpeakeasyBase {
    caPricingItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem;
    productState: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum {
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum {
    Fixed = "Fixed",
    Variable = "Variable"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum {
    Apr = "APR",
    Aer = "AER",
    Gross = "Gross",
    Net = "Net",
    RepApr = "RepApr"
}
/**
 * Credit Interest Tiers
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers extends SpeakeasyBase {
    apraerRate?: string;
    dailyChargeForMaximum?: string;
    dailyChargeForMinimum?: string;
    interestTier?: string;
    rate?: string;
    rateComparisonType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum;
    tierValueMaximum?: string;
    tierValueMinimum?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum {
    Compound = "Compound",
    PayAway = "PayAway",
    SelfCredit = "SelfCredit",
    SimpleInterest = "SimpleInterest"
}
/**
 * Credit Interest item
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem extends SpeakeasyBase {
    calculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum;
    calculationMethod?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum;
    dateOfChange?: string;
    endDate?: string;
    fixedInterestLength?: number;
    interestNotes?: string;
    interestRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum;
    interestTiers?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers[];
    lengthPromotionalInDays?: number;
    paymentMethod?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum;
    startDate?: string;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Credit Interest Group
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup extends SpeakeasyBase {
    creditInterestItem: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem;
    interestTierSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum;
}
/**
 * Credit Interest
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest extends SpeakeasyBase {
    creditCharged: boolean;
    creditInterestGroup?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup[];
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}
/**
 * Eligibility
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
    ageRestricted: boolean;
    annualBusinessTurnover?: string;
    annualBusinessTurnoverCurrency?: string;
    description: string;
    eligibilityName?: string;
    eligibilityNotes?: string;
    eligibilityType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;
    incomeCondition?: string;
    incomeTurnoverRelated: boolean;
    marketingEligibility?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];
    maxNumberOfAccounts?: string;
    maximumAge?: number;
    maximumAgeToOpen?: number;
    maximumOpeningAmount?: boolean;
    minIncomeTurnoverPaidIntoAccount?: number;
    minimumAge?: number;
    minimumDeposit?: boolean;
    minimumIncomeFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;
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
    residencyRestrictedRegion?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;
    singleJointIncome?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;
    thirdSectorOrganisations: boolean;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Feature Details
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails extends SpeakeasyBase {
    criteriaType?: string;
    dateOfChange?: string;
    featureDescription?: string;
    featureName?: string;
    featureSubType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum;
    featureType?: string;
    featureValue?: string;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Account Features
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature extends SpeakeasyBase {
    dateOfChange?: string;
    existingFeature: boolean;
    featureDetails?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails[];
    lengthPromotionalInDays?: number;
    productState?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
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
/**
 * Fee Sub Details
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
    feeAmount?: string;
    feeFrequency: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;
    feeHigherTier?: number;
    feeLowerTier?: number;
    feeMax?: string;
    feeMin?: string;
    feeRate?: string;
    feesAndChargesNotes?: string;
    negotiable: boolean;
    representativeRate?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
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
/**
 * Fee Detail
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
    dateOfChange?: string;
    feeSubDetails: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;
    feeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;
    lengthPromotionalInDays?: number;
    other?: string;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fee Details
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
    feeDetail: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail;
    feeSubType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}
/**
 * Fees
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees extends SpeakeasyBase {
    dateOfChange?: string;
    feeDetails: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails[];
    feeHigherTier?: number;
    feeLowerTier?: number;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fees And Charges
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges extends SpeakeasyBase {
    fees: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees;
    productState: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum {
    AndroidPay = "AndroidPay",
    ApplePay = "ApplePay",
    IssuerMobileApp = "IssuerMobileApp",
    MobileBankingApp = "MobileBankingApp",
    Other = "Other",
    PayM = "PayM",
    SamsungPay = "SamsungPay",
    VodafoneWallet = "VodafoneWallet"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
    trademarkId: string;
    trademarkIpoCode: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
}
/**
 * Organisation Name
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    legalName: string;
}
/**
 * Parent organisation
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
    bic?: string;
    lei?: string;
    organisationName: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
    brand: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;
    parentOrganisation: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum {
    No = "No",
    Yes = "Yes"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum {
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
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum {
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
/**
 * Overdraft Fees Charges
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges extends SpeakeasyBase {
    feeChargeAmount?: string;
    feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum;
    feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum;
    feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency;
    feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency;
    feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType;
    feeChargeRate?: string;
    feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType;
    feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum;
    feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum {
    Unarranged = "Unarranged",
    Arranged = "Arranged",
    Other = "Other"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum {
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
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum {
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
/**
 * Overdraft Fees Charges
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges extends SpeakeasyBase {
    feeChargeAmount?: string;
    feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum;
    feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum;
    feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency;
    feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency;
    feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType;
    feeChargeRate?: string;
    feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType;
    feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum;
    feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum {
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
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum {
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
/**
 * Overdraft Fees Charges
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges extends SpeakeasyBase {
    feeChargeAmount?: string;
    feeChargeApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum;
    feeChargeCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum;
    feeChargeOtherApplicationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency;
    feeChargeOtherCalculationFrequency?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency;
    feeChargeOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType;
    feeChargeRate?: string;
    feeChargeRateOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType;
    feeChargeRateType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum;
    feeChargeType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum;
}
/**
 * Tiers
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
    ear?: string;
    feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[];
    notes?: string;
    tierBandIdentification?: string;
    tierValueMaximum: string;
    tierValueMinimum: string;
}
/**
 * Tier Bandset
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet extends SpeakeasyBase {
    arrangementOtherType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType;
    arrangementType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum;
    bufferAmount?: string;
    cmaDefinedIndicator: boolean;
    ear?: string;
    feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges[];
    notes?: string;
    overdraftTierBand?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand[];
    tierBandSetIdentification?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum {
    Committed = "Committed",
    OnDemand = "OnDemand"
}
/**
 * Overdraft
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft extends SpeakeasyBase {
    dateOfChange?: string;
    feeChargeNegotiableIndicator?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum;
    feesAndCharges?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges[];
    lengthPromotionalInDays?: number;
    maximumMonthlyOverdraftCharge?: string;
    notes?: string;
    overdraftProductState?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum;
    overdraftTierBandSet?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet[];
    overdraftType?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
    term?: string;
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
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
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum {
    Pca = "PCA"
}
/**
 * Personal Current Account
**/
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
    accessChannels: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum[];
    benefits: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;
    caPricing: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing[];
    cardNotes?: string;
    cardType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum[];
    cardWithdrawalLimit: string;
    chequeBookAvailable: boolean;
    contactless: boolean;
    creditInterest: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest;
    creditScoringPartOfAccountOpeningForGettingAnAccount: boolean;
    creditScoringPartOfAccountOpeningForIdVerification?: boolean;
    creditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScore?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum[];
    creditScoringPartOfAccountOpeningIdVerificationText?: string[];
    creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[];
    creditScoringPartOfAccountOpeningText?: string;
    currency: string[];
    eligibility: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;
    feature?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature[];
    feesAndCharges: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[];
    internationalPaymentsSupported: boolean;
    maximumMonthlyCharge?: string;
    mobileWallet?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum[];
    organisation: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;
    overdraft?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft[];
    overdraftOffered: boolean;
    productDescription: string;
    productIdentifier: string;
    productName?: string;
    productSegment: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];
    productType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum;
    productUrl: string[];
    tsandCs: string[];
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
export declare enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    license: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    termsOfUse: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
export declare class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];
    meta: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetPersonalCurrentAccountsRequest extends SpeakeasyBase {
    headers: GetPersonalCurrentAccountsHeaders;
}
export declare class GetPersonalCurrentAccountsResponse extends SpeakeasyBase {
    fourHundredErrorObject?: GetPersonalCurrentAccounts400ErrorObject;
    fourHundredAndEightErrorObject?: GetPersonalCurrentAccounts408ErrorObject;
    fourHundredAndTwentyNineErrorObject?: GetPersonalCurrentAccounts429ErrorObject;
    fiveHundredErrorObject?: GetPersonalCurrentAccounts500ErrorObject;
    fiveHundredAndThreeErrorObject?: GetPersonalCurrentAccounts503ErrorObject;
    contentType: string;
    errorObject?: GetPersonalCurrentAccountsErrorObject;
    getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson;
    headers: Map<string, string[]>;
    statusCode: number;
}
