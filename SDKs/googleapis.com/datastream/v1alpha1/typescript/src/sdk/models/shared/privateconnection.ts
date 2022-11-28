import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { VpcPeeringConfig } from "./vpcpeeringconfig";


export enum PrivateConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Failed = "FAILED",
    Deleting = "DELETING",
    FailedToDelete = "FAILED_TO_DELETE"
}


// PrivateConnectionInput
/** 
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
**/
export class PrivateConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=vpcPeeringConfig" })
  vpcPeeringConfig?: VpcPeeringConfig;
}


// PrivateConnection
/** 
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
**/
export class PrivateConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PrivateConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcPeeringConfig" })
  vpcPeeringConfig?: VpcPeeringConfig;
}
