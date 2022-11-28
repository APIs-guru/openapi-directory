import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PeeringStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED",
    Deleting = "DELETING"
}


// Peering
/** 
 * Represents a Managed Service for Microsoft Active Directory Peering.
**/
export class Peering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=domainResource" })
  domainResource?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PeeringStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// PeeringInput
/** 
 * Represents a Managed Service for Microsoft Active Directory Peering.
**/
export class PeeringInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=domainResource" })
  domainResource?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
