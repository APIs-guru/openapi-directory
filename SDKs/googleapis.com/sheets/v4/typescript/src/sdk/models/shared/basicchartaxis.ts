import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextFormat } from "./textformat";
import { TextPosition } from "./textposition";
import { ChartAxisViewWindowOptions } from "./chartaxisviewwindowoptions";


export enum BasicChartAxisPositionEnum {
    BasicChartAxisPositionUnspecified = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
    BottomAxis = "BOTTOM_AXIS",
    LeftAxis = "LEFT_AXIS",
    RightAxis = "RIGHT_AXIS"
}


// BasicChartAxis
/** 
 * An axis of the chart. A chart may not have more than one axis per axis position.
**/
export class BasicChartAxis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: TextFormat;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: BasicChartAxisPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=titleTextPosition" })
  titleTextPosition?: TextPosition;

  @SpeakeasyMetadata({ data: "json, name=viewWindowOptions" })
  viewWindowOptions?: ChartAxisViewWindowOptions;
}
