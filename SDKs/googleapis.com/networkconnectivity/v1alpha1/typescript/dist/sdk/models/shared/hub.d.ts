import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HubStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model. Following is the resource message of a hub.
**/
export declare class HubInput extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    updateTime?: string;
}
/**
 * Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model. Following is the resource message of a hub.
**/
export declare class Hub extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    spokes?: string[];
    state?: HubStateEnum;
    uniqueId?: string;
    updateTime?: string;
}
