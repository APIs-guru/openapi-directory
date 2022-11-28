from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetBranchesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    
class GetBranches400ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_SENT_A_REQUEST_WHICH_COULD_NOT_BE_UNDERSTOOD_ = "You have sent a request which could not be understood."

class GetBranches400ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED = "400"

class GetBranches400ErrorObjectTitleEnum(str, Enum):
    BAD_REQUEST = "Bad request"


@dataclass_json
@dataclass
class GetBranches400ErrorObject:
    description: GetBranches400ErrorObjectDescriptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBranches400ErrorObjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBranches400ErrorObjectTitleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBranches408ErrorObjectDescriptionEnum(str, Enum):
    YOUR_CLIENT_HAS_FAILED_TO_SUBMIT_A_REQUEST_AND_A_TIMEOUT_HAS_OCCURRED_ = "Your client has failed to submit a request, and a timeout has occurred."

class GetBranches408ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_EIGHT = "408"

class GetBranches408ErrorObjectTitleEnum(str, Enum):
    CLIENT_TIMEOUT = "Client timeout"


@dataclass_json
@dataclass
class GetBranches408ErrorObject:
    description: GetBranches408ErrorObjectDescriptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBranches408ErrorObjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBranches408ErrorObjectTitleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBranches429ErrorObjectDescriptionEnum(str, Enum):
    YOU_HAVE_REQUESTED_THIS_RESOURCE_TOO_OFTEN_SLOW_DOWN_ = "You have requested this resource too often. Slow down."

class GetBranches429ErrorObjectStatusEnum(str, Enum):
    FOUR_HUNDRED_AND_TWENTY_NINE = "429"

class GetBranches429ErrorObjectTitleEnum(str, Enum):
    TOO_MANY_REQUESTS = "Too many requests"


@dataclass_json
@dataclass
class GetBranches429ErrorObject:
    description: GetBranches429ErrorObjectDescriptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBranches429ErrorObjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBranches429ErrorObjectTitleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBranches500ErrorObjectDescriptionEnum(str, Enum):
    AN_ERROR_OCCURRED_ON_THE_SERVER_NO_FURTHER_INFORMATION_IS_AVAILABLE_ = "An error occurred on the server. No further information is available."

class GetBranches500ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED = "500"

class GetBranches500ErrorObjectTitleEnum(str, Enum):
    INTERNAL_SERVER_ERROR = "Internal server error"


@dataclass_json
@dataclass
class GetBranches500ErrorObject:
    description: GetBranches500ErrorObjectDescriptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBranches500ErrorObjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBranches500ErrorObjectTitleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetBranches503ErrorObjectDescriptionEnum(str, Enum):
    THE_SERVICE_IS_TEMPORARILY_UNAVAILABLE_ = "The service is temporarily unavailable."

class GetBranches503ErrorObjectStatusEnum(str, Enum):
    FIVE_HUNDRED_AND_THREE = "503"

class GetBranches503ErrorObjectTitleEnum(str, Enum):
    SERVICE_TEMPORARILY_UNAVAILABLE = "Service temporarily unavailable"


