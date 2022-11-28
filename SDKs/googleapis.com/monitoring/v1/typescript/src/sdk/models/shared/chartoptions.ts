import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChartOptionsModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Color = "COLOR",
    XRay = "X_RAY",
    Stats = "STATS"
}


// ChartOptions
/** 
 * Options to control visual rendering of a chart.
**/
export class ChartOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: ChartOptionsModeEnum;
}
