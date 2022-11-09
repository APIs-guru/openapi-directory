import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChartAxisViewWindowOptionsViewWindowModeEnum {
    DefaultViewWindowMode = "DEFAULT_VIEW_WINDOW_MODE"
,    ViewWindowModeUnsupported = "VIEW_WINDOW_MODE_UNSUPPORTED"
,    Explicit = "EXPLICIT"
,    Pretty = "PRETTY"
}


// ChartAxisViewWindowOptions
/** 
 * The options that define a "view window" for a chart (such as the visible values in an axis).
**/
export class ChartAxisViewWindowOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=viewWindowMax" })
  viewWindowMax?: number;

  @Metadata({ data: "json, name=viewWindowMin" })
  viewWindowMin?: number;

  @Metadata({ data: "json, name=viewWindowMode" })
  viewWindowMode?: ChartAxisViewWindowOptionsViewWindowModeEnum;
}
