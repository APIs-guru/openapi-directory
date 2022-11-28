import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ThresholdColorEnum {
    ColorUnspecified = "COLOR_UNSPECIFIED",
    Yellow = "YELLOW",
    Red = "RED"
}

export enum ThresholdDirectionEnum {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Above = "ABOVE",
    Below = "BELOW"
}

export enum ThresholdTargetAxisEnum {
    TargetAxisUnspecified = "TARGET_AXIS_UNSPECIFIED",
    Y1 = "Y1",
    Y2 = "Y2"
}


// Threshold
/** 
 * Defines a threshold for categorizing time series values.
**/
export class Threshold extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: ThresholdColorEnum;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: ThresholdDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=targetAxis" })
  targetAxis?: ThresholdTargetAxisEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
