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

// DashboardFilter
// A filter to reduce the amount of data charted in relevant widgets.
type DashboardFilter struct {
	FilterType       *DashboardFilterFilterTypeEnum `json:"filterType,omitempty"`
	LabelKey         *string                        `json:"labelKey,omitempty"`
	StringValue      *string                        `json:"stringValue,omitempty"`
	TemplateVariable *string                        `json:"templateVariable,omitempty"`
}
