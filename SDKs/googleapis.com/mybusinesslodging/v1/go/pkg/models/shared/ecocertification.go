package shared

type EcoCertificationAwardedExceptionEnum string

const (
	EcoCertificationAwardedExceptionEnumExceptionUnspecified EcoCertificationAwardedExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EcoCertificationAwardedExceptionEnumUnderConstruction    EcoCertificationAwardedExceptionEnum = "UNDER_CONSTRUCTION"
	EcoCertificationAwardedExceptionEnumDependentOnSeason    EcoCertificationAwardedExceptionEnum = "DEPENDENT_ON_SEASON"
	EcoCertificationAwardedExceptionEnumDependentOnDayOfWeek EcoCertificationAwardedExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EcoCertificationEcoCertificateEnum string

const (
	EcoCertificationEcoCertificateEnumEcoCertificateUnspecified                        EcoCertificationEcoCertificateEnum = "ECO_CERTIFICATE_UNSPECIFIED"
	EcoCertificationEcoCertificateEnumIso14001                                         EcoCertificationEcoCertificateEnum = "ISO14001"
	EcoCertificationEcoCertificateEnumIso50001                                         EcoCertificationEcoCertificateEnum = "ISO50001"
	EcoCertificationEcoCertificateEnumAsianEcotourism                                  EcoCertificationEcoCertificateEnum = "ASIAN_ECOTOURISM"
	EcoCertificationEcoCertificateEnumBiosphereResposnibleTourism                      EcoCertificationEcoCertificateEnum = "BIOSPHERE_RESPOSNIBLE_TOURISM"
	EcoCertificationEcoCertificateEnumBureauVeritas                                    EcoCertificationEcoCertificateEnum = "BUREAU_VERITAS"
	EcoCertificationEcoCertificateEnumControlUnion                                     EcoCertificationEcoCertificateEnum = "CONTROL_UNION"
	EcoCertificationEcoCertificateEnumEarthcheck                                       EcoCertificationEcoCertificateEnum = "EARTHCHECK"
	EcoCertificationEcoCertificateEnumEcoCertificationMalta                            EcoCertificationEcoCertificateEnum = "ECO_CERTIFICATION_MALTA"
	EcoCertificationEcoCertificateEnumEcotourismAustraliasEco                          EcoCertificationEcoCertificateEnum = "ECOTOURISM_AUSTRALIAS_ECO"
	EcoCertificationEcoCertificateEnumGreatGreenDeal                                   EcoCertificationEcoCertificateEnum = "GREAT_GREEN_DEAL"
	EcoCertificationEcoCertificateEnumGreenGlobe                                       EcoCertificationEcoCertificateEnum = "GREEN_GLOBE"
	EcoCertificationEcoCertificateEnumGreenGrowth2050                                  EcoCertificationEcoCertificateEnum = "GREEN_GROWTH2050"
	EcoCertificationEcoCertificateEnumGreenKey                                         EcoCertificationEcoCertificateEnum = "GREEN_KEY"
	EcoCertificationEcoCertificateEnumGreenKeyEcoRating                                EcoCertificationEcoCertificateEnum = "GREEN_KEY_ECO_RATING"
	EcoCertificationEcoCertificateEnumGreenSeal                                        EcoCertificationEcoCertificateEnum = "GREEN_SEAL"
	EcoCertificationEcoCertificateEnumGreenStar                                        EcoCertificationEcoCertificateEnum = "GREEN_STAR"
	EcoCertificationEcoCertificateEnumGreenTourismActive                               EcoCertificationEcoCertificateEnum = "GREEN_TOURISM_ACTIVE"
	EcoCertificationEcoCertificateEnumHiltonLightstay                                  EcoCertificationEcoCertificateEnum = "HILTON_LIGHTSTAY"
	EcoCertificationEcoCertificateEnumHostellingInternationalsQualityAndSustainability EcoCertificationEcoCertificateEnum = "HOSTELLING_INTERNATIONALS_QUALITY_AND_SUSTAINABILITY"
	EcoCertificationEcoCertificateEnumHotelesMasVerdes                                 EcoCertificationEcoCertificateEnum = "HOTELES_MAS_VERDES"
	EcoCertificationEcoCertificateEnumNordicSwanEcolabel                               EcoCertificationEcoCertificateEnum = "NORDIC_SWAN_ECOLABEL"
	EcoCertificationEcoCertificateEnumPreferredByNatureSustainableTourism              EcoCertificationEcoCertificateEnum = "PREFERRED_BY_NATURE_SUSTAINABLE_TOURISM"
	EcoCertificationEcoCertificateEnumSustainableTravelIreland                         EcoCertificationEcoCertificateEnum = "SUSTAINABLE_TRAVEL_IRELAND"
	EcoCertificationEcoCertificateEnumTofTigersInititivesPug                           EcoCertificationEcoCertificateEnum = "TOF_TIGERS_INITITIVES_PUG"
	EcoCertificationEcoCertificateEnumTravelife                                        EcoCertificationEcoCertificateEnum = "TRAVELIFE"
	EcoCertificationEcoCertificateEnumUnitedCertificationSystemsLimited                EcoCertificationEcoCertificateEnum = "UNITED_CERTIFICATION_SYSTEMS_LIMITED"
	EcoCertificationEcoCertificateEnumVireoSrl                                         EcoCertificationEcoCertificateEnum = "VIREO_SRL"
)

// EcoCertification
// An eco certificate awarded to the hotel.
type EcoCertification struct {
	Awarded          *bool                                 `json:"awarded,omitempty"`
	AwardedException *EcoCertificationAwardedExceptionEnum `json:"awardedException,omitempty"`
	EcoCertificate   *EcoCertificationEcoCertificateEnum   `json:"ecoCertificate,omitempty"`
}
