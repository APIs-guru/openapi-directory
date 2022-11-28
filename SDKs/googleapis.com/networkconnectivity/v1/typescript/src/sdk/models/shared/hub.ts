import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoutingVpcInput } from "./routingvpc";
import { RoutingVpc } from "./routingvpc";


export enum HubStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// HubInput
/** 
 * A Network Connectivity Center hub is a collection of spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the data transfer feature, the resources associated with those spokes must all reside in the same VPC network. Spokes that do not use data transfer can be associated with any VPC network in your project.
**/
export class HubInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=routingVpcs", elemType: RoutingVpcInput })
  routingVpcs?: RoutingVpcInput[];
}


// Hub
/** 
 * A Network Connectivity Center hub is a collection of spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the data transfer feature, the resources associated with those spokes must all reside in the same VPC network. Spokes that do not use data transfer can be associated with any VPC network in your project.
**/
export class Hub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=routingVpcs", elemType: RoutingVpc })
  routingVpcs?: RoutingVpc[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: HubStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uniqueId" })
  uniqueId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
