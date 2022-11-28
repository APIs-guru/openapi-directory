import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkFloorPlanPathParams extends SpeakeasyBase {
    floorPlanId: string;
    networkId: string;
}
/**
 * The longitude and latitude of the bottom left corner of your floor plan.
**/
export declare class UpdateNetworkFloorPlanRequestBodyBottomLeftCorner extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
/**
 * The longitude and latitude of the bottom right corner of your floor plan.
**/
export declare class UpdateNetworkFloorPlanRequestBodyBottomRightCorner extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
/**
 * The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
**/
export declare class UpdateNetworkFloorPlanRequestBodyCenter extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
/**
 * The longitude and latitude of the top left corner of your floor plan.
**/
export declare class UpdateNetworkFloorPlanRequestBodyTopLeftCorner extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
/**
 * The longitude and latitude of the top right corner of your floor plan.
**/
export declare class UpdateNetworkFloorPlanRequestBodyTopRightCorner extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
export declare class UpdateNetworkFloorPlanRequestBody extends SpeakeasyBase {
    bottomLeftCorner?: UpdateNetworkFloorPlanRequestBodyBottomLeftCorner;
    bottomRightCorner?: UpdateNetworkFloorPlanRequestBodyBottomRightCorner;
    center?: UpdateNetworkFloorPlanRequestBodyCenter;
    imageContents?: string;
    name?: string;
    topLeftCorner?: UpdateNetworkFloorPlanRequestBodyTopLeftCorner;
    topRightCorner?: UpdateNetworkFloorPlanRequestBodyTopRightCorner;
}
export declare class UpdateNetworkFloorPlanRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkFloorPlanPathParams;
    request?: UpdateNetworkFloorPlanRequestBody;
}
export declare class UpdateNetworkFloorPlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkFloorPlan200ApplicationJsonObject?: Map<string, any>;
}
