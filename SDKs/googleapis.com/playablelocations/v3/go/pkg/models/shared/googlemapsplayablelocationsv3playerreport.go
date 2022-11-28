package shared

type GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum string

const (
	GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumBadLocationReasonUnspecified GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum = "BAD_LOCATION_REASON_UNSPECIFIED"
	GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumOther                        GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum = "OTHER"
	GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumNotPedestrianAccessible      GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum = "NOT_PEDESTRIAN_ACCESSIBLE"
	GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumNotOpenToPublic              GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum = "NOT_OPEN_TO_PUBLIC"
	GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumPermanentlyClosed            GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum = "PERMANENTLY_CLOSED"
	GoogleMapsPlayablelocationsV3PlayerReportReasonsEnumTemporarilyInaccessible      GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum = "TEMPORARILY_INACCESSIBLE"
)

// GoogleMapsPlayablelocationsV3PlayerReport
// A report submitted by a player about a playable location that is considered inappropriate for use in the game.
type GoogleMapsPlayablelocationsV3PlayerReport struct {
	LanguageCode  *string                                                `json:"languageCode,omitempty"`
	LocationName  *string                                                `json:"locationName,omitempty"`
	ReasonDetails *string                                                `json:"reasonDetails,omitempty"`
	Reasons       []GoogleMapsPlayablelocationsV3PlayerReportReasonsEnum `json:"reasons,omitempty"`
}
