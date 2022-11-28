import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBusinessCurrentAccountsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare enum GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetBusinessCurrentAccounts400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetBusinessCurrentAccounts400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
export declare class GetBusinessCurrentAccounts400ErrorObject extends SpeakeasyBase {
    description: GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum;
    status: GetBusinessCurrentAccounts400ErrorObjectStatusEnum;
    title: GetBusinessCurrentAccounts400ErrorObjectTitleEnum;
}
export declare enum GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetBusinessCurrentAccounts408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetBusinessCurrentAccounts408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
export declare class GetBusinessCurrentAccounts408ErrorObject extends SpeakeasyBase {
    description: GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum;
    status: GetBusinessCurrentAccounts408ErrorObjectStatusEnum;
    title: GetBusinessCurrentAccounts408ErrorObjectTitleEnum;
}
export declare enum GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetBusinessCurrentAccounts429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetBusinessCurrentAccounts429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
export declare class GetBusinessCurrentAccounts429ErrorObject extends SpeakeasyBase {
    description: GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum;
    status: GetBusinessCurrentAccounts429ErrorObjectStatusEnum;
    title: GetBusinessCurrentAccounts429ErrorObjectTitleEnum;
}
export declare enum GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetBusinessCurrentAccounts500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetBusinessCurrentAccounts500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
export declare class GetBusinessCurrentAccounts500ErrorObject extends SpeakeasyBase {
    description: GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum;
    status: GetBusinessCurrentAccounts500ErrorObjectStatusEnum;
    title: GetBusinessCurrentAccounts500ErrorObjectTitleEnum;
}
export declare enum GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetBusinessCurrentAccounts503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetBusinessCurrentAccounts503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
export declare class GetBusinessCurrentAccounts503ErrorObject extends SpeakeasyBase {
    description: GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum;
    status: GetBusinessCurrentAccounts503ErrorObjectStatusEnum;
    title: GetBusinessCurrentAccounts503ErrorObjectTitleEnum;
}
export declare class GetBusinessCurrentAccountsErrorObject extends SpeakeasyBase {
    description: string;
    status: string;
    title: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum {
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
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
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
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
    benefitDescription?: string;
    benefitId?: string;
    benefitName?: string;
    benefitType?: string;
    benefitValue?: string;
    counter?: number;
    criteriaType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];
    defaultToAccounts?: boolean;
    maximumCriteria?: string;
    minimumCriteria?: string;
    promotionEndDate?: string;
    promotionStartDate?: string;
}
/**
 * Benefit Item
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
    benefitDetail?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail[];
    dateOfChange?: string;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Benefit Interest Group
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup extends SpeakeasyBase {
    benefitItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem;
    benefitSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum;
}
/**
 * Benefit
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits extends SpeakeasyBase {
    benefit: boolean;
    benefitGroup?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup[];
}
/**
 * Card Pricing
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem extends SpeakeasyBase {
    dateOfChange?: string;
    exchangeRateAdjustment?: string;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Card Price
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing extends SpeakeasyBase {
    caPricingItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem;
    productState: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum {
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
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum {
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    HalfYearly = "Half-Yearly",
    Yearly = "Yearly",
    Overnight = "Overnight"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum {
    Fixed = "Fixed",
    Variable = "Variable"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum {
    Apr = "APR",
    Aer = "AER",
    Gross = "Gross",
    Net = "Net",
    RepApr = "RepApr"
}
/**
 * Credit Interest Tiers
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers extends SpeakeasyBase {
    apraerRate?: string;
    dailyChargeForMaximum?: string;
    dailyChargeForMinimum?: string;
    interestTier?: string;
    rate?: string;
    rateComparisonType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum;
    tierValueMaximum?: string;
    tierValueMinimum?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum {
    Compound = "Compound",
    PayAway = "PayAway",
    SelfCredit = "SelfCredit",
    SimpleInterest = "SimpleInterest"
}
/**
 * Credit Interest item
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem extends SpeakeasyBase {
    calculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum;
    calculationMethod?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum;
    dateOfChange?: string;
    endDate?: string;
    fixedInterestLength?: number;
    interestNotes?: string;
    interestRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum;
    interestTiers?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers[];
    lengthPromotionalInDays?: number;
    paymentMethod?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum;
    startDate?: string;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Credit Interest Group
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup extends SpeakeasyBase {
    creditInterestItem: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem;
    interestTierSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum;
}
/**
 * Credit Interest
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest extends SpeakeasyBase {
    creditCharged: boolean;
    creditInterestGroup?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup[];
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum {
    Hard = "Hard",
    Soft = "Soft"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum {
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
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum {
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
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}
/**
 * Eligibility
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility extends SpeakeasyBase {
    ageRestricted: boolean;
    annualBusinessTurnover?: string;
    annualBusinessTurnoverCurrency?: string;
    description: string;
    eligibilityName?: string;
    eligibilityNotes?: string;
    eligibilityType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum;
    incomeCondition?: string;
    incomeTurnoverRelated: boolean;
    marketingEligibility?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum[];
    maxNumberOfAccounts?: string;
    maximumAge?: number;
    maximumAgeToOpen?: number;
    maximumOpeningAmount?: boolean;
    minIncomeTurnoverPaidIntoAccount?: number;
    minimumAge?: number;
    minimumDeposit?: boolean;
    minimumIncomeFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum;
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
    residencyRestrictedRegion?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum;
    singleJointIncome?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum;
    thirdSectorOrganisations: boolean;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Feature Details
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails extends SpeakeasyBase {
    criteriaType?: string;
    dateOfChange?: string;
    featureDescription?: string;
    featureName?: string;
    featureSubType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum;
    featureType?: string;
    featureValue?: string;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Account Features
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature extends SpeakeasyBase {
    dateOfChange?: string;
    existingFeature: boolean;
    featureDetails?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails[];
    lengthPromotionalInDays?: number;
    productState?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
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
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
    feeAmount?: string;
    feeFrequency: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;
    feeHigherTier?: number;
    feeLowerTier?: number;
    feeMax?: string;
    feeMin?: string;
    feeRate?: string;
    feesAndChargesNotes?: string;
    negotiable: boolean;
    representativeRate?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
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
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
    dateOfChange?: string;
    feeSubDetails: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;
    feeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;
    lengthPromotionalInDays?: number;
    other?: string;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fee Details
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
    feeDetail: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail;
    feeSubType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}
/**
 * Fees
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees extends SpeakeasyBase {
    dateOfChange?: string;
    feeDetails: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails[];
    feeHigherTier?: number;
    feeLowerTier?: number;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fees And Charges
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges extends SpeakeasyBase {
    fees: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees;
    productState: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum {
    AndroidPay = "AndroidPay",
    ApplePay = "ApplePay",
    IssuerMobileApp = "IssuerMobileApp",
    MobileBankingApp = "MobileBankingApp",
    Other = "Other",
    PayM = "PayM",
    SamsungPay = "SamsungPay",
    VodafoneWallet = "VodafoneWallet"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand extends SpeakeasyBase {
    trademarkId: string;
    trademarkIpoCode: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum;
}
/**
 * Organisation Name
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    legalName: string;
}
/**
 * Parent organisation
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation extends SpeakeasyBase {
    bic?: string;
    lei?: string;
    organisationName: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation extends SpeakeasyBase {
    brand: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand;
    parentOrganisation: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum {
    No = "No",
    Yes = "Yes"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum {
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
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum {
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
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum {
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
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges extends SpeakeasyBase {
    feeChargeAmount?: string;
    feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum;
    feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum;
    feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency;
    feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency;
    feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType;
    feeChargeRate?: string;
    feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType;
    feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum;
    feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Other Code Type
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum {
    Unarranged = "Unarranged",
    Arranged = "Arranged",
    Other = "Other"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum {
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
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum {
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
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum {
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
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges extends SpeakeasyBase {
    feeChargeAmount?: string;
    feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum;
    feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum;
    feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency;
    feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency;
    feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType;
    feeChargeRate?: string;
    feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType;
    feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum;
    feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum {
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
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum {
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
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
/**
 * Other Code Type
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType extends SpeakeasyBase {
    code?: string;
    description?: string;
    name?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum {
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum {
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
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges extends SpeakeasyBase {
    feeChargeAmount?: string;
    feeChargeApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum;
    feeChargeCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum;
    feeChargeOtherApplicationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency;
    feeChargeOtherCalculationFrequency?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency;
    feeChargeOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType;
    feeChargeRate?: string;
    feeChargeRateOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType;
    feeChargeRateType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum;
    feeChargeType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum;
}
/**
 * Tiers
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
    ear?: string;
    feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges[];
    notes?: string;
    tierBandIdentification?: string;
    tierValueMaximum: string;
    tierValueMinimum: string;
}
/**
 * Tier Bandset
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet extends SpeakeasyBase {
    arrangementOtherType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType;
    arrangementType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum;
    bufferAmount?: string;
    cmaDefinedIndicator: boolean;
    ear?: string;
    feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges[];
    notes?: string;
    overdraftTierBand?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand[];
    tierBandSetIdentification?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum {
    Committed = "Committed",
    OnDemand = "OnDemand"
}
/**
 * Overdraft
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft extends SpeakeasyBase {
    dateOfChange?: string;
    feeChargeNegotiableIndicator?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum;
    feesAndCharges?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges[];
    lengthPromotionalInDays?: number;
    maximumMonthlyOverdraftCharge?: string;
    notes?: string;
    overdraftProductState?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum;
    overdraftTierBandSet?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet[];
    overdraftType?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
    term?: string;
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum {
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
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum {
    Bca = "BCA"
}
/**
 * Business current account
**/
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount extends SpeakeasyBase {
    accessChannels: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum[];
    benefits: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits;
    caPricing: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing[];
    cardNotes?: string;
    cardType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum[];
    cardWithdrawalLimit: string;
    chequeBookAvailable: boolean;
    contactless: boolean;
    creditInterest: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest;
    creditScoringPartOfAccountOpeningForGettingAnAccount: boolean;
    creditScoringPartOfAccountOpeningForIdVerification?: boolean;
    creditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScore?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum[];
    creditScoringPartOfAccountOpeningIdVerificationText?: string[];
    creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum[];
    creditScoringPartOfAccountOpeningText?: string;
    currency: string[];
    eligibility: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility;
    feature?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature[];
    feesAndCharges: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges[];
    internationalPaymentsSupported: boolean;
    maximumMonthlyCharge?: string;
    mobileWallet?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum[];
    organisation: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation;
    overdraft?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft[];
    overdraftOffered: boolean;
    productDescription: string;
    productIdentifier: string;
    productName?: string;
    productSegment: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum[];
    productType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum;
    productUrl: string[];
    tsandCs: string[];
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
export declare enum GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    license: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    termsOfUse: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
export declare class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount[];
    meta: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetBusinessCurrentAccountsRequest extends SpeakeasyBase {
    headers: GetBusinessCurrentAccountsHeaders;
}
export declare class GetBusinessCurrentAccountsResponse extends SpeakeasyBase {
    fourHundredErrorObject?: GetBusinessCurrentAccounts400ErrorObject;
    fourHundredAndEightErrorObject?: GetBusinessCurrentAccounts408ErrorObject;
    fourHundredAndTwentyNineErrorObject?: GetBusinessCurrentAccounts429ErrorObject;
    fiveHundredErrorObject?: GetBusinessCurrentAccounts500ErrorObject;
    fiveHundredAndThreeErrorObject?: GetBusinessCurrentAccounts503ErrorObject;
    contentType: string;
    errorObject?: GetBusinessCurrentAccountsErrorObject;
    getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson;
    headers: Map<string, string[]>;
    statusCode: number;
}
