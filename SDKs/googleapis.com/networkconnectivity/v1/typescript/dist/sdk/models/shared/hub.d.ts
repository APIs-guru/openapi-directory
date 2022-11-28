import { SpeakeasyBase } from "../../../internal/utils";
import { RoutingVpcInput } from "./routingvpc";
import { RoutingVpc } from "./routingvpc";
export declare enum HubStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * A Network Connectivity Center hub is a collection of spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the data transfer feature, the resources associated with those spokes must all reside in the same VPC network. Spokes that do not use data transfer can be associated with any VPC network in your project.
**/
export declare class HubInput extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    routingVpcs?: RoutingVpcInput[];
}
/**
 * A Network Connectivity Center hub is a collection of spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the data transfer feature, the resources associated with those spokes must all reside in the same VPC network. Spokes that do not use data transfer can be associated with any VPC network in your project.
**/
export declare class Hub extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    routingVpcs?: RoutingVpc[];
    state?: HubStateEnum;
    uniqueId?: string;
    updateTime?: string;
}
