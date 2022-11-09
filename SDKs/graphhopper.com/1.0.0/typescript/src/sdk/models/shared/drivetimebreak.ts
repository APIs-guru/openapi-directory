import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DriveTimeBreak extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration: number;

  @Metadata({ data: "json, name=initial_driving_time" })
  initialDrivingTime?: number;

  @Metadata({ data: "json, name=max_driving_time" })
  maxDrivingTime: number;

  @Metadata({ data: "json, name=possible_split" })
  possibleSplit?: number[];
}
