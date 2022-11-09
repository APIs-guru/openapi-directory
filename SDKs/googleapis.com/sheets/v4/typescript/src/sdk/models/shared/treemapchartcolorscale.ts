import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";


// TreemapChartColorScale
/** 
 * A color scale for a treemap chart.
**/
export class TreemapChartColorScale extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxValueColor" })
  maxValueColor?: Color;

  @Metadata({ data: "json, name=maxValueColorStyle" })
  maxValueColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=midValueColor" })
  midValueColor?: Color;

  @Metadata({ data: "json, name=midValueColorStyle" })
  midValueColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=minValueColor" })
  minValueColor?: Color;

  @Metadata({ data: "json, name=minValueColorStyle" })
  minValueColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=noDataColor" })
  noDataColor?: Color;

  @Metadata({ data: "json, name=noDataColorStyle" })
  noDataColorStyle?: ColorStyle;
}
