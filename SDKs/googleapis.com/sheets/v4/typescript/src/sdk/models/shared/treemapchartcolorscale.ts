import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";



// TreemapChartColorScale
/** 
 * A color scale for a treemap chart.
**/
export class TreemapChartColorScale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValueColor" })
  maxValueColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=maxValueColorStyle" })
  maxValueColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=midValueColor" })
  midValueColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=midValueColorStyle" })
  midValueColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=minValueColor" })
  minValueColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=minValueColorStyle" })
  minValueColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=noDataColor" })
  noDataColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=noDataColorStyle" })
  noDataColorStyle?: ColorStyle;
}
