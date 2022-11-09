import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InternalCheckerStateEnum {
    Unspecified = "UNSPECIFIED"
,    Creating = "CREATING"
,    Running = "RUNNING"
}


// InternalChecker
/** 
 * An internal checker allows Uptime checks to run on private/internal GCP resources.
**/
export class InternalChecker extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=gcpZone" })
  gcpZone?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=peerProjectId" })
  peerProjectId?: string;

  @Metadata({ data: "json, name=state" })
  state?: InternalCheckerStateEnum;
}
