import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAtmsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}

export enum GetAtms400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}

export enum GetAtms400ErrorObjectStatusEnum {
    FourHundred = "400"
}

export enum GetAtms400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}


export class GetAtms400ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetAtms400ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetAtms400ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetAtms400ErrorObjectTitleEnum;
}

export enum GetAtms408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}

export enum GetAtms408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}

export enum GetAtms408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}


export class GetAtms408ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetAtms408ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetAtms408ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetAtms408ErrorObjectTitleEnum;
}

export enum GetAtms429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}

export enum GetAtms429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}

export enum GetAtms429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}


export class GetAtms429ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetAtms429ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetAtms429ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetAtms429ErrorObjectTitleEnum;
}

export enum GetAtms500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}

export enum GetAtms500ErrorObjectStatusEnum {
    FiveHundred = "500"
}

export enum GetAtms500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}


export class GetAtms500ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetAtms500ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetAtms500ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetAtms500ErrorObjectTitleEnum;
}

export enum GetAtms503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}

export enum GetAtms503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}

export enum GetAtms503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}


export class GetAtms503ErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: GetAtms503ErrorObjectDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetAtms503ErrorObjectStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: GetAtms503ErrorObjectTitleEnum;
}


export class GetAtmsErrorObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum {
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

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum {
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


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress
/** 
 * Postal Address
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BuildingNumberOrName" })
  buildingNumberOrName?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=CountrySubDivision" })
  countrySubDivision?: string;

  @SpeakeasyMetadata({ data: "json, name=OptionalAddressField" })
  optionalAddressField?: string;

  @SpeakeasyMetadata({ data: "json, name=PostCode" })
  postCode: string;

  @SpeakeasyMetadata({ data: "json, name=StreetName" })
  streetName: string;

  @SpeakeasyMetadata({ data: "json, name=TownName" })
  townName?: string;
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation
/** 
 * Geographic Coordinates
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Latitude" })
  latitude: string;

  @SpeakeasyMetadata({ data: "json, name=Longitude" })
  longitude: string;
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum {
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

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum {
    Pound5 = "£5",
    Pound10 = "£10",
    Pound20 = "£20",
    Pound50 = "£50",
    Pound100 = "£100"
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK",
    Eu = "EU"
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand
/** 
 * Brand
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TrademarkID" })
  trademarkId: string;

  @SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" })
  trademarkIpoCode: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum;
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName
/** 
 * Organisation Name
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LegalName" })
  legalName: string;
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation
/** 
 * Parent organisation
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BIC" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=LEI" })
  lei?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganisationName" })
  organisationName: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName;
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation
/** 
 * Organisation
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Brand" })
  brand: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand;

  @SpeakeasyMetadata({ data: "json, name=ParentOrganisation" })
  parentOrganisation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation;
}


export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ATMID" })
  atmid: string;

  @SpeakeasyMetadata({ data: "json, name=ATMServices" })
  atmServices: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum[];

  @SpeakeasyMetadata({ data: "json, name=AccessibilityTypes" })
  accessibilityTypes?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=AdditionalATMServices" })
  additionalAtmServices?: string[];

  @SpeakeasyMetadata({ data: "json, name=Address" })
  address: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress;

  @SpeakeasyMetadata({ data: "json, name=BranchIdentification" })
  branchIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string[];

  @SpeakeasyMetadata({ data: "json, name=GeographicLocation" })
  geographicLocation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation;

  @SpeakeasyMetadata({ data: "json, name=LocationCategory" })
  locationCategory?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=MinimumValueDispensed" })
  minimumValueDispensed?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum;

  @SpeakeasyMetadata({ data: "json, name=Organisation" })
  organisation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation;

  @SpeakeasyMetadata({ data: "json, name=SiteID" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=SiteName" })
  siteName?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportedLanguages" })
  supportedLanguages: string[];
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}


export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Agreement" })
  agreement: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=License" })
  license: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=TermsOfUse" })
  termsOfUse: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;

  @SpeakeasyMetadata({ data: "json, name=TotalResults" })
  totalResults: number;
}


export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm })
  data: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}


export class GetAtmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetAtmsHeaders;
}


export class GetAtmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredErrorObject?: GetAtms400ErrorObject;

  @SpeakeasyMetadata()
  fourHundredAndEightErrorObject?: GetAtms408ErrorObject;

  @SpeakeasyMetadata()
  fourHundredAndTwentyNineErrorObject?: GetAtms429ErrorObject;

  @SpeakeasyMetadata()
  fiveHundredErrorObject?: GetAtms500ErrorObject;

  @SpeakeasyMetadata()
  fiveHundredAndThreeErrorObject?: GetAtms503ErrorObject;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorObject?: GetAtmsErrorObject;

  @SpeakeasyMetadata()
  getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
