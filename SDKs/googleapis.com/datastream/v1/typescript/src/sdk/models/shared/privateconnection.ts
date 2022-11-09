import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { VpcPeeringConfig } from "./vpcpeeringconfig";

export enum PrivateConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Created = "CREATED"
,    Failed = "FAILED"
,    Deleting = "DELETING"
,    FailedToDelete = "FAILED_TO_DELETE"
}


// PrivateConnection
/** 
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
**/
export class PrivateConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: PrivateConnectionStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=vpcPeeringConfig" })
  vpcPeeringConfig?: VpcPeeringConfig;
}
