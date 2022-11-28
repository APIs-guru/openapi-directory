import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBranchesHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare enum GetBranches400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetBranches400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetBranches400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
export declare class GetBranches400ErrorObject extends SpeakeasyBase {
    description: GetBranches400ErrorObjectDescriptionEnum;
    status: GetBranches400ErrorObjectStatusEnum;
    title: GetBranches400ErrorObjectTitleEnum;
}
export declare enum GetBranches408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetBranches408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetBranches408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
export declare class GetBranches408ErrorObject extends SpeakeasyBase {
    description: GetBranches408ErrorObjectDescriptionEnum;
    status: GetBranches408ErrorObjectStatusEnum;
    title: GetBranches408ErrorObjectTitleEnum;
}
export declare enum GetBranches429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetBranches429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetBranches429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
export declare class GetBranches429ErrorObject extends SpeakeasyBase {
    description: GetBranches429ErrorObjectDescriptionEnum;
    status: GetBranches429ErrorObjectStatusEnum;
    title: GetBranches429ErrorObjectTitleEnum;
}
export declare enum GetBranches500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetBranches500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetBranches500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
export declare class GetBranches500ErrorObject extends SpeakeasyBase {
    description: GetBranches500ErrorObjectDescriptionEnum;
    status: GetBranches500ErrorObjectStatusEnum;
    title: GetBranches500ErrorObjectTitleEnum;
}
export declare enum GetBranches503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetBranches503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetBranches503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
export declare class GetBranches503ErrorObject extends SpeakeasyBase {
    description: GetBranches503ErrorObjectDescriptionEnum;
    status: GetBranches503ErrorObjectStatusEnum;
    title: GetBranches503ErrorObjectTitleEnum;
}
export declare class GetBranchesErrorObject extends SpeakeasyBase {
    description: string;
    status: string;
    title: string;
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum {
    AudioCashMachine = "AudioCashMachine",
    AutomaticDoors = "AutomaticDoors",
    ChairAccess = "ChairAccess",
    DriveThru = "DriveThru",
    ExternalRamp = "ExternalRamp",
    InductionLoop = "InductionLoop",
    InternalRamp = "InternalRamp",
    LevelAccess = "LevelAccess",
    LowerLevelCounter = "LowerLevelCounter",
    WheelchairAccess = "WheelchairAccess"
}
/**
 * Postal Address
**/
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress extends SpeakeasyBase {
    buildingNumberOrName?: string;
    country: string;
    countrySubDivision?: string;
    optionalAddressField?: string;
    postCode?: string;
    streetName?: string;
    townName?: string;
}
/**
 * Alternative Phone Number
**/
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone extends SpeakeasyBase {
    alternateTelephoneNumber?: string;
    alternateTelephoneNumberDescription?: string;
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum {
    BusinessItSupport = "BusinessITSupport",
    CollectionLockers = "CollectionLockers",
    MeetingRooms = "MeetingRooms",
    Parking = "Parking",
    Wifi = "Wifi"
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum {
    BureauDeChange = "BureauDeChange",
    BusinessCounter = "BusinessCounter",
    CardIssuanceFacility = "CardIssuanceFacility",
    CounterServices = "CounterServices",
    DriveThru = "DriveThru",
    MortgageAdvisor = "MortgageAdvisor",
    NightSafe = "NightSafe",
    OnDemandCurrency = "OnDemandCurrency",
    PremierCounter = "PremierCounter",
    VideoBanking = "VideoBanking",
    WheelChairAccess = "WheelChairAccess"
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum {
    AccountVerificationService = "AccountVerificationService",
    AssistedServiceCounter = "AssistedServiceCounter",
    BusinessDepositTerminal = "BusinessDepositTerminal",
    CashChequeDepositMachineCoin = "CashChequeDepositMachineCoin",
    CashChequeDepositMachineNoCoin = "CashChequeDepositMachineNoCoin",
    ExternalAtmAudio = "ExternalAtmAudio",
    ExternalAtmNoAudio = "ExternalAtmNoAudio",
    ExternalQuickServicePoint = "ExternalQuickServicePoint",
    InternalAtmAudio = "InternalAtmAudio",
    InternalAtmNoAudio = "InternalAtmNoAudio",
    InternalQuickServicePoint = "InternalQuickServicePoint",
    LodgementDevice = "LodgementDevice",
    OnlineBankingPoint = "OnlineBankingPoint",
    QuickDeposit = "QuickDeposit",
    SaturdayCounterService = "SaturdayCounterService",
    SelfServiceAccountOpening = "SelfServiceAccountOpening",
    StatementPrinter = "StatementPrinter"
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum {
    Physical = "Physical",
    Mobile = "Mobile"
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum {
    Business = "Business",
    Corporate = "Corporate",
    Personal = "Personal",
    Premier = "Premier",
    Private = "Private",
    Select = "Select",
    Sme = "SME",
    Wealth = "Wealth"
}
/**
 * Geographic Coordinates
**/
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation extends SpeakeasyBase {
    latitude: string;
    longitude: string;
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
    PublicAndBankHoliday = "Public and Bank Holiday"
}
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes extends SpeakeasyBase {
    closingTime: string;
    openingDay: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum;
    openingTime: string;
    unavailableFinishTime?: string;
    unavailableStartTime?: string;
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
**/
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand extends SpeakeasyBase {
    trademarkId: string;
    trademarkIpoCode: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum;
}
/**
 * Organisation Name
**/
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    legalName: string;
}
/**
 * Parent organisation
**/
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation extends SpeakeasyBase {
    bic?: string;
    lei?: string;
    organisationName: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
**/
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation extends SpeakeasyBase {
    brand: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand;
    parentOrganisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation;
}
/**
 * Planned branch closure
**/
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure extends SpeakeasyBase {
    endDate?: string;
    startDate?: string;
}
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch extends SpeakeasyBase {
    atmAtBranch: boolean;
    accessibilityTypes?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum;
    address: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress;
    alternatePhone?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone[];
    arrivalTime?: string;
    branchDescription?: string;
    branchFacilitiesName?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum[];
    branchIdentification: string;
    branchMediatedServiceName?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum[];
    branchName?: string;
    branchOtherFacilities?: string[];
    branchOtherMediatedServices?: string[];
    branchOtherSelfServices?: string[];
    branchPhoto?: string;
    branchSelfServeServiceName?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum[];
    branchType: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum;
    customerSegment: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum[];
    daysOfTheWeek?: string;
    departureTime?: string;
    faxNumber?: string[];
    geographicLocation?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation;
    openingTimes: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes[];
    organisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation;
    parkingLocation?: string;
    plannedBranchClosure?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure[];
    stopName?: string;
    telephoneNumber: string;
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
export declare enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    license: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    termsOfUse: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
export declare class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch[];
    meta: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetBranchesRequest extends SpeakeasyBase {
    headers: GetBranchesHeaders;
}
export declare class GetBranchesResponse extends SpeakeasyBase {
    fourHundredErrorObject?: GetBranches400ErrorObject;
    fourHundredAndEightErrorObject?: GetBranches408ErrorObject;
    fourHundredAndTwentyNineErrorObject?: GetBranches429ErrorObject;
    fiveHundredErrorObject?: GetBranches500ErrorObject;
    fiveHundredAndThreeErrorObject?: GetBranches503ErrorObject;
    contentType: string;
    errorObject?: GetBranchesErrorObject;
    getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson;
    headers: Map<string, string[]>;
    statusCode: number;
}
