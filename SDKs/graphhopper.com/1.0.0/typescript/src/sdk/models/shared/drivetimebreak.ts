import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DriveTimeBreak extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=initial_driving_time" })
  initialDrivingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=max_driving_time" })
  maxDrivingTime: number;

  @SpeakeasyMetadata({ data: "json, name=possible_split" })
  possibleSplit?: number[];
}
