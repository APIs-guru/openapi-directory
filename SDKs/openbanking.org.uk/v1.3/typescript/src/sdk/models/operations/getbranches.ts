import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBranchesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetBranchesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetBranchesHeaders;
}

export enum GetBranches400ErrorObjectDescriptionEnum {
    YouHaveSentARequestWhichCouldNotBeUnderstood = "You have sent a request which could not be understood."
}

export enum GetBranches400ErrorObjectStatusEnum {
    FourHundred = "400"
}

export enum GetBranches400ErrorObjectTitleEnum {
    BadRequest = "Bad request"
}


export class GetBranches400ErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: GetBranches400ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetBranches400ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
  title: GetBranches400ErrorObjectTitleEnum;
}

export enum GetBranches408ErrorObjectDescriptionEnum {
    YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred = "Your client has failed to submit a request, and a timeout has occurred."
}

export enum GetBranches408ErrorObjectStatusEnum {
    FourHundredAndEight = "408"
}

export enum GetBranches408ErrorObjectTitleEnum {
    ClientTimeout = "Client timeout"
}


export class GetBranches408ErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: GetBranches408ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetBranches408ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
  title: GetBranches408ErrorObjectTitleEnum;
}

export enum GetBranches429ErrorObjectDescriptionEnum {
    YouHaveRequestedThisResourceTooOftenSlowDown = "You have requested this resource too often. Slow down."
}

export enum GetBranches429ErrorObjectStatusEnum {
    FourHundredAndTwentyNine = "429"
}

export enum GetBranches429ErrorObjectTitleEnum {
    TooManyRequests = "Too many requests"
}


export class GetBranches429ErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: GetBranches429ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetBranches429ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
  title: GetBranches429ErrorObjectTitleEnum;
}

export enum GetBranches500ErrorObjectDescriptionEnum {
    AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable = "An error occurred on the server. No further information is available."
}

export enum GetBranches500ErrorObjectStatusEnum {
    FiveHundred = "500"
}

export enum GetBranches500ErrorObjectTitleEnum {
    InternalServerError = "Internal server error"
}


export class GetBranches500ErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: GetBranches500ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetBranches500ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
  title: GetBranches500ErrorObjectTitleEnum;
}

export enum GetBranches503ErrorObjectDescriptionEnum {
    TheServiceIsTemporarilyUnavailable = "The service is temporarily unavailable."
}

export enum GetBranches503ErrorObjectStatusEnum {
    FiveHundredAndThree = "503"
}

export enum GetBranches503ErrorObjectTitleEnum {
    ServiceTemporarilyUnavailable = "Service temporarily unavailable"
}


export class GetBranches503ErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: GetBranches503ErrorObjectDescriptionEnum;

  @Metadata({ data: "json, name=status" })
  status: GetBranches503ErrorObjectStatusEnum;

  @Metadata({ data: "json, name=title" })
  title: GetBranches503ErrorObjectTitleEnum;
}


export class GetBranchesErrorObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum {
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


// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress
/** 
 * Postal Address
**/
export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=BuildingNumberOrName" })
  buildingNumberOrName?: string;

  @Metadata({ data: "json, name=Country" })
  country: string;

  @Metadata({ data: "json, name=CountrySubDivision" })
  countrySubDivision?: string;

  @Metadata({ data: "json, name=OptionalAddressField" })
  optionalAddressField?: string;

  @Metadata({ data: "json, name=PostCode" })
  postCode?: string;

  @Metadata({ data: "json, name=StreetName" })
  streetName?: string;

  @Metadata({ data: "json, name=TownName" })
  townName?: string;
}


// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone
/** 
 * Alternative Phone Number
**/
export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlternateTelephoneNumber" })
  alternateTelephoneNumber?: string;

  @Metadata({ data: "json, name=AlternateTelephoneNumberDescription" })
  alternateTelephoneNumberDescription?: string;
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum {
    BusinessItSupport = "BusinessITSupport"
,    CollectionLockers = "CollectionLockers"
,    MeetingRooms = "MeetingRooms"
,    Parking = "Parking"
,    Wifi = "Wifi"
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum {
    BureauDeChange = "BureauDeChange"
,    BusinessCounter = "BusinessCounter"
,    CardIssuanceFacility = "CardIssuanceFacility"
,    CounterServices = "CounterServices"
,    DriveThru = "DriveThru"
,    MortgageAdvisor = "MortgageAdvisor"
,    NightSafe = "NightSafe"
,    OnDemandCurrency = "OnDemandCurrency"
,    PremierCounter = "PremierCounter"
,    VideoBanking = "VideoBanking"
,    WheelChairAccess = "WheelChairAccess"
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum {
    AccountVerificationService = "AccountVerificationService"
,    AssistedServiceCounter = "AssistedServiceCounter"
,    BusinessDepositTerminal = "BusinessDepositTerminal"
,    CashChequeDepositMachineCoin = "CashChequeDepositMachineCoin"
,    CashChequeDepositMachineNoCoin = "CashChequeDepositMachineNoCoin"
,    ExternalAtmAudio = "ExternalAtmAudio"
,    ExternalAtmNoAudio = "ExternalAtmNoAudio"
,    ExternalQuickServicePoint = "ExternalQuickServicePoint"
,    InternalAtmAudio = "InternalAtmAudio"
,    InternalAtmNoAudio = "InternalAtmNoAudio"
,    InternalQuickServicePoint = "InternalQuickServicePoint"
,    LodgementDevice = "LodgementDevice"
,    OnlineBankingPoint = "OnlineBankingPoint"
,    QuickDeposit = "QuickDeposit"
,    SaturdayCounterService = "SaturdayCounterService"
,    SelfServiceAccountOpening = "SelfServiceAccountOpening"
,    StatementPrinter = "StatementPrinter"
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum {
    Physical = "Physical"
,    Mobile = "Mobile"
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum {
    Business = "Business"
,    Corporate = "Corporate"
,    Personal = "Personal"
,    Premier = "Premier"
,    Private = "Private"
,    Select = "Select"
,    Sme = "SME"
,    Wealth = "Wealth"
}


// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation
/** 
 * Geographic Coordinates
**/
export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Latitude" })
  latitude: string;

  @Metadata({ data: "json, name=Longitude" })
  longitude: string;
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum {
    Monday = "Monday"
,    Tuesday = "Tuesday"
,    Wednesday = "Wednesday"
,    Thursday = "Thursday"
,    Friday = "Friday"
,    Saturday = "Saturday"
,    Sunday = "Sunday"
,    PublicAndBankHoliday = "Public and Bank Holiday"
}


export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClosingTime" })
  closingTime: string;

  @Metadata({ data: "json, name=OpeningDay" })
  openingDay: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum;

  @Metadata({ data: "json, name=OpeningTime" })
  openingTime: string;

  @Metadata({ data: "json, name=UnavailableFinishTime" })
  unavailableFinishTime?: string;

  @Metadata({ data: "json, name=UnavailableStartTime" })
  unavailableStartTime?: string;
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum {
    Uk = "UK"
,    Eu = "EU"
}


// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand
/** 
 * Brand
**/
export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand extends SpeakeasyBase {
  @Metadata({ data: "json, name=TrademarkID" })
  trademarkId: string;

  @Metadata({ data: "json, name=TrademarkIPOCode" })
  trademarkIpoCode: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrandTrademarkIpoCodeEnum;
}


// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName
/** 
 * Organisation Name
**/
export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName extends SpeakeasyBase {
  @Metadata({ data: "json, name=LegalName" })
  legalName: string;
}


// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation
/** 
 * Parent organisation
**/
export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=BIC" })
  bic?: string;

  @Metadata({ data: "json, name=LEI" })
  lei?: string;

  @Metadata({ data: "json, name=OrganisationName" })
  organisationName: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisationOrganisationName;
}


// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation
/** 
 * Organisation
**/
export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Brand" })
  brand: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationBrand;

  @Metadata({ data: "json, name=ParentOrganisation" })
  parentOrganisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisationParentOrganisation;
}


// GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure
/** 
 * Planned branch closure
**/
export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndDate" })
  endDate?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;
}


export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch extends SpeakeasyBase {
  @Metadata({ data: "json, name=ATMAtBranch" })
  atmAtBranch: boolean;

  @Metadata({ data: "json, name=AccessibilityTypes" })
  accessibilityTypes?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAccessibilityTypesEnum;

  @Metadata({ data: "json, name=Address" })
  address: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAddress;

  @Metadata({ data: "json, name=AlternatePhone", elemType: operations.GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone })
  alternatePhone?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchAlternatePhone[];

  @Metadata({ data: "json, name=ArrivalTime" })
  arrivalTime?: string;

  @Metadata({ data: "json, name=BranchDescription" })
  branchDescription?: string;

  @Metadata({ data: "json, name=BranchFacilitiesName" })
  branchFacilitiesName?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchFacilitiesNameEnum[];

  @Metadata({ data: "json, name=BranchIdentification" })
  branchIdentification: string;

  @Metadata({ data: "json, name=BranchMediatedServiceName" })
  branchMediatedServiceName?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchMediatedServiceNameEnum[];

  @Metadata({ data: "json, name=BranchName" })
  branchName?: string;

  @Metadata({ data: "json, name=BranchOtherFacilities" })
  branchOtherFacilities?: string[];

  @Metadata({ data: "json, name=BranchOtherMediatedServices" })
  branchOtherMediatedServices?: string[];

  @Metadata({ data: "json, name=BranchOtherSelfServices" })
  branchOtherSelfServices?: string[];

  @Metadata({ data: "json, name=BranchPhoto" })
  branchPhoto?: string;

  @Metadata({ data: "json, name=BranchSelfServeServiceName" })
  branchSelfServeServiceName?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchSelfServeServiceNameEnum[];

  @Metadata({ data: "json, name=BranchType" })
  branchType: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchBranchTypeEnum;

  @Metadata({ data: "json, name=CustomerSegment" })
  customerSegment: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchCustomerSegmentEnum[];

  @Metadata({ data: "json, name=DaysOfTheWeek" })
  daysOfTheWeek?: string;

  @Metadata({ data: "json, name=DepartureTime" })
  departureTime?: string;

  @Metadata({ data: "json, name=FaxNumber" })
  faxNumber?: string[];

  @Metadata({ data: "json, name=GeographicLocation" })
  geographicLocation?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation;

  @Metadata({ data: "json, name=OpeningTimes", elemType: operations.GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes })
  openingTimes: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes[];

  @Metadata({ data: "json, name=Organisation" })
  organisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOrganisation;

  @Metadata({ data: "json, name=ParkingLocation" })
  parkingLocation?: string;

  @Metadata({ data: "json, name=PlannedBranchClosure", elemType: operations.GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure })
  plannedBranchClosure?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure[];

  @Metadata({ data: "json, name=StopName" })
  stopName?: string;

  @Metadata({ data: "json, name=TelephoneNumber" })
  telephoneNumber: string;
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum {
    UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum {
    HttpsWwwOpenbankingOrgUkOpenLicence = "https://www.openbanking.org.uk/open-licence"
}

export enum GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum {
    HttpsWwwOpenbankingOrgUkTerms = "https://www.openbanking.org.uk/terms"
}


export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Agreement" })
  agreement: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated: Date;

  @Metadata({ data: "json, name=License" })
  license: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;

  @Metadata({ data: "json, name=TermsOfUse" })
  termsOfUse: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;

  @Metadata({ data: "json, name=TotalResults" })
  totalResults: number;
}


export class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch })
  data: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranch[];

  @Metadata({ data: "json, name=meta" })
  meta: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}


export class GetBranchesResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredErrorObject?: GetBranches400ErrorObject;

  @Metadata()
  fourHundredAndEightErrorObject?: GetBranches408ErrorObject;

  @Metadata()
  fourHundredAndTwentyNineErrorObject?: GetBranches429ErrorObject;

  @Metadata()
  fiveHundredErrorObject?: GetBranches500ErrorObject;

  @Metadata()
  fiveHundredAndThreeErrorObject?: GetBranches503ErrorObject;

  @Metadata()
  contentType: string;

  @Metadata()
  errorObject?: GetBranchesErrorObject;

  @Metadata()
  getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject?: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJson;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
