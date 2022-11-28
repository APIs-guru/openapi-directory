import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Addressable } from "./addressable";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { TrafficTargetInput } from "./traffictarget";
import { TrafficTarget } from "./traffictarget";



// ServiceStatusInput
/** 
 * The current state of the Service. Output only.
**/
export class ServiceStatusInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Addressable;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @SpeakeasyMetadata({ data: "json, name=latestCreatedRevisionName" })
  latestCreatedRevisionName?: string;

  @SpeakeasyMetadata({ data: "json, name=latestReadyRevisionName" })
  latestReadyRevisionName?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @SpeakeasyMetadata({ data: "json, name=traffic", elemType: TrafficTargetInput })
  traffic?: TrafficTargetInput[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// ServiceStatus
/** 
 * The current state of the Service. Output only.
**/
export class ServiceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Addressable;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @SpeakeasyMetadata({ data: "json, name=latestCreatedRevisionName" })
  latestCreatedRevisionName?: string;

  @SpeakeasyMetadata({ data: "json, name=latestReadyRevisionName" })
  latestReadyRevisionName?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @SpeakeasyMetadata({ data: "json, name=traffic", elemType: TrafficTarget })
  traffic?: TrafficTarget[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
