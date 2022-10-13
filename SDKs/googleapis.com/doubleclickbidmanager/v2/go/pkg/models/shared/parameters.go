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

type Parameters struct {
	Filters  []FilterPair        `json:"filters"`
	GroupBys []string            `json:"groupBys"`
	Metrics  []string            `json:"metrics"`
	Options  *Options            `json:"options"`
	Type     *ParametersTypeEnum `json:"type"`
}
