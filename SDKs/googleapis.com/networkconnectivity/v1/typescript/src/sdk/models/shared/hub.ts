import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoutingVpc } from "./routingvpc";

export enum HubStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// Hub
/** 
 * A Network Connectivity Center hub is a collection of spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the data transfer feature, the resources associated with those spokes must all reside in the same VPC network. Spokes that do not use data transfer can be associated with any VPC network in your project.
**/
export class Hub extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=routingVpcs", elemType: shared.RoutingVpc })
  routingVpcs?: RoutingVpc[];

  @Metadata({ data: "json, name=state" })
  state?: HubStateEnum;

  @Metadata({ data: "json, name=uniqueId" })
  uniqueId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
