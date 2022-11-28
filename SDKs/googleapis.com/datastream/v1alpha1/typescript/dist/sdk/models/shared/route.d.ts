import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Route resource is the child of the PrivateConnection resource. It used to define a route for a PrivateConnection setup.
**/
export declare class RouteInput extends SpeakeasyBase {
    destinationAddress?: string;
    destinationPort?: number;
    displayName?: string;
    labels?: Map<string, string>;
}
/**
 * The Route resource is the child of the PrivateConnection resource. It used to define a route for a PrivateConnection setup.
**/
export declare class Route extends SpeakeasyBase {
    createTime?: string;
    destinationAddress?: string;
    destinationPort?: number;
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    updateTime?: string;
}
