import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { TimeWindow } from "./timewindow";


export class Stop extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=preparation_time" })
  preparationTime?: number;

  @Metadata({ data: "json, name=time_windows", elemType: shared.TimeWindow })
  timeWindows?: TimeWindow[];
}
