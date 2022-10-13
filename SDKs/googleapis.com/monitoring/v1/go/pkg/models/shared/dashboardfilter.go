package shared

type DashboardFilterFilterTypeEnum string

const (
	DashboardFilterFilterTypeEnumFilterTypeUnspecified DashboardFilterFilterTypeEnum = "FILTER_TYPE_UNSPECIFIED"
	DashboardFilterFilterTypeEnumResourceLabel         DashboardFilterFilterTypeEnum = "RESOURCE_LABEL"
	DashboardFilterFilterTypeEnumMetricLabel           DashboardFilterFilterTypeEnum = "METRIC_LABEL"
	DashboardFilterFilterTypeEnumUserMetadataLabel     DashboardFilterFilterTypeEnum = "USER_METADATA_LABEL"
	DashboardFilterFilterTypeEnumSystemMetadataLabel   DashboardFilterFilterTypeEnum = "SYSTEM_METADATA_LABEL"
	DashboardFilterFilterTypeEnumGroup                 DashboardFilterFilterTypeEnum = "GROUP"
)

type DashboardFilter struct {
	FilterType       *DashboardFilterFilterTypeEnum `json:"filterType"`
	LabelKey         *string                        `json:"labelKey"`
	StringValue      *string                        `json:"stringValue"`
	TemplateVariable *string                        `json:"templateVariable"`
}
