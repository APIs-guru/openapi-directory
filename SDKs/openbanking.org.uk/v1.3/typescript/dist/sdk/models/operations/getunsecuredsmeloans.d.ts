import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUnsecuredSmeLoansHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare enum GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetUnsecuredSmeLoans400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetUnsecuredSmeLoans400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
export declare class GetUnsecuredSmeLoans400ErrorObject extends SpeakeasyBase {
    description: GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum;
    status: GetUnsecuredSmeLoans400ErrorObjectStatusEnum;
    title: GetUnsecuredSmeLoans400ErrorObjectTitleEnum;
}
export declare enum GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetUnsecuredSmeLoans408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetUnsecuredSmeLoans408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
export declare class GetUnsecuredSmeLoans408ErrorObject extends SpeakeasyBase {
    description: GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum;
    status: GetUnsecuredSmeLoans408ErrorObjectStatusEnum;
    title: GetUnsecuredSmeLoans408ErrorObjectTitleEnum;
}
export declare enum GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetUnsecuredSmeLoans429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetUnsecuredSmeLoans429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
export declare class GetUnsecuredSmeLoans429ErrorObject extends SpeakeasyBase {
    description: GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum;
    status: GetUnsecuredSmeLoans429ErrorObjectStatusEnum;
    title: GetUnsecuredSmeLoans429ErrorObjectTitleEnum;
}
export declare enum GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetUnsecuredSmeLoans500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetUnsecuredSmeLoans500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
export declare class GetUnsecuredSmeLoans500ErrorObject extends SpeakeasyBase {
    description: GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum;
    status: GetUnsecuredSmeLoans500ErrorObjectStatusEnum;
    title: GetUnsecuredSmeLoans500ErrorObjectTitleEnum;
}
export declare enum GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetUnsecuredSmeLoans503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetUnsecuredSmeLoans503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
export declare class GetUnsecuredSmeLoans503ErrorObject extends SpeakeasyBase {
    description: GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum;
    status: GetUnsecuredSmeLoans503ErrorObjectStatusEnum;
    title: GetUnsecuredSmeLoans503ErrorObjectTitleEnum;
}
export declare class GetUnsecuredSmeLoansErrorObject extends SpeakeasyBase {
    description: string;
    status: string;
    title: string;
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
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
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
    benefitDescription?: string;
    benefitId?: string;
    benefitName?: string;
    benefitType?: string;
    benefitValue?: string;
    counter?: number;
    criteriaType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];
    defaultToAccounts?: boolean;
    maximumCriteria?: string;
    minimumCriteria?: string;
    promotionEndDate?: string;
    promotionStartDate?: string;
}
/**
 * Benefit Item
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
    benefitDetail?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];
    dateOfChange?: string;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Benefit Interest Group
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
    benefitItem: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;
    benefitSubType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}
/**
 * Benefit
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
    benefit: boolean;
    benefitGroup?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum {
    Branch = "Branch",
    MobileBankingApp = "MobileBankingApp",
    Online = "Online",
    Phone = "Phone",
    Post = "Post",
    PostOffice = "PostOffice",
    Text = "Text"
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}
/**
 * Eligibility
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
    ageRestricted: boolean;
    annualBusinessTurnover?: string;
    annualBusinessTurnoverCurrency?: string;
    description: string;
    eligibilityName?: string;
    eligibilityNotes?: string;
    eligibilityType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;
    incomeCondition?: string;
    incomeTurnoverRelated: boolean;
    marketingEligibility?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];
    maxNumberOfAccounts?: string;
    maximumAge?: number;
    maximumAgeToOpen?: number;
    maximumOpeningAmount?: boolean;
    minIncomeTurnoverPaidIntoAccount?: number;
    minimumAge?: number;
    minimumDeposit?: boolean;
    minimumIncomeFrequency?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;
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
    residencyRestrictedRegion?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;
    singleJointIncome?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;
    thirdSectorOrganisations: boolean;
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
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
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
    feeAmount?: string;
    feeFrequency: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;
    feeHigherTier?: number;
    feeLowerTier?: number;
    feeMax?: string;
    feeMin?: string;
    feeRate?: string;
    feesAndChargesNotes?: string;
    negotiable: boolean;
    representativeRate?: string;
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
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
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
    dateOfChange?: string;
    feeSubDetails: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;
    feeType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;
    lengthPromotionalInDays?: number;
    other?: string;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fee Details
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
    feeDetail: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail;
    feeSubType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}
/**
 * Fees
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees extends SpeakeasyBase {
    dateOfChange?: string;
    feeDetails: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails[];
    feeHigherTier?: number;
    feeLowerTier?: number;
    lengthPromotionalInDays?: number;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Fees And Charges
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges extends SpeakeasyBase {
    fees: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees;
    productState: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum;
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum {
    OneYear = "1 year",
    TwoYears = "2 years",
    ThreeYears = "3 years",
    FourYears = "4 years",
    FiveYears = "5 years"
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum {
    Apr = "APR",
    Aer = "AER",
    Gross = "Gross",
    Net = "Net",
    RepApr = "RepApr"
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum {
    Daily = "Daily",
    Flexible = "Flexible",
    Fortnightly = "Fortnightly",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum {
    Pound5000 = "\u00A35000",
    Pound10000 = "\u00A310000",
    Pound15000 = "\u00A315000",
    Pound20000 = "\u00A320000",
    Pound25000 = "\u00A325000",
    Other = "Other",
    TierMaximum = "TierMaximum",
    TierMinimum = "TierMinimum"
}
/**
 * Loan Pricing
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing extends SpeakeasyBase {
    indicativeRate: string;
    loanLengthIncrement: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum;
    loanLengthIncrementLower: number;
    loanLengthIncrementUpper: number;
    loanSizeBandLower: string;
    loanSizeBandUpper: string;
    negotiable: boolean;
    rateComparisonType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum;
    repaymentFrequency: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum[];
    sizeIncrement: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum;
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}
/**
 * Loan Item
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem extends SpeakeasyBase {
    ccaRegulatedEntity: boolean;
    dateOfChange?: string;
    isALowInterestRepaymentStartPossible: boolean;
    isThisAnInterestOnlyLoan: boolean;
    lengthPromotionalInDays?: number;
    loanPricing?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing[];
    productState: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum;
    startPromotionOrFutureTerms?: string;
    stopPromotionOrFutureTerms?: string;
    willTheLoanBePaidInTrancheDrawdowns: boolean;
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
    trademarkId: string;
    trademarkIpoCode: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
}
/**
 * Organisation Name
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    legalName: string;
}
/**
 * Parent organisation
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
    bic?: string;
    lei?: string;
    organisationName: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
    brand: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;
    parentOrganisation: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
    AgricultureSector = "AgricultureSector",
    AllSegmentsCorporate = "AllSegmentsCorporate",
    Corporate = "Corporate",
    FixedGroup = "FixedGroup",
    FlexibleBusinessLoan = "FlexibleBusinessLoan",
    GovernmentScheme = "GovernmentScheme",
    NewCustomersOnly = "NewCustomersOnly",
    SmallLoan = "SmallLoan",
    SpecialisedSector = "SpecialisedSector",
    SwitchersOnly = "SwitchersOnly"
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum {
    FlexibleBusinessLoan = "FlexibleBusinessLoan",
    SmallBusinessLoan = "SmallBusinessLoan",
    SmeUnsecuredLoan = "SmeUnsecuredLoan"
}
/**
 * SME Loan
**/
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
    arrearsTreatment?: string;
    benefits: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;
    currency: string[];
    customerAccessChannels: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum[];
    eligibility: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;
    feesAndCharges: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[];
    loanItem: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem[];
    maximumLoanAmount: string;
    maximumLoanTerm: number;
    minimumLoanAmount: string;
    minimumLoanTerm: number;
    organisation: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;
    paymentHoliday: boolean;
    productDescription: string;
    productIdentifier: string;
    productName: string;
    productSegment: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];
    productTypeName: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum;
    productUrl: string[];
    tsandCs: string[];
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
export declare enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    license: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    termsOfUse: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
export declare class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];
    meta: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetUnsecuredSmeLoansRequest extends SpeakeasyBase {
    headers: GetUnsecuredSmeLoansHeaders;
}
export declare class GetUnsecuredSmeLoansResponse extends SpeakeasyBase {
    fourHundredErrorObject?: GetUnsecuredSmeLoans400ErrorObject;
    fourHundredAndEightErrorObject?: GetUnsecuredSmeLoans408ErrorObject;
    fourHundredAndTwentyNineErrorObject?: GetUnsecuredSmeLoans429ErrorObject;
    fiveHundredErrorObject?: GetUnsecuredSmeLoans500ErrorObject;
    fiveHundredAndThreeErrorObject?: GetUnsecuredSmeLoans503ErrorObject;
    contentType: string;
    errorObject?: GetUnsecuredSmeLoansErrorObject;
    getUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson;
    headers: Map<string, string[]>;
    statusCode: number;
}
