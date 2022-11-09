import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChartData } from "./chartdata";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { ChartData } from "./chartdata";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { ChartData } from "./chartdata";

export enum OrgChartSpecNodeSizeEnum {
    OrgChartLabelSizeUnspecified = "ORG_CHART_LABEL_SIZE_UNSPECIFIED"
,    Small = "SMALL"
,    Medium = "MEDIUM"
,    Large = "LARGE"
}


// OrgChartSpec
/** 
 * An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales".
**/
export class OrgChartSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: ChartData;

  @Metadata({ data: "json, name=nodeColor" })
  nodeColor?: Color;

  @Metadata({ data: "json, name=nodeColorStyle" })
  nodeColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=nodeSize" })
  nodeSize?: OrgChartSpecNodeSizeEnum;

  @Metadata({ data: "json, name=parentLabels" })
  parentLabels?: ChartData;

  @Metadata({ data: "json, name=selectedNodeColor" })
  selectedNodeColor?: Color;

  @Metadata({ data: "json, name=selectedNodeColorStyle" })
  selectedNodeColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=tooltips" })
  tooltips?: ChartData;
}
