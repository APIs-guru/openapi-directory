import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LeaseWorkItemRequest
/** 
 * Request to lease WorkItems.
**/
export class LeaseWorkItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentWorkerTime" })
  currentWorkerTime?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=requestedLeaseDuration" })
  requestedLeaseDuration?: string;

  @Metadata({ data: "json, name=unifiedWorkerRequest" })
  unifiedWorkerRequest?: Map<string, any>;

  @Metadata({ data: "json, name=workItemTypes" })
  workItemTypes?: string[];

  @Metadata({ data: "json, name=workerCapabilities" })
  workerCapabilities?: string[];

  @Metadata({ data: "json, name=workerId" })
  workerId?: string;
}
