package shared

type OrgChartSpecNodeSizeEnum string

const (
	OrgChartSpecNodeSizeEnumOrgChartLabelSizeUnspecified OrgChartSpecNodeSizeEnum = "ORG_CHART_LABEL_SIZE_UNSPECIFIED"
	OrgChartSpecNodeSizeEnumSmall                        OrgChartSpecNodeSizeEnum = "SMALL"
	OrgChartSpecNodeSizeEnumMedium                       OrgChartSpecNodeSizeEnum = "MEDIUM"
	OrgChartSpecNodeSizeEnumLarge                        OrgChartSpecNodeSizeEnum = "LARGE"
)

// OrgChartSpec
// An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales".
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
