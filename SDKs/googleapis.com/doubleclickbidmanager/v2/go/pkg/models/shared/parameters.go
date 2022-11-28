package shared

type ParametersTypeEnum string

const (
	ParametersTypeEnumReportTypeUnspecified         ParametersTypeEnum = "REPORT_TYPE_UNSPECIFIED"
	ParametersTypeEnumStandard                      ParametersTypeEnum = "STANDARD"
	ParametersTypeEnumInventoryAvailability         ParametersTypeEnum = "INVENTORY_AVAILABILITY"
	ParametersTypeEnumAudienceComposition           ParametersTypeEnum = "AUDIENCE_COMPOSITION"
	ParametersTypeEnumFloodlight                    ParametersTypeEnum = "FLOODLIGHT"
	ParametersTypeEnumYoutube                       ParametersTypeEnum = "YOUTUBE"
	ParametersTypeEnumGrp                           ParametersTypeEnum = "GRP"
	ParametersTypeEnumYoutubeProgrammaticGuaranteed ParametersTypeEnum = "YOUTUBE_PROGRAMMATIC_GUARANTEED"
	ParametersTypeEnumReach                         ParametersTypeEnum = "REACH"
	ParametersTypeEnumUniqueReachAudience           ParametersTypeEnum = "UNIQUE_REACH_AUDIENCE"
	ParametersTypeEnumFullPath                      ParametersTypeEnum = "FULL_PATH"
	ParametersTypeEnumPathAttribution               ParametersTypeEnum = "PATH_ATTRIBUTION"
)

// Parameters
// Parameters of a query or report.
type Parameters struct {
	Filters  []FilterPair        `json:"filters,omitempty"`
	GroupBys []string            `json:"groupBys,omitempty"`
	Metrics  []string            `json:"metrics,omitempty"`
	Options  *Options            `json:"options,omitempty"`
	Type     *ParametersTypeEnum `json:"type,omitempty"`
}
