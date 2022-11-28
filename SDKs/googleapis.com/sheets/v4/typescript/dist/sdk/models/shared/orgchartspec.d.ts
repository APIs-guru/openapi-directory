import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
export declare enum OrgChartSpecNodeSizeEnum {
    OrgChartLabelSizeUnspecified = "ORG_CHART_LABEL_SIZE_UNSPECIFIED",
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE"
}
/**
 * An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales".
**/
export declare class OrgChartSpec extends SpeakeasyBase {
    labels?: ChartData;
    nodeColor?: Color;
    nodeColorStyle?: ColorStyle;
    nodeSize?: OrgChartSpecNodeSizeEnum;
    parentLabels?: ChartData;
    selectedNodeColor?: Color;
    selectedNodeColorStyle?: ColorStyle;
    tooltips?: ChartData;
}
