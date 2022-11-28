import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAtmsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare enum GetAtms400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}
export declare enum GetAtms400ErrorObjectStatusEnum {
    FourHundred = "400"
}
export declare enum GetAtms400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}
export declare class GetAtms400ErrorObject extends SpeakeasyBase {
    description: GetAtms400ErrorObjectDescriptionEnum;
    status: GetAtms400ErrorObjectStatusEnum;
    title: GetAtms400ErrorObjectTitleEnum;
}
export declare enum GetAtms408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}
export declare enum GetAtms408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}
export declare enum GetAtms408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}
export declare class GetAtms408ErrorObject extends SpeakeasyBase {
    description: GetAtms408ErrorObjectDescriptionEnum;
    status: GetAtms408ErrorObjectStatusEnum;
    title: GetAtms408ErrorObjectTitleEnum;
}
export declare enum GetAtms429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}
export declare enum GetAtms429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum GetAtms429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}
export declare class GetAtms429ErrorObject extends SpeakeasyBase {
    description: GetAtms429ErrorObjectDescriptionEnum;
    status: GetAtms429ErrorObjectStatusEnum;
    title: GetAtms429ErrorObjectTitleEnum;
}
export declare enum GetAtms500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}
export declare enum GetAtms500ErrorObjectStatusEnum {
    FiveHundred = "500"
}
export declare enum GetAtms500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}
export declare class GetAtms500ErrorObject extends SpeakeasyBase {
    description: GetAtms500ErrorObjectDescriptionEnum;
    status: GetAtms500ErrorObjectStatusEnum;
    title: GetAtms500ErrorObjectTitleEnum;
}
export declare enum GetAtms503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}
export declare enum GetAtms503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}
export declare enum GetAtms503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}
export declare class GetAtms503ErrorObject extends SpeakeasyBase {
    description: GetAtms503ErrorObjectDescriptionEnum;
    status: GetAtms503ErrorObjectStatusEnum;
    title: GetAtms503ErrorObjectTitleEnum;
}
export declare class GetAtmsErrorObject extends SpeakeasyBase {
    description: string;
    status: string;
    title: string;
}
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum {
    Balance = "Balance",
    BillPayments = "BillPayments",
    CashDeposits = "CashDeposits",
    CashWithdrawal = "CashWithdrawal",
    CharityDonation = "CharityDonation",
    ChequeBookRequest = "ChequeBookRequest",
    ChequeDeposits = "ChequeDeposits",
    FastCash = "FastCash",
    MiniStatement = "MiniStatement",
    MobileBankingRegistration = "MobileBankingRegistration",
    MobilePaymentRegistration = "MobilePaymentRegistration",
    MobilePhoneTopUp = "MobilePhoneTopUp",
    OrderStatement = "OrderStatement",
    PinActivation = "PINActivation",
    PinChange = "PINChange"
}
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum {
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
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress extends SpeakeasyBase {
    buildingNumberOrName?: string;
    country: string;
    countrySubDivision?: string;
    optionalAddressField?: string;
    postCode: string;
    streetName: string;
    townName?: string;
}
/**
 * Geographic Coordinates
**/
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation extends SpeakeasyBase {
    latitude: string;
    longitude: string;
}
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum {
    Airport = "Airport",
    BankSpecialisedOutlet = "BankSpecialisedOutlet",
    BranchExternal = "BranchExternal",
    BranchInternal = "BranchInternal",
    BranchLobby = "BranchLobby",
    BureauDeChange = "BureauDeChange",
    CoachStation = "CoachStation",
    CommercialSpaceInternal = "CommercialSpaceInternal",
    ConvenienceStore = "ConvenienceStore",
    ExhibitionCentre = "ExhibitionCentre",
    FactoryOrOffice = "FactoryOrOffice",
    FillingStation = "FillingStation",
    FinancialInstitution = "FinancialInstitution",
    GovernmentOffice = "GovernmentOffice",
    Hospital = "Hospital",
    Hotel = "Hotel",
    KioskPod = "KioskPod",
    LeisureCentre = "LeisureCentre",
    PleasurePark = "PleasurePark",
    PublicHouse = "PublicHouse",
    RailwayStation = "RailwayStation",
    RemoteUnit = "RemoteUnit",
    RetailerDepartmentStore = "RetailerDepartmentStore",
    RetailerOutlet = "RetailerOutlet",
    SeaportTerminal = "SeaportTerminal",
    ServiceStation = "ServiceStation",
    ShoppingCentreExternal = "ShoppingCentreExternal",
    ShoppingCentreInternal = "ShoppingCentreInternal",
    StorageDepot = "StorageDepot",
    SupermarketExternal = "SupermarketExternal",
    SupermarketInternal = "SupermarketInternal",
    UndergroundRailwayStation = "UndergroundRailwayStation",
    UniversityOrCollege = "UniversityOrCollege"
}
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum {
    Pound5 = "\u00A35",
    Pound10 = "\u00A310",
    Pound20 = "\u00A320",
    Pound50 = "\u00A350",
    Pound100 = "\u00A3100"
}
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}
/**
 * Brand
**/
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand extends SpeakeasyBase {
    trademarkId: string;
    trademarkIpoCode: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum;
}
/**
 * Organisation Name
**/
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
    legalName: string;
}
/**
 * Parent organisation
**/
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation extends SpeakeasyBase {
    bic?: string;
    lei?: string;
    organisationName: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName;
}
/**
 * Organisation
**/
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation extends SpeakeasyBase {
    brand: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand;
    parentOrganisation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation;
}
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm extends SpeakeasyBase {
    atmid: string;
    atmServices: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum[];
    accessibilityTypes?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum[];
    additionalAtmServices?: string[];
    address: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress;
    branchIdentification?: string;
    currency: string[];
    geographicLocation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation;
    locationCategory?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum;
    minimumValueDispensed?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum;
    organisation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation;
    siteId?: string;
    siteName?: string;
    supportedLanguages: string[];
}
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}
export declare enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
    agreement: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
    lastUpdated: Date;
    license: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
    termsOfUse: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
    totalResults: number;
}
export declare class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
    data: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm[];
    meta: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}
export declare class GetAtmsRequest extends SpeakeasyBase {
    headers: GetAtmsHeaders;
}
export declare class GetAtmsResponse extends SpeakeasyBase {
    fourHundredErrorObject?: GetAtms400ErrorObject;
    fourHundredAndEightErrorObject?: GetAtms408ErrorObject;
    fourHundredAndTwentyNineErrorObject?: GetAtms429ErrorObject;
    fiveHundredErrorObject?: GetAtms500ErrorObject;
    fiveHundredAndThreeErrorObject?: GetAtms503ErrorObject;
    contentType: string;
    errorObject?: GetAtmsErrorObject;
    getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson;
    headers: Map<string, string[]>;
    statusCode: number;
}
