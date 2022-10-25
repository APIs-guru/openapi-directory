from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetBranchesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class GetBranchesRequest:
    headers: GetBranchesHeaders = field(default=None)
    
class GetBranches400ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_SENT_A_REQUEST_WHICH_COULD_NOT_BE_UNDERSTOOD_ = "You have sent a request which could not be understood."

class GetBranches400ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED = "400"

class GetBranches400ErrorObjectTitleEnum(str, Enum):
    BAD_REQUEST = "Bad request"


@dataclass_json
@dataclass
class GetBranches400ErrorObject:
    description: GetBranches400ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetBranches400ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetBranches400ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetBranches408ErrorObjectDescriptionEnum(str, Enum):
    YOUR_CLIENT_HAS_FAILED_TO_SUBMIT_A_REQUEST_AND_A_TIMEOUT_HAS_OCCURRED_ = "Your client has failed to submit a request, and a timeout has occurred."

class GetBranches408ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_EIGHT = "408"

class GetBranches408ErrorObjectTitleEnum(str, Enum):
    CLIENT_TIMEOUT = "Client timeout"


@dataclass_json
@dataclass
class GetBranches408ErrorObject:
    description: GetBranches408ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetBranches408ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetBranches408ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetBranches429ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_REQUESTED_THIS_RESOURCE_TOO_OFTEN_SLOW_DOWN_ = "You have requested this resource too often. Slow down."

class GetBranches429ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_TWENTY_NINE = "429"

class GetBranches429ErrorObjectTitleEnum(str, Enum):
    TOO_MANY_REQUESTS = "Too many requests"


@dataclass_json
@dataclass
class GetBranches429ErrorObject:
    description: GetBranches429ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetBranches429ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetBranches429ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetBranches500ErrorObjectDescriptionEnum(str, Enum):
    AN_ERROR_OCCURRED_ON_THE_SERVER_NO_FURTHER_INFORMATION_IS_AVAILABLE_ = "An error occurred on the server. No further information is available."

class GetBranches500ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED = "500"

class GetBranches500ErrorObjectTitleEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class GetBranches500ErrorObject:
    description: GetBranches500ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetBranches500ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetBranches500ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetBranches503ErrorObjectDescriptionEnum(str, Enum):
    THE_SERVICE_IS_TEMPORARILY_UNAVAILABLE_ = "The service is temporarily unavailable."

class GetBranches503ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED_AND_THREE = "503"

class GetBranches503ErrorObjectTitleEnum(str, Enum):
    SERVICE_TEMPORARILY_UNAVAILABLE = "Service temporarily unavailable"


@dataclass_json
@dataclass
class GetBranches503ErrorObject:
    description: GetBranches503ErrorObjectDescriptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: GetBranches503ErrorObjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: GetBranches503ErrorObjectTitleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetBranchesErrorObject:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum(str, Enum):
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
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAddress:
    building_number_or_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildingNumberOrName' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    country_sub_division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountrySubDivision' }})
    optional_address_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptionalAddressField' }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostCode' }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreetName' }})
    town_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TownName' }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAlternatePhone:
    alternate_telephone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlternateTelephoneNumber' }})
    alternate_telephone_number_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlternateTelephoneNumberDescription' }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum(str, Enum):
    BUSINESS_IT_SUPPORT = "BusinessITSupport"
    COLLECTION_LOCKERS = "CollectionLockers"
    MEETING_ROOMS = "MeetingRooms"
    PARKING = "Parking"
    WIFI = "Wifi"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum(str, Enum):
    BUREAU_DE_CHANGE = "BureauDeChange"
    BUSINESS_COUNTER = "BusinessCounter"
    CARD_ISSUANCE_FACILITY = "CardIssuanceFacility"
    COUNTER_SERVICES = "CounterServices"
    DRIVE_THRU = "DriveThru"
    MORTGAGE_ADVISOR = "MortgageAdvisor"
    NIGHT_SAFE = "NightSafe"
    ON_DEMAND_CURRENCY = "OnDemandCurrency"
    PREMIER_COUNTER = "PremierCounter"
    VIDEO_BANKING = "VideoBanking"
    WHEEL_CHAIR_ACCESS = "WheelChairAccess"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum(str, Enum):
    ACCOUNT_VERIFICATION_SERVICE = "AccountVerificationService"
    ASSISTED_SERVICE_COUNTER = "AssistedServiceCounter"
    BUSINESS_DEPOSIT_TERMINAL = "BusinessDepositTerminal"
    CASH_CHEQUE_DEPOSIT_MACHINE_COIN = "CashChequeDepositMachineCoin"
    CASH_CHEQUE_DEPOSIT_MACHINE_NO_COIN = "CashChequeDepositMachineNoCoin"
    EXTERNAL_ATM_AUDIO = "ExternalAtmAudio"
    EXTERNAL_ATM_NO_AUDIO = "ExternalAtmNoAudio"
    EXTERNAL_QUICK_SERVICE_POINT = "ExternalQuickServicePoint"
    INTERNAL_ATM_AUDIO = "InternalAtmAudio"
    INTERNAL_ATM_NO_AUDIO = "InternalAtmNoAudio"
    INTERNAL_QUICK_SERVICE_POINT = "InternalQuickServicePoint"
    LODGEMENT_DEVICE = "LodgementDevice"
    ONLINE_BANKING_POINT = "OnlineBankingPoint"
    QUICK_DEPOSIT = "QuickDeposit"
    SATURDAY_COUNTER_SERVICE = "SaturdayCounterService"
    SELF_SERVICE_ACCOUNT_OPENING = "SelfServiceAccountOpening"
    STATEMENT_PRINTER = "StatementPrinter"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnum(str, Enum):
    PHYSICAL = "Physical"
    MOBILE = "Mobile"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum(str, Enum):
    BUSINESS = "Business"
    CORPORATE = "Corporate"
    PERSONAL = "Personal"
    PREMIER = "Premier"
    PRIVATE = "Private"
    SELECT = "Select"
    SME = "SME"
    WEALTH = "Wealth"


