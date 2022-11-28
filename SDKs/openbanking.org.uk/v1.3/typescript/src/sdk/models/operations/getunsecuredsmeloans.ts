import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUnsecuredSmeLoansHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}

export enum GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}

export enum GetUnsecuredSmeLoans400ErrorObjectStatusEnum {
    FourHundred = "400"
}

export enum GetUnsecuredSmeLoans400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}


export class GetUnsecuredSmeLoans400ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetUnsecuredSmeLoans400ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetUnsecuredSmeLoans400ErrorObjectTitleEnum;
}

export enum GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}

export enum GetUnsecuredSmeLoans408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}

export enum GetUnsecuredSmeLoans408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}


export class GetUnsecuredSmeLoans408ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetUnsecuredSmeLoans408ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetUnsecuredSmeLoans408ErrorObjectTitleEnum;
}

export enum GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}

export enum GetUnsecuredSmeLoans429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}

export enum GetUnsecuredSmeLoans429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}


export class GetUnsecuredSmeLoans429ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetUnsecuredSmeLoans429ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetUnsecuredSmeLoans429ErrorObjectTitleEnum;
}

export enum GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}

export enum GetUnsecuredSmeLoans500ErrorObjectStatusEnum {
    FiveHundred = "500"
}

export enum GetUnsecuredSmeLoans500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}


export class GetUnsecuredSmeLoans500ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetUnsecuredSmeLoans500ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetUnsecuredSmeLoans500ErrorObjectTitleEnum;
}

export enum GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}

export enum GetUnsecuredSmeLoans503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}

export enum GetUnsecuredSmeLoans503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}


export class GetUnsecuredSmeLoans503ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetUnsecuredSmeLoans503ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetUnsecuredSmeLoans503ErrorObjectTitleEnum;
}


export class GetUnsecuredSmeLoansErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum {
    CashDeposit = "CashDeposit",
    Deposit = "Deposit",
    DirectDebit = "DirectDebit",
    InitialDeposit = "InitialDeposit",
    InternetLogon = "InternetLogon",
    MobileLogon = "MobileLogon",
    RegularDeposit = "RegularDeposit"
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail
/** 
 * Benefit detail
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail extends SpeakeasyBase {
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
  criteriaType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum[];

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


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem
/** 
 * Benefit Item
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BenefitDetail", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail })
  benefitDetail?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail[];

  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup
/** 
 * Benefit Interest Group
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BenefitItem" })
  benefitItem: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;

  @SpeakeasyMetadata({ data: "json, name=BenefitSubType" })
  benefitSubType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits
/** 
 * Benefit
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Benefit" })
  benefit: boolean;

  @SpeakeasyMetadata({ data: "json, name=BenefitGroup", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup })
  benefitGroup?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup[];
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum {
    Branch = "Branch",
    MobileBankingApp = "MobileBankingApp",
    Online = "Online",
    Phone = "Phone",
    Post = "Post",
    PostOffice = "PostOffice",
    Text = "Text"
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum {
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

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum {
    ExistingCustomers = "ExistingCustomers",
    NewCustomersOnly = "NewCustomersOnly",
    SwitchersOnly = "SwitchersOnly",
    StartUp = "StartUp"
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum {
    AcademicTerm = "AcademicTerm",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum {
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

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum {
    Joint = "Joint",
    SoleIncome = "SoleIncome",
    SoleOrJoint = "SoleOrJoint",
    Turnover = "Turnover"
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility
/** 
 * Eligibility
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility extends SpeakeasyBase {
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
  eligibilityType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncomeCondition" })
  incomeCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=IncomeTurnoverRelated" })
  incomeTurnoverRelated: boolean;

  @SpeakeasyMetadata({ data: "json, name=MarketingEligibility" })
  marketingEligibility?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum[];

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
  minimumIncomeFrequency?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;

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
  residencyRestrictedRegion?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=SingleJointIncome" })
  singleJointIncome?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;

  @SpeakeasyMetadata({ data: "json, name=ThirdSectorOrganisations" })
  thirdSectorOrganisations: boolean;
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum {
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


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
/** 
 * Fee Sub Details
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeFrequency" })
  feeFrequency: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;

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

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum {
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


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail
/** 
 * Fee Detail
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeSubDetails" })
  feeSubDetails: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Other" })
  other?: string;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails
/** 
 * Fee Details
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeDetail" })
  feeDetail: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail;

  @SpeakeasyMetadata({ data: "json, name=FeeSubType" })
  feeSubType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees
/** 
 * Fees
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeDetails", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails })
  feeDetails: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails[];

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

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges
/** 
 * Fees And Charges
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Fees" })
  fees: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees;

  @SpeakeasyMetadata({ data: "json, name=ProductState" })
  productState: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum;
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum {
    OneYear = "1 year",
    TwoYears = "2 years",
    ThreeYears = "3 years",
    FourYears = "4 years",
    FiveYears = "5 years"
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum {
    Apr = "APR",
    Aer = "AER",
    Gross = "Gross",
    Net = "Net",
    RepApr = "RepApr"
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum {
    Daily = "Daily",
    Flexible = "Flexible",
    Fortnightly = "Fortnightly",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Quarterly = "Quarterly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum {
    Pound5000 = "£5000",
    Pound10000 = "£10000",
    Pound15000 = "£15000",
    Pound20000 = "£20000",
    Pound25000 = "£25000",
    Other = "Other",
    TierMaximum = "TierMaximum",
    TierMinimum = "TierMinimum"
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing
/** 
 * Loan Pricing
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndicativeRate" })
  indicativeRate: string;

  @SpeakeasyMetadata({ data: "json, name=LoanLengthIncrement" })
  loanLengthIncrement: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum;

  @SpeakeasyMetadata({ data: "json, name=LoanLengthIncrementLower" })
  loanLengthIncrementLower: number;

  @SpeakeasyMetadata({ data: "json, name=LoanLengthIncrementUpper" })
  loanLengthIncrementUpper: number;

  @SpeakeasyMetadata({ data: "json, name=LoanSizeBandLower" })
  loanSizeBandLower: string;

  @SpeakeasyMetadata({ data: "json, name=LoanSizeBandUpper" })
  loanSizeBandUpper: string;

  @SpeakeasyMetadata({ data: "json, name=Negotiable" })
  negotiable: boolean;

  @SpeakeasyMetadata({ data: "json, name=RateComparisonType" })
  rateComparisonType?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RepaymentFrequency" })
  repaymentFrequency: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum[];

  @SpeakeasyMetadata({ data: "json, name=SizeIncrement" })
  sizeIncrement: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum;
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum {
    FutureMultipleTerms = "FutureMultipleTerms",
    Promotional = "Promotional",
    Regular = "Regular"
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem
/** 
 * Loan Item
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CCARegulatedEntity" })
  ccaRegulatedEntity: boolean;

  @SpeakeasyMetadata({ data: "json, name=DateOfChange" })
  dateOfChange?: string;

  @SpeakeasyMetadata({ data: "json, name=IsALowInterestRepaymentStartPossible" })
  isALowInterestRepaymentStartPossible: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsThisAnInterestOnlyLoan" })
  isThisAnInterestOnlyLoan: boolean;

  @SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" })
  lengthPromotionalInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=LoanPricing", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing })
  loanPricing?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing[];

  @SpeakeasyMetadata({ data: "json, name=ProductState" })
  productState: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" })
  startPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" })
  stopPromotionOrFutureTerms?: string;

  @SpeakeasyMetadata({ data: "json, name=WillTheLoanBePaidInTrancheDrawdowns" })
  willTheLoanBePaidInTrancheDrawdowns: boolean;
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
/** 
 * Brand
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrademarkID" })
  trademarkId: string;

  @SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" })
  trademarkIpoCode: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName
/** 
 * Organisation Name
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LegalName" })
  legalName: string;
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation
/** 
 * Parent organisation
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BIC" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=LEI" })
  lei?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganisationName" })
  organisationName: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
/** 
 * Organisation
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Brand" })
  brand: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;

  @SpeakeasyMetadata({ data: "json, name=ParentOrganisation" })
  parentOrganisation: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum {
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

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum {
    FlexibleBusinessLoan = "FlexibleBusinessLoan",
    SmallBusinessLoan = "SmallBusinessLoan",
    SmeUnsecuredLoan = "SmeUnsecuredLoan"
}


// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData
/** 
 * SME Loan
**/
export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArrearsTreatment" })
  arrearsTreatment?: string;

