import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Addressable } from "./addressable";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
import { TrafficTarget } from "./traffictarget";


// ServiceStatus
/** 
 * The current state of the Service. Output only.
**/
export class ServiceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Addressable;

  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV1Condition })
  conditions?: GoogleCloudRunV1Condition[];

  @Metadata({ data: "json, name=latestCreatedRevisionName" })
  latestCreatedRevisionName?: string;

  @Metadata({ data: "json, name=latestReadyRevisionName" })
  latestReadyRevisionName?: string;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: number;

  @Metadata({ data: "json, name=traffic", elemType: shared.TrafficTarget })
  traffic?: TrafficTarget[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}
