import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { TimeWindow } from "./timewindow";



export class Stop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=preparation_time" })
  preparationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=time_windows", elemType: TimeWindow })
  timeWindows?: TimeWindow[];
}