@dataclass_json
@dataclass
class GetBranches503ErrorObject:
    description: GetBranches503ErrorObjectDescriptionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: GetBranches503ErrorObjectStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: GetBranches503ErrorObjectTitleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class GetBranchesErrorObject:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
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
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAddress
    Postal Address
    """
    
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    building_number_or_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildingNumberOrName') }})
    country_sub_division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountrySubDivision') }})
    optional_address_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptionalAddressField') }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostCode') }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreetName') }})
    town_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TownName') }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAlternatePhone:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAlternatePhone
    Alternative Phone Number
    """
    
    alternate_telephone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlternateTelephoneNumber') }})
    alternate_telephone_number_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlternateTelephoneNumberDescription') }})
    
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
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchGeographicLocation
    Geographic Coordinates
    """
    
    latitude: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Latitude') }})
    longitude: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Longitude') }})
    
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
    closing_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClosingTime') }})
    opening_day: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningDay') }})
    opening_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningTime') }})
    unavailable_finish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnavailableFinishTime') }})
    unavailable_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnavailableStartTime') }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnum(str, Enum):
    UK = "UK"
    EU = "EU"


@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrand:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrand
    Brand
    """
    
    trademark_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrademarkID') }})
    trademark_ipo_code: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrademarkIPOCode') }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisationOrganisationName:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisationOrganisationName
    Organisation Name
    """
    
    legal_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LegalName') }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisation:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisation
    Parent organisation
    """
    
    organisation_name: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisationOrganisationName = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganisationName') }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BIC') }})
    lei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LEI') }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisation:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisation
    Organisation
    """
    
    brand: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrand = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Brand') }})
    parent_organisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentOrganisation') }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchPlannedBranchClosure:
    r"""GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchPlannedBranchClosure
    Planned branch closure
    """
    
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranch:
    atm_at_branch: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ATMAtBranch') }})
    address: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAddress = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    branch_identification: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchIdentification') }})
    branch_type: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchType') }})
    customer_segment: List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerSegment') }})
    opening_times: List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpeningTimes') }})
    organisation: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Organisation') }})
    telephone_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TelephoneNumber') }})
    accessibility_types: Optional[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessibilityTypes') }})
    alternate_phone: Optional[List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAlternatePhone]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlternatePhone') }})
    arrival_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArrivalTime') }})
    branch_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchDescription') }})
    branch_facilities_name: Optional[List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchFacilitiesName') }})
    branch_mediated_service_name: Optional[List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchMediatedServiceName') }})
    branch_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchName') }})
    branch_other_facilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchOtherFacilities') }})
    branch_other_mediated_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchOtherMediatedServices') }})
    branch_other_self_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchOtherSelfServices') }})
    branch_photo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchPhoto') }})
    branch_self_serve_service_name: Optional[List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BranchSelfServeServiceName') }})
    days_of_the_week: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DaysOfTheWeek') }})
    departure_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DepartureTime') }})
    fax_number: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaxNumber') }})
    geographic_location: Optional[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchGeographicLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeographicLocation') }})
    parking_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParkingLocation') }})
    planned_branch_closure: Optional[List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchPlannedBranchClosure]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlannedBranchClosure') }})
    stop_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StopName') }})
    
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum(str, Enum):
    USE_OF_THE_AP_IS_AND_ANY_RELATED_DATA_WILL_BE_SUBJECT_TO_THE_TERMS_OF_THE_OPEN_LICENCE_AND_SUBJECT_TO_TERMS_AND_CONDITIONS = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_OPEN_LICENCE = "https://www.openbanking.org.uk/open-licence"

class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum(str, Enum):
    HTTPS_WWW_OPENBANKING_ORG_UK_TERMS = "https://www.openbanking.org.uk/terms"


@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData:
    agreement: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Agreement') }})
    last_updated: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    license: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('License') }})
    terms_of_use: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TermsOfUse') }})
    total_results: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalResults') }})
    

@dataclass_json
@dataclass
class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON:
    data: List[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranch] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetBranchesRequest:
    headers: GetBranchesHeaders = field()
    

@dataclass
class GetBranchesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    four_hundred_error_object: Optional[GetBranches400ErrorObject] = field(default=None)
    four_hundred_and_eight_error_object: Optional[GetBranches408ErrorObject] = field(default=None)
    four_hundred_and_twenty_nine_error_object: Optional[GetBranches429ErrorObject] = field(default=None)
    five_hundred_error_object: Optional[GetBranches500ErrorObject] = field(default=None)
    five_hundred_and_three_error_object: Optional[GetBranches503ErrorObject] = field(default=None)
    error_object: Optional[GetBranchesErrorObject] = field(default=None)
    get_branches_200_application_prs_openbanking_opendata_v1_3_plus_json_object: Optional[GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON] = field(default=None)
    
