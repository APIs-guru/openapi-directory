package operations

type UpdateNetworkWirelessSsidHotspot20PathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs struct {
	Mcc *string `json:"mcc,omitempty"`
	Mnc *string `json:"mnc,omitempty"`
}

type UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum string

const (
	UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumOne  UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum = "1"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumZero UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum = "0"
)

type UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods struct {
	AuthenticationTypes map[string]interface{} `json:"authenticationTypes,omitempty"`
	ID                  *string                `json:"id,omitempty"`
}

type UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms struct {
	Format  *UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum `json:"format,omitempty"`
	Methods []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods   `json:"methods,omitempty"`
	Realm   *string                                                           `json:"realm,omitempty"`
}

type UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum string

const (
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumPrivateNetwork                UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Private network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumPrivateNetworkWithGuestAccess UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Private network with guest access"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumChargeablePublicNetwork       UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Chargeable public network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumFreePublicNetwork             UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Free public network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumPersonalDeviceNetwork         UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Personal device network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumEmergencyServicesOnlyNetwork  UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Emergency services only network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumTestOrExperimental            UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Test or experimental"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumWildcard                      UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Wildcard"
)

type UpdateNetworkWirelessSsidHotspot20RequestBodyOperator struct {
	Name *string `json:"name,omitempty"`
}

type UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum string

const (
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecified                        UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedAssembly                UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Assembly"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumArena                              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Arena"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumStadium                            UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Stadium"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPassengerTerminal                  UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Passenger Terminal"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAmphitheater                       UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Amphitheater"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAmusementPark                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Amusement Park"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPlaceOfWorship                     UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Place of Worship"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumConventionCenter                   UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Convention Center"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumLibrary                            UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Library"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumMuseum                             UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Museum"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumRestaurant                         UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Restaurant"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumTheater                            UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Theater"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBar                                UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Bar"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumCoffeeShop                         UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Coffee Shop"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumZooOrAquarium                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Zoo or Aquarium"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumEmergencyCoordinationCenter        UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Emergency Coordination Center"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedBusiness                UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Business"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumDoctorOrDentistOffice              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Doctor or Dentist office"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBank                               UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Bank"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumFireStation                        UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Fire Station"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPoliceStation                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Police Station"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPostOffice                         UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Post Office"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumProfessionalOffice                 UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Professional Office"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumResearchAndDevelopmentFacility     UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Research and Development Facility"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAttorneyOffice                     UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Attorney Office"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedEducational             UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Educational"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumSchoolPrimary                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "School, Primary"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumSchoolSecondary                    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "School, Secondary"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUniversityOrCollege                UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "University or College"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedFactoryAndIndustrial    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Factory and Industrial"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumFactory                            UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Factory"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedInstitutional           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Institutional"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumHospital                           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Hospital"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumLongTermCareFacility               UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Long-Term Care Facility"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAlcoholAndDrugRehabilitationCenter UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Alcohol and Drug Rehabilitation Center"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumGroupHome                          UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Group Home"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPrisonOrJail                       UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Prison or Jail"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedMercantile              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Mercantile"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumRetailStore                        UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Retail Store"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumGroceryMarket                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Grocery Market"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAutomotiveServiceStation           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Automotive Service Station"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumShoppingMall                       UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Shopping Mall"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumGasStation                         UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Gas Station"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedResidential             UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Residential"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPrivateResidence                   UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Private Residence"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumHotelOrMotel                       UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Hotel or Motel"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumDormitory                          UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Dormitory"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBoardingHouse                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Boarding House"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedStorage                 UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Storage"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedUtilityAndMiscellaneous UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Utility and Miscellaneous"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedVehicular               UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Vehicular"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAutomobileOrTruck                  UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Automobile or Truck"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAirplane                           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Airplane"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBus                                UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Bus"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumFerry                              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Ferry"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumShipOrBoat                         UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Ship or Boat"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumTrain                              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Train"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumMotorBike                          UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Motor Bike"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedOutdoor                 UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Outdoor"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumMuniMeshNetwork                    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Muni-mesh Network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumCityPark                           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "City Park"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumRestArea                           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Rest Area"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumTrafficControl                     UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Traffic Control"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBusStop                            UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Bus Stop"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumKiosk                              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Kiosk"
)

type UpdateNetworkWirelessSsidHotspot20RequestBodyVenue struct {
	Name *string                                                     `json:"name,omitempty"`
	Type *UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum `json:"type,omitempty"`
}

type UpdateNetworkWirelessSsidHotspot20RequestBody struct {
	Domains           []string                                                            `json:"domains,omitempty"`
	Enabled           *bool                                                               `json:"enabled,omitempty"`
	MccMncs           []UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs              `json:"mccMncs,omitempty"`
	NaiRealms         []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms            `json:"naiRealms,omitempty"`
	NetworkAccessType *UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum `json:"networkAccessType,omitempty"`
	Operator          *UpdateNetworkWirelessSsidHotspot20RequestBodyOperator              `json:"operator,omitempty"`
	RoamConsortOis    []string                                                            `json:"roamConsortOis,omitempty"`
	Venue             *UpdateNetworkWirelessSsidHotspot20RequestBodyVenue                 `json:"venue,omitempty"`
}

type UpdateNetworkWirelessSsidHotspot20Request struct {
	PathParams UpdateNetworkWirelessSsidHotspot20PathParams
	Request    *UpdateNetworkWirelessSsidHotspot20RequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessSsidHotspot20Response struct {
	ContentType                                                string
	StatusCode                                                 int64
	UpdateNetworkWirelessSsidHotspot20200ApplicationJSONObject map[string]interface{}
}
