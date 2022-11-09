import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChartData } from "./chartdata";
import { TreemapChartColorScale } from "./treemapchartcolorscale";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { ChartData } from "./chartdata";
import { ChartData } from "./chartdata";
import { ChartData } from "./chartdata";
import { TextFormat } from "./textformat";


// TreemapChartSpec
/** 
 * A Treemap chart.
**/
export class TreemapChartSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=colorData" })
  colorData?: ChartData;

  @Metadata({ data: "json, name=colorScale" })
  colorScale?: TreemapChartColorScale;

  @Metadata({ data: "json, name=headerColor" })
  headerColor?: Color;

  @Metadata({ data: "json, name=headerColorStyle" })
  headerColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=hideTooltips" })
  hideTooltips?: boolean;

  @Metadata({ data: "json, name=hintedLevels" })
  hintedLevels?: number;

  @Metadata({ data: "json, name=labels" })
  labels?: ChartData;

  @Metadata({ data: "json, name=levels" })
  levels?: number;

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;

  @Metadata({ data: "json, name=parentLabels" })
  parentLabels?: ChartData;

  @Metadata({ data: "json, name=sizeData" })
  sizeData?: ChartData;

  @Metadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;
}
