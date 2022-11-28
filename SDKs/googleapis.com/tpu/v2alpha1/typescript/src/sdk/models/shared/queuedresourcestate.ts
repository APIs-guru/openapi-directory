import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedData } from "./faileddata";


export enum QueuedResourceStateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Accepted = "ACCEPTED",
    Provisioning = "PROVISIONING",
    Failed = "FAILED",
    Deleting = "DELETING",
    Active = "ACTIVE",
    Suspending = "SUSPENDING",
    Suspended = "SUSPENDED"
}


// QueuedResourceState
/** 
 * QueuedResourceState defines the details of the QueuedResource request.
**/
export class QueuedResourceState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptedData" })
  acceptedData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=activeData" })
  activeData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=creatingData" })
  creatingData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=deletingData" })
  deletingData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=failedData" })
  failedData?: FailedData;

  @SpeakeasyMetadata({ data: "json, name=provisioningData" })
  provisioningData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: QueuedResourceStateStateEnum;

  @SpeakeasyMetadata({ data: "json, name=suspendedData" })
  suspendedData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=suspendingData" })
  suspendingData?: Map<string, any>;
}
