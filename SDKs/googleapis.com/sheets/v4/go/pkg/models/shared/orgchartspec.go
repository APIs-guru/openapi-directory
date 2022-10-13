package shared

type OrgChartSpecNodeSizeEnum string

const (
	OrgChartSpecNodeSizeEnumOrgChartLabelSizeUnspecified OrgChartSpecNodeSizeEnum = "ORG_CHART_LABEL_SIZE_UNSPECIFIED"
	OrgChartSpecNodeSizeEnumSmall                        OrgChartSpecNodeSizeEnum = "SMALL"
	OrgChartSpecNodeSizeEnumMedium                       OrgChartSpecNodeSizeEnum = "MEDIUM"
	OrgChartSpecNodeSizeEnumLarge                        OrgChartSpecNodeSizeEnum = "LARGE"
)

type OrgChartSpec struct {
	Labels                 *ChartData                `json:"labels"`
	NodeColor              *Color                    `json:"nodeColor"`
	NodeColorStyle         *ColorStyle               `json:"nodeColorStyle"`
	NodeSize               *OrgChartSpecNodeSizeEnum `json:"nodeSize"`
	ParentLabels           *ChartData                `json:"parentLabels"`
	SelectedNodeColor      *Color                    `json:"selectedNodeColor"`
	SelectedNodeColorStyle *ColorStyle               `json:"selectedNodeColorStyle"`
	Tooltips               *ChartData                `json:"tooltips"`
}
