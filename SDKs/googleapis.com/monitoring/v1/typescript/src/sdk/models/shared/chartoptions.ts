import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChartOptionsModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    Color = "COLOR"
,    XRay = "X_RAY"
,    Stats = "STATS"
}


// ChartOptions
/** 
 * Options to control visual rendering of a chart.
**/
export class ChartOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: ChartOptionsModeEnum;
}
