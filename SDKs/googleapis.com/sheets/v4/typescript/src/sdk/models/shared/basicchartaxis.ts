import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextFormat } from "./textformat";
import { TextPosition } from "./textposition";
import { ChartAxisViewWindowOptions } from "./chartaxisviewwindowoptions";

export enum BasicChartAxisPositionEnum {
    BasicChartAxisPositionUnspecified = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
,    BottomAxis = "BOTTOM_AXIS"
,    LeftAxis = "LEFT_AXIS"
,    RightAxis = "RIGHT_AXIS"
}


// BasicChartAxis
/** 
 * An axis of the chart. A chart may not have more than one axis per axis position.
**/
export class BasicChartAxis extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: TextFormat;

  @Metadata({ data: "json, name=position" })
  position?: BasicChartAxisPositionEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=titleTextPosition" })
  titleTextPosition?: TextPosition;

  @Metadata({ data: "json, name=viewWindowOptions" })
  viewWindowOptions?: ChartAxisViewWindowOptions;
}
