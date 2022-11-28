import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
import { TreemapChartColorScale } from "./treemapchartcolorscale";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { TextFormat } from "./textformat";



// TreemapChartSpec
/** 
 * A Treemap chart.
**/
export class TreemapChartSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorData" })
  colorData?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=colorScale" })
  colorScale?: TreemapChartColorScale;

  @SpeakeasyMetadata({ data: "json, name=headerColor" })
  headerColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=headerColorStyle" })
  headerColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=hideTooltips" })
  hideTooltips?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hintedLevels" })
  hintedLevels?: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=levels" })
  levels?: number;

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=parentLabels" })
  parentLabels?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=sizeData" })
  sizeData?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;
}
