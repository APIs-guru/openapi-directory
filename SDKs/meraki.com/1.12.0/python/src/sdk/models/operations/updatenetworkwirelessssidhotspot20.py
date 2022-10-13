from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidHotspot20PathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs:
    mcc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mcc' }})
    mnc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mnc' }})
    
class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum(str, Enum):
    ONE = "1"
    ZERO = "0"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods:
    authentication_types: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationTypes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms:
    format: Optional[UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    methods: Optional[List[UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methods' }})
    realm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realm' }})
    
class UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum(str, Enum):
    PRIVATE_NETWORK = "Private network"
    PRIVATE_NETWORK_WITH_GUEST_ACCESS = "Private network with guest access"
    CHARGEABLE_PUBLIC_NETWORK = "Chargeable public network"
    FREE_PUBLIC_NETWORK = "Free public network"
    PERSONAL_DEVICE_NETWORK = "Personal device network"
    EMERGENCY_SERVICES_ONLY_NETWORK = "Emergency services only network"
    TEST_OR_EXPERIMENTAL = "Test or experimental"
    WILDCARD = "Wildcard"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidHotspot20RequestBodyOperator:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
class UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    UNSPECIFIED_ASSEMBLY = "Unspecified Assembly"
    ARENA = "Arena"
    STADIUM = "Stadium"
    PASSENGER_TERMINAL = "Passenger Terminal"
    AMPHITHEATER = "Amphitheater"
    AMUSEMENT_PARK = "Amusement Park"
    PLACE_OF_WORSHIP = "Place of Worship"
    CONVENTION_CENTER = "Convention Center"
    LIBRARY = "Library"
    MUSEUM = "Museum"
    RESTAURANT = "Restaurant"
    THEATER = "Theater"
    BAR = "Bar"
    COFFEE_SHOP = "Coffee Shop"
    ZOO_OR_AQUARIUM = "Zoo or Aquarium"
    EMERGENCY_COORDINATION_CENTER = "Emergency Coordination Center"
    UNSPECIFIED_BUSINESS = "Unspecified Business"
    DOCTOR_OR_DENTIST_OFFICE = "Doctor or Dentist office"
    BANK = "Bank"
    FIRE_STATION = "Fire Station"
    POLICE_STATION = "Police Station"
    POST_OFFICE = "Post Office"
    PROFESSIONAL_OFFICE = "Professional Office"
    RESEARCH_AND_DEVELOPMENT_FACILITY = "Research and Development Facility"
    ATTORNEY_OFFICE = "Attorney Office"
    UNSPECIFIED_EDUCATIONAL = "Unspecified Educational"
    SCHOOL_PRIMARY = "School, Primary"
    SCHOOL_SECONDARY = "School, Secondary"
    UNIVERSITY_OR_COLLEGE = "University or College"
    UNSPECIFIED_FACTORY_AND_INDUSTRIAL = "Unspecified Factory and Industrial"
    FACTORY = "Factory"
    UNSPECIFIED_INSTITUTIONAL = "Unspecified Institutional"
    HOSPITAL = "Hospital"
    LONG_TERM_CARE_FACILITY = "Long-Term Care Facility"
    ALCOHOL_AND_DRUG_REHABILITATION_CENTER = "Alcohol and Drug Rehabilitation Center"
    GROUP_HOME = "Group Home"
    PRISON_OR_JAIL = "Prison or Jail"
    UNSPECIFIED_MERCANTILE = "Unspecified Mercantile"
    RETAIL_STORE = "Retail Store"
    GROCERY_MARKET = "Grocery Market"
    AUTOMOTIVE_SERVICE_STATION = "Automotive Service Station"
    SHOPPING_MALL = "Shopping Mall"
    GAS_STATION = "Gas Station"
    UNSPECIFIED_RESIDENTIAL = "Unspecified Residential"
    PRIVATE_RESIDENCE = "Private Residence"
    HOTEL_OR_MOTEL = "Hotel or Motel"
    DORMITORY = "Dormitory"
    BOARDING_HOUSE = "Boarding House"
    UNSPECIFIED_STORAGE = "Unspecified Storage"
    UNSPECIFIED_UTILITY_AND_MISCELLANEOUS = "Unspecified Utility and Miscellaneous"
    UNSPECIFIED_VEHICULAR = "Unspecified Vehicular"
    AUTOMOBILE_OR_TRUCK = "Automobile or Truck"
    AIRPLANE = "Airplane"
    BUS = "Bus"
    FERRY = "Ferry"
    SHIP_OR_BOAT = "Ship or Boat"
    TRAIN = "Train"
    MOTOR_BIKE = "Motor Bike"
    UNSPECIFIED_OUTDOOR = "Unspecified Outdoor"
    MUNI_MESH_NETWORK = "Muni-mesh Network"
    CITY_PARK = "City Park"
    REST_AREA = "Rest Area"
    TRAFFIC_CONTROL = "Traffic Control"
    BUS_STOP = "Bus Stop"
    KIOSK = "Kiosk"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidHotspot20RequestBodyVenue:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidHotspot20RequestBody:
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    mcc_mncs: Optional[List[UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mccMncs' }})
    nai_realms: Optional[List[UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naiRealms' }})
    network_access_type: Optional[UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkAccessType' }})
    operator: Optional[UpdateNetworkWirelessSsidHotspot20RequestBodyOperator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    roam_consort_ois: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roamConsortOis' }})
    venue: Optional[UpdateNetworkWirelessSsidHotspot20RequestBodyVenue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'venue' }})
    

@dataclass
class UpdateNetworkWirelessSsidHotspot20Request:
    path_params: UpdateNetworkWirelessSsidHotspot20PathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidHotspot20RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidHotspot20Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_hotspot20_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
