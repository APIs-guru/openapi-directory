import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAtmsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetAtmsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAtmsHeaders;
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
  @Metadata({ data: "json, name=description" })
  description: GetAtms400ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetAtms400ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetAtms408ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetAtms408ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetAtms429ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetAtms429ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetAtms500ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetAtms500ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
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
  @Metadata({ data: "json, name=description" })
  description: GetAtms503ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetAtms503ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
  title: GetAtms503ErrorObjectTitleEnum;
}


export class GetAtmsErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum {
    Balance = "Balance"
,    BillPayments = "BillPayments"
,    CashDeposits = "CashDeposits"
,    CashWithdrawal = "CashWithdrawal"
,    CharityDonation = "CharityDonation"
,    ChequeBookRequest = "ChequeBookRequest"
,    ChequeDeposits = "ChequeDeposits"
,    FastCash = "FastCash"
,    MiniStatement = "MiniStatement"
,    MobileBankingRegistration = "MobileBankingRegistration"
,    MobilePaymentRegistration = "MobilePaymentRegistration"
,    MobilePhoneTopUp = "MobilePhoneTopUp"
,    OrderStatement = "OrderStatement"
,    PinActivation = "PINActivation"
,    PinChange = "PINChange"
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum {
    AudioCashMachine = "AudioCashMachine"
,    AutomaticDoors = "AutomaticDoors"
,    ChairAccess = "ChairAccess"
,    DriveThru = "DriveThru"
,    ExternalRamp = "ExternalRamp"
,    InductionLoop = "InductionLoop"
,    InternalRamp = "InternalRamp"
,    LevelAccess = "LevelAccess"
,    LowerLevelCounter = "LowerLevelCounter"
,    WheelchairAccess = "WheelchairAccess"
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress
/** 
 * Postal Address
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildingNumberOrName" })
  buildingNumberOrName?: string;

  @Metadata({ data: "json, name=Country" })
  country: string;

  @Metadata({ data: "json, name=CountrySubDivision" })
  countrySubDivision?: string;

  @Metadata({ data: "json, name=OptionalAddressField" })
  optionalAddressField?: string;

  @Metadata({ data: "json, name=PostCode" })
  postCode: string;

  @Metadata({ data: "json, name=StreetName" })
  streetName: string;

  @Metadata({ data: "json, name=TownName" })
  townName?: string;
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation
/** 
 * Geographic Coordinates
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Latitude" })
  latitude: string;

  @Metadata({ data: "json, name=Longitude" })
  longitude: string;
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum {
    Airport = "Airport"
,    BankSpecialisedOutlet = "BankSpecialisedOutlet"
,    BranchExternal = "BranchExternal"
,    BranchInternal = "BranchInternal"
,    BranchLobby = "BranchLobby"
,    BureauDeChange = "BureauDeChange"
,    CoachStation = "CoachStation"
,    CommercialSpaceInternal = "CommercialSpaceInternal"
,    ConvenienceStore = "ConvenienceStore"
,    ExhibitionCentre = "ExhibitionCentre"
,    FactoryOrOffice = "FactoryOrOffice"
,    FillingStation = "FillingStation"
,    FinancialInstitution = "FinancialInstitution"
,    GovernmentOffice = "GovernmentOffice"
,    Hospital = "Hospital"
,    Hotel = "Hotel"
,    KioskPod = "KioskPod"
,    LeisureCentre = "LeisureCentre"
,    PleasurePark = "PleasurePark"
,    PublicHouse = "PublicHouse"
,    RailwayStation = "RailwayStation"
,    RemoteUnit = "RemoteUnit"
,    RetailerDepartmentStore = "RetailerDepartmentStore"
,    RetailerOutlet = "RetailerOutlet"
,    SeaportTerminal = "SeaportTerminal"
,    ServiceStation = "ServiceStation"
,    ShoppingCentreExternal = "ShoppingCentreExternal"
,    ShoppingCentreInternal = "ShoppingCentreInternal"
,    StorageDepot = "StorageDepot"
,    SupermarketExternal = "SupermarketExternal"
,    SupermarketInternal = "SupermarketInternal"
,    UndergroundRailwayStation = "UndergroundRailwayStation"
,    UniversityOrCollege = "UniversityOrCollege"
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum {
    Pound5 = "£5"
,    Pound10 = "£10"
,    Pound20 = "£20"
,    Pound50 = "£50"
,    Pound100 = "£100"
}

export enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK"
,    Eu = "EU"
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand
/** 
 * Brand
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrademarkID" })
  trademarkId: string;

  @Metadata({ data: "json, name=TrademarkIPOCode" })
  trademarkIpoCode: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrandTrademarkIpoCodeEnum;
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName
/** 
 * Organisation Name
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
  @Metadata({ data: "json, name=LegalName" })
  legalName: string;
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation
/** 
 * Parent organisation
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=BIC" })
  bic?: string;

  @Metadata({ data: "json, name=LEI" })
  lei?: string;

  @Metadata({ data: "json, name=OrganisationName" })
  organisationName: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisationOrganisationName;
}


// GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation
/** 
 * Organisation
**/
export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Brand" })
  brand: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationBrand;

  @Metadata({ data: "json, name=ParentOrganisation" })
  parentOrganisation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisationParentOrganisation;
}


export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm extends SpeakeasyBase {
  @Metadata({ data: "json, name=ATMID" })
  atmid: string;

  @Metadata({ data: "json, name=ATMServices" })
  atmServices: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum[];

  @Metadata({ data: "json, name=AccessibilityTypes" })
  accessibilityTypes?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAccessibilityTypesEnum[];

  @Metadata({ data: "json, name=AdditionalATMServices" })
  additionalAtmServices?: string[];

  @Metadata({ data: "json, name=Address" })
  address: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAddress;

  @Metadata({ data: "json, name=BranchIdentification" })
  branchIdentification?: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string[];

  @Metadata({ data: "json, name=GeographicLocation" })
  geographicLocation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation;

  @Metadata({ data: "json, name=LocationCategory" })
  locationCategory?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmLocationCategoryEnum;

  @Metadata({ data: "json, name=MinimumValueDispensed" })
  minimumValueDispensed?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmMinimumValueDispensedEnum;

  @Metadata({ data: "json, name=Organisation" })
  organisation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmOrganisation;

  @Metadata({ data: "json, name=SiteID" })
  siteId?: string;

  @Metadata({ data: "json, name=SiteName" })
  siteName?: string;

  @Metadata({ data: "json, name=SupportedLanguages" })
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
  @Metadata({ data: "json, name=Agreement" })
  agreement: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated: Date;

  @Metadata({ data: "json, name=License" })
  license: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;

  @Metadata({ data: "json, name=TermsOfUse" })
  termsOfUse: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;

  @Metadata({ data: "json, name=TotalResults" })
  totalResults: number;
}


export class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm })
  data: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtm[];

  @Metadata({ data: "json, name=meta" })
  meta: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}


export class GetAtmsResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredErrorObject?: GetAtms400ErrorObject;

  @Metadata()
  fourHundredAndEightErrorObject?: GetAtms408ErrorObject;

  @Metadata()
  fourHundredAndTwentyNineErrorObject?: GetAtms429ErrorObject;

  @Metadata()
  fiveHundredErrorObject?: GetAtms500ErrorObject;

  @Metadata()
  fiveHundredAndThreeErrorObject?: GetAtms503ErrorObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorObject?: GetAtmsErrorObject;

  @Metadata()
  getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJson;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
