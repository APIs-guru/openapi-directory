import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidHotspot20PathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs extends SpeakeasyBase {
    mcc?: string;
    mnc?: string;
}
export declare enum UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum {
    One = "1",
    Zero = "0"
}
export declare class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods extends SpeakeasyBase {
    authenticationTypes?: Map<string, any>;
    id?: string;
}
export declare class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms extends SpeakeasyBase {
    format?: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;
    methods?: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[];
    realm?: string;
}
export declare enum UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum {
    PrivateNetwork = "Private network",
    PrivateNetworkWithGuestAccess = "Private network with guest access",
    ChargeablePublicNetwork = "Chargeable public network",
    FreePublicNetwork = "Free public network",
    PersonalDeviceNetwork = "Personal device network",
    EmergencyServicesOnlyNetwork = "Emergency services only network",
    TestOrExperimental = "Test or experimental",
    Wildcard = "Wildcard"
}
/**
 * Operator settings for this SSID
**/
export declare class UpdateNetworkWirelessSsidHotspot20RequestBodyOperator extends SpeakeasyBase {
    name?: string;
}
export declare enum UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum {
    Unspecified = "Unspecified",
    UnspecifiedAssembly = "Unspecified Assembly",
    Arena = "Arena",
    Stadium = "Stadium",
    PassengerTerminal = "Passenger Terminal",
    Amphitheater = "Amphitheater",
    AmusementPark = "Amusement Park",
    PlaceOfWorship = "Place of Worship",
    ConventionCenter = "Convention Center",
    Library = "Library",
    Museum = "Museum",
    Restaurant = "Restaurant",
    Theater = "Theater",
    Bar = "Bar",
    CoffeeShop = "Coffee Shop",
    ZooOrAquarium = "Zoo or Aquarium",
    EmergencyCoordinationCenter = "Emergency Coordination Center",
    UnspecifiedBusiness = "Unspecified Business",
    DoctorOrDentistOffice = "Doctor or Dentist office",
    Bank = "Bank",
    FireStation = "Fire Station",
    PoliceStation = "Police Station",
    PostOffice = "Post Office",
    ProfessionalOffice = "Professional Office",
    ResearchAndDevelopmentFacility = "Research and Development Facility",
    AttorneyOffice = "Attorney Office",
    UnspecifiedEducational = "Unspecified Educational",
    SchoolPrimary = "School, Primary",
    SchoolSecondary = "School, Secondary",
    UniversityOrCollege = "University or College",
    UnspecifiedFactoryAndIndustrial = "Unspecified Factory and Industrial",
    Factory = "Factory",
    UnspecifiedInstitutional = "Unspecified Institutional",
    Hospital = "Hospital",
    LongTermCareFacility = "Long-Term Care Facility",
    AlcoholAndDrugRehabilitationCenter = "Alcohol and Drug Rehabilitation Center",
    GroupHome = "Group Home",
    PrisonOrJail = "Prison or Jail",
    UnspecifiedMercantile = "Unspecified Mercantile",
    RetailStore = "Retail Store",
    GroceryMarket = "Grocery Market",
    AutomotiveServiceStation = "Automotive Service Station",
    ShoppingMall = "Shopping Mall",
    GasStation = "Gas Station",
    UnspecifiedResidential = "Unspecified Residential",
    PrivateResidence = "Private Residence",
    HotelOrMotel = "Hotel or Motel",
    Dormitory = "Dormitory",
    BoardingHouse = "Boarding House",
    UnspecifiedStorage = "Unspecified Storage",
    UnspecifiedUtilityAndMiscellaneous = "Unspecified Utility and Miscellaneous",
    UnspecifiedVehicular = "Unspecified Vehicular",
    AutomobileOrTruck = "Automobile or Truck",
    Airplane = "Airplane",
    Bus = "Bus",
    Ferry = "Ferry",
    ShipOrBoat = "Ship or Boat",
    Train = "Train",
    MotorBike = "Motor Bike",
    UnspecifiedOutdoor = "Unspecified Outdoor",
    MuniMeshNetwork = "Muni-mesh Network",
    CityPark = "City Park",
    RestArea = "Rest Area",
    TrafficControl = "Traffic Control",
    BusStop = "Bus Stop",
    Kiosk = "Kiosk"
}
/**
 * Venue settings for this SSID
**/
export declare class UpdateNetworkWirelessSsidHotspot20RequestBodyVenue extends SpeakeasyBase {
    name?: string;
    type?: UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;
}
export declare class UpdateNetworkWirelessSsidHotspot20RequestBody extends SpeakeasyBase {
    domains?: string[];
    enabled?: boolean;
    mccMncs?: UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs[];
    naiRealms?: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms[];
    networkAccessType?: UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;
    operator?: UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;
    roamConsortOis?: string[];
    venue?: UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
}
export declare class UpdateNetworkWirelessSsidHotspot20Request extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidHotspot20PathParams;
    request?: UpdateNetworkWirelessSsidHotspot20RequestBody;
}
export declare class UpdateNetworkWirelessSsidHotspot20Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidHotspot20200ApplicationJsonObject?: Map<string, any>;
}
