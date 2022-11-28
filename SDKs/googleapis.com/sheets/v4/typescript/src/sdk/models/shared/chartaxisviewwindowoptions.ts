import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChartAxisViewWindowOptionsViewWindowModeEnum {
    DefaultViewWindowMode = "DEFAULT_VIEW_WINDOW_MODE",
    ViewWindowModeUnsupported = "VIEW_WINDOW_MODE_UNSUPPORTED",
    Explicit = "EXPLICIT",
    Pretty = "PRETTY"
}


// ChartAxisViewWindowOptions
/** 
 * The options that define a "view window" for a chart (such as the visible values in an axis).
**/
export class ChartAxisViewWindowOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=viewWindowMax" })
  viewWindowMax?: number;

  @SpeakeasyMetadata({ data: "json, name=viewWindowMin" })
  viewWindowMin?: number;

  @SpeakeasyMetadata({ data: "json, name=viewWindowMode" })
  viewWindowMode?: ChartAxisViewWindowOptionsViewWindowModeEnum;
}