@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchGeographicLocation:
    latitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Latitude' }})
    longitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Longitude' }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum(str, Enum):
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"
    SUNDAY = "Sunday"
    PUBLIC_AND_BANK_HOLIDAY = "Public and Bank Holiday"


@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimes:
    closing_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClosingTime' }})
    opening_day: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningDay' }})
    opening_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningTime' }})
    unavailable_finish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnavailableFinishTime' }})
    unavailable_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnavailableStartTime' }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnum(str, Enum):
    UK = "UK"
    EU = "EU"


@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrand:
    trademark_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrademarkID' }})
    trademark_ipo_code: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrademarkIPOCode' }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisationOrganisationName:
    legal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LegalName' }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisation:
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BIC' }})
    lei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LEI' }})
    organisation_name: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisationOrganisationName = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganisationName' }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisation:
    brand: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrand = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Brand' }})
    parent_organisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentOrganisation' }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchPlannedBranchClosure:
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate' }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranch:
    atm_at_branch: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ATMAtBranch' }})
    accessibility_types: Optional[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessibilityTypes' }})
    address: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAddress = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    alternate_phone: Optional[List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAlternatePhone]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlternatePhone' }})
    arrival_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArrivalTime' }})
    branch_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchDescription' }})
    branch_facilities_name: Optional[List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchFacilitiesName' }})
    branch_identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchIdentification' }})
    branch_mediated_service_name: Optional[List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchMediatedServiceName' }})
    branch_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchName' }})
    branch_other_facilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchOtherFacilities' }})
    branch_other_mediated_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchOtherMediatedServices' }})
    branch_other_self_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchOtherSelfServices' }})
    branch_photo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchPhoto' }})
    branch_self_serve_service_name: Optional[List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchSelfServeServiceName' }})
    branch_type: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BranchType' }})
    customer_segment: List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerSegment' }})
    days_of_the_week: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DaysOfTheWeek' }})
    departure_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DepartureTime' }})
    fax_number: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaxNumber' }})
    geographic_location: Optional[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchGeographicLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeographicLocation' }})
    opening_times: List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpeningTimes' }})
    organisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Organisation' }})
    parking_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParkingLocation' }})
    planned_branch_closure: Optional[List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchPlannedBranchClosure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlannedBranchClosure' }})
    stop_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopName' }})
    telephone_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TelephoneNumber' }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum(str, Enum):
    USE_OF_THE_AP_IS_AND_ANY_RELATED_DATA_WILL_BE_SUBJECT_TO_THE_TERMS_OF_THE_OPEN_LICENCE_AND_SUBJECT_TO_TERMS_AND_CONDITIONS = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_OPEN_LICENCE = "https://www.openbanking.org.uk/open-licence"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_TERMS = "https://www.openbanking.org.uk/terms"


@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData:
    agreement: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Agreement' }})
    last_updated: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    license: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'License' }})
    terms_of_use: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TermsOfUse' }})
    total_results: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalResults' }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON:
    data: List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class GetBranchesResponse:
    four_hundred_error_object: Optional[GetBranches400ErrorObject] = field(default=None)
    four_hundred_and_eight_error_object: Optional[GetBranches408ErrorObject] = field(default=None)
    four_hundred_and_twenty_nine_error_object: Optional[GetBranches429ErrorObject] = field(default=None)
    five_hundred_error_object: Optional[GetBranches500ErrorObject] = field(default=None)
    five_hundred_and_three_error_object: Optional[GetBranches503ErrorObject] = field(default=None)
    content_type: str = field(default=None)
    error_object: Optional[GetBranchesErrorObject] = field(default=None)
    get_branches_200_application_prs_openbanking_opendata_v1_3_plus_json_object: Optional[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
