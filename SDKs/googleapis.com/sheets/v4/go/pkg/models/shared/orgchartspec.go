package shared

type OrgChartSpecNodeSizeEnum string

const (
	OrgChartSpecNodeSizeEnumOrgChartLabelSizeUnspecified OrgChartSpecNodeSizeEnum = "ORG_CHART_LABEL_SIZE_UNSPECIFIED"
	OrgChartSpecNodeSizeEnumSmall                        OrgChartSpecNodeSizeEnum = "SMALL"
	OrgChartSpecNodeSizeEnumMedium                       OrgChartSpecNodeSizeEnum = "MEDIUM"
	OrgChartSpecNodeSizeEnumLarge                        OrgChartSpecNodeSizeEnum = "LARGE"
)

type OrgChartSpec struct {
	Labels                 *ChartData                `json:"labels,omitempty"`
	NodeColor              *Color                    `json:"nodeColor,omitempty"`
	NodeColorStyle         *ColorStyle               `json:"nodeColorStyle,omitempty"`
	NodeSize               *OrgChartSpecNodeSizeEnum `json:"nodeSize,omitempty"`
	ParentLabels           *ChartData                `json:"parentLabels,omitempty"`
	SelectedNodeColor      *Color                    `json:"selectedNodeColor,omitempty"`
	SelectedNodeColorStyle *ColorStyle               `json:"selectedNodeColorStyle,omitempty"`
	Tooltips               *ChartData                `json:"tooltips,omitempty"`
}
