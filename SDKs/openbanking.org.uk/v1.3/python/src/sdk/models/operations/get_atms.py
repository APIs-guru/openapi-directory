from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAtmsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class GetAtmsRequest:
    headers: GetAtmsHeaders = field(default=None)
    
class GetAtms400ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_SENT_A_REQUEST_WHICH_COULD_NOT_BE_UNDERSTOOD_ = "You have sent a request which could not be understood."

class GetAtms400ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED = "400"

class GetAtms400ErrorObjectTitleEnum(str, Enum):
    BAD_REQUEST = "Bad request"


@dataclass_json
@dataclass
class GetAtms400ErrorObject:
    description: GetAtms400ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetAtms400ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetAtms400ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetAtms408ErrorObjectDescriptionEnum(str, Enum):
    YOUR_CLIENT_HAS_FAILED_TO_SUBMIT_A_REQUEST_AND_A_TIMEOUT_HAS_OCCURRED_ = "Your client has failed to submit a request, and a timeout has occurred."

class GetAtms408ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_EIGHT = "408"

class GetAtms408ErrorObjectTitleEnum(str, Enum):
    CLIENT_TIMEOUT = "Client timeout"


@dataclass_json
@dataclass
class GetAtms408ErrorObject:
    description: GetAtms408ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetAtms408ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetAtms408ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetAtms429ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_REQUESTED_THIS_RESOURCE_TOO_OFTEN_SLOW_DOWN_ = "You have requested this resource too often. Slow down."

class GetAtms429ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_TWENTY_NINE = "429"

class GetAtms429ErrorObjectTitleEnum(str, Enum):
    TOO_MANY_REQUESTS = "Too many requests"


@dataclass_json
@dataclass
class GetAtms429ErrorObject:
    description: GetAtms429ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetAtms429ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetAtms429ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetAtms500ErrorObjectDescriptionEnum(str, Enum):
    AN_ERROR_OCCURRED_ON_THE_SERVER_NO_FURTHER_INFORMATION_IS_AVAILABLE_ = "An error occurred on the server. No further information is available."

class GetAtms500ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED = "500"

class GetAtms500ErrorObjectTitleEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class GetAtms500ErrorObject:
    description: GetAtms500ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetAtms500ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetAtms500ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetAtms503ErrorObjectDescriptionEnum(str, Enum):
    THE_SERVICE_IS_TEMPORARILY_UNAVAILABLE_ = "The service is temporarily unavailable."

class GetAtms503ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED_AND_THREE = "503"

class GetAtms503ErrorObjectTitleEnum(str, Enum):
    SERVICE_TEMPORARILY_UNAVAILABLE = "Service temporarily unavailable"


@dataclass_json
@dataclass
class GetAtms503ErrorObject:
    description: GetAtms503ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetAtms503ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetAtms503ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetAtmsErrorObject:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum(str, Enum):
    BALANCE = "Balance"
    BILL_PAYMENTS = "BillPayments"
    CASH_DEPOSITS = "CashDeposits"
    CASH_WITHDRAWAL = "CashWithdrawal"
    CHARITY_DONATION = "CharityDonation"
    CHEQUE_BOOK_REQUEST = "ChequeBookRequest"
    CHEQUE_DEPOSITS = "ChequeDeposits"
    FAST_CASH = "FastCash"
    MINI_STATEMENT = "MiniStatement"
    MOBILE_BANKING_REGISTRATION = "MobileBankingRegistration"
    MOBILE_PAYMENT_REGISTRATION = "MobilePaymentRegistration"
    MOBILE_PHONE_TOP_UP = "MobilePhoneTopUp"
    ORDER_STATEMENT = "OrderStatement"
    PIN_ACTIVATION = "PINActivation"
    PIN_CHANGE = "PINChange"

class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum(str, Enum):
    AUDIO_CASH_MACHINE = "AudioCashMachine"
    AUTOMATIC_DOORS = "AutomaticDoors"
    CHAIR_ACCESS = "ChairAccess"
    DRIVE_THRU = "DriveThru"
    EXTERNAL_RAMP = "ExternalRamp"
    INDUCTION_LOOP = "InductionLoop"
    INTERNAL_RAMP = "InternalRamp"
    LEVEL_ACCESS = "LevelAccess"
    LOWER_LEVEL_COUNTER = "LowerLevelCounter"
    WHEELCHAIR_ACCESS = "WheelchairAccess"


@dataclass_json
@dataclass
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAddress:
    building_number_or_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildingNumberOrName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    country_sub_division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountrySubDivision' }})
    optional_address_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptionalAddressField' }})
    post_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostCode' }})
    street_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreetName' }})
    town_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TownName' }})
    

