import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The route resource is the child of the private connection resource, used for defining a route for a private connection.
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
/**
 * The route resource is the child of the private connection resource, used for defining a route for a private connection.
**/
export declare class RouteInput extends SpeakeasyBase {
    destinationAddress?: string;
    destinationPort?: number;
    displayName?: string;
    labels?: Map<string, string>;
}
