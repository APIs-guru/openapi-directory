import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InternalCheckerStateEnum {
    Unspecified = "UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING"
}


// InternalChecker
/** 
 * An internal checker allows Uptime checks to run on private/internal GCP resources.
**/
export class InternalChecker extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=gcpZone" })
  gcpZone?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=peerProjectId" })
  peerProjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InternalCheckerStateEnum;
}
