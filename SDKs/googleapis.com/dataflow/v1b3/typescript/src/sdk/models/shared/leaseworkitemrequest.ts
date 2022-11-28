import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LeaseWorkItemRequest
/** 
 * Request to lease WorkItems.
**/
export class LeaseWorkItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentWorkerTime" })
  currentWorkerTime?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedLeaseDuration" })
  requestedLeaseDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=unifiedWorkerRequest" })
  unifiedWorkerRequest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=workItemTypes" })
  workItemTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=workerCapabilities" })
  workerCapabilities?: string[];

  @SpeakeasyMetadata({ data: "json, name=workerId" })
  workerId?: string;
}
