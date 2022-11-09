import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PeeringStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Connected = "CONNECTED"
,    Disconnected = "DISCONNECTED"
,    Deleting = "DELETING"
}


// Peering
/** 
 * Represents a Managed Microsoft Identities Peering.
**/
export class Peering extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=domainResource" })
  domainResource?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: PeeringStateEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
