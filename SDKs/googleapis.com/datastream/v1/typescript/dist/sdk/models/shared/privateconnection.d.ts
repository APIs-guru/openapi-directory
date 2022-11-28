import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { VpcPeeringConfig } from "./vpcpeeringconfig";
export declare enum PrivateConnectionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Created = "CREATED",
    Failed = "FAILED",
    Deleting = "DELETING",
    FailedToDelete = "FAILED_TO_DELETE"
}
/**
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
**/
export declare class PrivateConnection extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    error?: Error;
    labels?: Map<string, string>;
    name?: string;
    state?: PrivateConnectionStateEnum;
    updateTime?: string;
    vpcPeeringConfig?: VpcPeeringConfig;
}
/**
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
**/
export declare class PrivateConnectionInput extends SpeakeasyBase {
    displayName?: string;
    error?: Error;
    labels?: Map<string, string>;
    vpcPeeringConfig?: VpcPeeringConfig;
}