  @SpeakeasyMetadata({ data: "json, name=Benefits" })
  benefits: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string[];

  @SpeakeasyMetadata({ data: "json, name=CustomerAccessChannels" })
  customerAccessChannels: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum[];

  @SpeakeasyMetadata({ data: "json, name=Eligibility" })
  eligibility: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;

  @SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges })
  feesAndCharges: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges[];

  @SpeakeasyMetadata({ data: "json, name=LoanItem", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem })
  loanItem: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem[];

  @SpeakeasyMetadata({ data: "json, name=MaximumLoanAmount" })
  maximumLoanAmount: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumLoanTerm" })
  maximumLoanTerm: number;

  @SpeakeasyMetadata({ data: "json, name=MinimumLoanAmount" })
  minimumLoanAmount: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumLoanTerm" })
  minimumLoanTerm: number;

  @SpeakeasyMetadata({ data: "json, name=Organisation" })
  organisation: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;

  @SpeakeasyMetadata({ data: "json, name=PaymentHoliday" })
  paymentHoliday: boolean;

  @SpeakeasyMetadata({ data: "json, name=ProductDescription" })
  productDescription: string;

  @SpeakeasyMetadata({ data: "json, name=ProductIdentifier" })
  productIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName: string;

  @SpeakeasyMetadata({ data: "json, name=ProductSegment" })
  productSegment: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum[];

  @SpeakeasyMetadata({ data: "json, name=ProductTypeName" })
  productTypeName: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=ProductURL" })
  productUrl: string[];

  @SpeakeasyMetadata({ data: "json, name=TsandCs" })
  tsandCs: string[];
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}

export enum GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}


export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Agreement" })
  agreement: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=License" })
  license: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=TermsOfUse" })
  termsOfUse: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;

  @SpeakeasyMetadata({ data: "json, name=TotalResults" })
  totalResults: number;
}


export class GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData })
  data: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}


export class GetUnsecuredSmeLoansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetUnsecuredSmeLoansHeaders;
}


export class GetUnsecuredSmeLoansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredErrorObject?: GetUnsecuredSmeLoans400ErrorObject;

  @SpeakeasyMetadata()
  fourHundredAndEightErrorObject?: GetUnsecuredSmeLoans408ErrorObject;

  @SpeakeasyMetadata()
  fourHundredAndTwentyNineErrorObject?: GetUnsecuredSmeLoans429ErrorObject;

  @SpeakeasyMetadata()
  fiveHundredErrorObject?: GetUnsecuredSmeLoans500ErrorObject;

  @SpeakeasyMetadata()
  fiveHundredAndThreeErrorObject?: GetUnsecuredSmeLoans503ErrorObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorObject?: GetUnsecuredSmeLoansErrorObject;

  @SpeakeasyMetadata()
  getUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
