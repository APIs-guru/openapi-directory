import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidHotspot20PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs extends SpeakeasyBase {
  @Metadata({ data: "json, name=mcc" })
  mcc?: string;

  @Metadata({ data: "json, name=mnc" })
  mnc?: string;
}

export enum UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum {
    One = "1"
,    Zero = "0"
}


export class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticationTypes" })
  authenticationTypes?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;

  @Metadata({ data: "json, name=methods", elemType: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods })
  methods?: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[];

  @Metadata({ data: "json, name=realm" })
  realm?: string;
}

export enum UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum {
    PrivateNetwork = "Private network"
,    PrivateNetworkWithGuestAccess = "Private network with guest access"
,    ChargeablePublicNetwork = "Chargeable public network"
,    FreePublicNetwork = "Free public network"
,    PersonalDeviceNetwork = "Personal device network"
,    EmergencyServicesOnlyNetwork = "Emergency services only network"
,    TestOrExperimental = "Test or experimental"
,    Wildcard = "Wildcard"
}


// UpdateNetworkWirelessSsidHotspot20RequestBodyOperator
/** 
 * Operator settings for this SSID
**/
export class UpdateNetworkWirelessSsidHotspot20RequestBodyOperator extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}

export enum UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum {
    Unspecified = "Unspecified"
,    UnspecifiedAssembly = "Unspecified Assembly"
,    Arena = "Arena"
,    Stadium = "Stadium"
,    PassengerTerminal = "Passenger Terminal"
,    Amphitheater = "Amphitheater"
,    AmusementPark = "Amusement Park"
,    PlaceOfWorship = "Place of Worship"
,    ConventionCenter = "Convention Center"
,    Library = "Library"
,    Museum = "Museum"
,    Restaurant = "Restaurant"
,    Theater = "Theater"
,    Bar = "Bar"
,    CoffeeShop = "Coffee Shop"
,    ZooOrAquarium = "Zoo or Aquarium"
,    EmergencyCoordinationCenter = "Emergency Coordination Center"
,    UnspecifiedBusiness = "Unspecified Business"
,    DoctorOrDentistOffice = "Doctor or Dentist office"
,    Bank = "Bank"
,    FireStation = "Fire Station"
,    PoliceStation = "Police Station"
,    PostOffice = "Post Office"
,    ProfessionalOffice = "Professional Office"
,    ResearchAndDevelopmentFacility = "Research and Development Facility"
,    AttorneyOffice = "Attorney Office"
,    UnspecifiedEducational = "Unspecified Educational"
,    SchoolPrimary = "School, Primary"
,    SchoolSecondary = "School, Secondary"
,    UniversityOrCollege = "University or College"
,    UnspecifiedFactoryAndIndustrial = "Unspecified Factory and Industrial"
,    Factory = "Factory"
,    UnspecifiedInstitutional = "Unspecified Institutional"
,    Hospital = "Hospital"
,    LongTermCareFacility = "Long-Term Care Facility"
,    AlcoholAndDrugRehabilitationCenter = "Alcohol and Drug Rehabilitation Center"
,    GroupHome = "Group Home"
,    PrisonOrJail = "Prison or Jail"
,    UnspecifiedMercantile = "Unspecified Mercantile"
,    RetailStore = "Retail Store"
,    GroceryMarket = "Grocery Market"
,    AutomotiveServiceStation = "Automotive Service Station"
,    ShoppingMall = "Shopping Mall"
,    GasStation = "Gas Station"
,    UnspecifiedResidential = "Unspecified Residential"
,    PrivateResidence = "Private Residence"
,    HotelOrMotel = "Hotel or Motel"
,    Dormitory = "Dormitory"
,    BoardingHouse = "Boarding House"
,    UnspecifiedStorage = "Unspecified Storage"
,    UnspecifiedUtilityAndMiscellaneous = "Unspecified Utility and Miscellaneous"
,    UnspecifiedVehicular = "Unspecified Vehicular"
,    AutomobileOrTruck = "Automobile or Truck"
,    Airplane = "Airplane"
,    Bus = "Bus"
,    Ferry = "Ferry"
,    ShipOrBoat = "Ship or Boat"
,    Train = "Train"
,    MotorBike = "Motor Bike"
,    UnspecifiedOutdoor = "Unspecified Outdoor"
,    MuniMeshNetwork = "Muni-mesh Network"
,    CityPark = "City Park"
,    RestArea = "Rest Area"
,    TrafficControl = "Traffic Control"
,    BusStop = "Bus Stop"
,    Kiosk = "Kiosk"
}


// UpdateNetworkWirelessSsidHotspot20RequestBodyVenue
/** 
 * Venue settings for this SSID
**/
export class UpdateNetworkWirelessSsidHotspot20RequestBodyVenue extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;
}


export class UpdateNetworkWirelessSsidHotspot20RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains" })
  domains?: string[];

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=mccMncs", elemType: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs })
  mccMncs?: UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs[];

  @Metadata({ data: "json, name=naiRealms", elemType: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms })
  naiRealms?: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms[];

  @Metadata({ data: "json, name=networkAccessType" })
  networkAccessType?: UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;

  @Metadata({ data: "json, name=operator" })
  operator?: UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;

  @Metadata({ data: "json, name=roamConsortOis" })
  roamConsortOis?: string[];

  @Metadata({ data: "json, name=venue" })
  venue?: UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
}


export class UpdateNetworkWirelessSsidHotspot20Request extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidHotspot20PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidHotspot20RequestBody;
}


export class UpdateNetworkWirelessSsidHotspot20Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidHotspot20200ApplicationJsonObject?: Map<string, any>;
}
