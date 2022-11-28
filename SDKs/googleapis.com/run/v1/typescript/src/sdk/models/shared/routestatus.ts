import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Addressable } from "./addressable";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { TrafficTarget } from "./traffictarget";



// RouteStatus
/** 
 * RouteStatus communicates the observed state of the Route (from the controller).
**/
export class RouteStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Addressable;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @SpeakeasyMetadata({ data: "json, name=traffic", elemType: TrafficTarget })
  traffic?: TrafficTarget[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