@dataclass_json
@dataclass
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmGeographicLocation:
    latitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Latitude' }})
    longitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Longitude' }})
    
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum(str, Enum):
    AIRPORT = "Airport"
    BANK_SPECIALISED_OUTLET = "BankSpecialisedOutlet"
    BRANCH_EXTERNAL = "BranchExternal"
    BRANCH_INTERNAL = "BranchInternal"
    BRANCH_LOBBY = "BranchLobby"
    BUREAU_DE_CHANGE = "BureauDeChange"
    COACH_STATION = "CoachStation"
    COMMERCIAL_SPACE_INTERNAL = "CommercialSpaceInternal"
    CONVENIENCE_STORE = "ConvenienceStore"
    EXHIBITION_CENTRE = "ExhibitionCentre"
    FACTORY_OR_OFFICE = "FactoryOrOffice"
    FILLING_STATION = "FillingStation"
    FINANCIAL_INSTITUTION = "FinancialInstitution"
    GOVERNMENT_OFFICE = "GovernmentOffice"
    HOSPITAL = "Hospital"
    HOTEL = "Hotel"
    KIOSK_POD = "KioskPod"
    LEISURE_CENTRE = "LeisureCentre"
    PLEASURE_PARK = "PleasurePark"
    PUBLIC_HOUSE = "PublicHouse"
    RAILWAY_STATION = "RailwayStation"
    REMOTE_UNIT = "RemoteUnit"
    RETAILER_DEPARTMENT_STORE = "RetailerDepartmentStore"
    RETAILER_OUTLET = "RetailerOutlet"
    SEAPORT_TERMINAL = "SeaportTerminal"
    SERVICE_STATION = "ServiceStation"
    SHOPPING_CENTRE_EXTERNAL = "ShoppingCentreExternal"
    SHOPPING_CENTRE_INTERNAL = "ShoppingCentreInternal"
    STORAGE_DEPOT = "StorageDepot"
    SUPERMARKET_EXTERNAL = "SupermarketExternal"
    SUPERMARKET_INTERNAL = "SupermarketInternal"
    UNDERGROUND_RAILWAY_STATION = "UndergroundRailwayStation"
    UNIVERSITY_OR_COLLEGE = "UniversityOrCollege"

class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnum(str, Enum):
    POUND_5 = "£5"
    POUND_10 = "£10"
    POUND_20 = "£20"
    POUND_50 = "£50"
    POUND_100 = "£100"

class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrandTrademarkIpoCodeEnum(str, Enum):
    UK = "UK"
    EU = "EU"


@dataclass_json
@dataclass
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrand:
    trademark_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrademarkID' }})
    trademark_ipo_code: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrandTrademarkIpoCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrademarkIPOCode' }})
    

@dataclass_json
@dataclass
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationParentOrganisationOrganisationName:
    legal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LegalName' }})
    

@dataclass_json
@dataclass
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationParentOrganisation:
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BIC' }})
    lei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LEI' }})
    organisation_name: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationParentOrganisationOrganisationName = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganisationName' }})
    

@dataclass_json
@dataclass
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisation:
    brand: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrand = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Brand' }})
    parent_organisation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationParentOrganisation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentOrganisation' }})
    

@dataclass_json
@dataclass
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtm:
    atmid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ATMID' }})
    atm_services: List[GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ATMServices' }})
    accessibility_types: Optional[List[GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessibilityTypes' }})
    additional_atm_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalATMServices' }})
    address: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAddress = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    branch_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchIdentification' }})
    currency: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    geographic_location: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmGeographicLocation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeographicLocation' }})
    location_category: Optional[GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationCategory' }})
    minimum_value_dispensed: Optional[GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumValueDispensed' }})
    organisation: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Organisation' }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SiteID' }})
    site_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SiteName' }})
    supported_languages: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedLanguages' }})
    
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum(str, Enum):
    USE_OF_THE_AP_IS_AND_ANY_RELATED_DATA_WILL_BE_SUBJECT_TO_THE_TERMS_OF_THE_OPEN_LICENCE_AND_SUBJECT_TO_TERMS_AND_CONDITIONS = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"

class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_OPEN_LICENCE = "https://www.openbanking.org.uk/open-licence"

class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_TERMS = "https://www.openbanking.org.uk/terms"


@dataclass_json
@dataclass
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData:
    agreement: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Agreement' }})
    last_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    license: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'License' }})
    terms_of_use: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TermsOfUse' }})
    total_results: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalResults' }})
    

@dataclass_json
@dataclass
class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSON:
    data: List[GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetAtmsResponse:
    four_hundred_error_object: Optional[GetAtms400ErrorObject] = field(default=None)
    four_hundred_and_eight_error_object: Optional[GetAtms408ErrorObject] = field(default=None)
    four_hundred_and_twenty_nine_error_object: Optional[GetAtms429ErrorObject] = field(default=None)
    five_hundred_error_object: Optional[GetAtms500ErrorObject] = field(default=None)
    five_hundred_and_three_error_object: Optional[GetAtms503ErrorObject] = field(default=None)
    content_type: str = field(default=None)
    error_object: Optional[GetAtmsErrorObject] = field(default=None)
    get_atms_200_application_prs_openbanking_opendata_v1_3_plus_json_object: Optional[GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSON] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
