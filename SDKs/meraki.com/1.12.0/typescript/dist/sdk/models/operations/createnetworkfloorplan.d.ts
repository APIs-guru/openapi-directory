import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkFloorPlanPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * The longitude and latitude of the bottom left corner of your floor plan.
**/
export declare class CreateNetworkFloorPlanRequestBodyBottomLeftCorner extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
/**
 * The longitude and latitude of the bottom right corner of your floor plan.
**/
export declare class CreateNetworkFloorPlanRequestBodyBottomRightCorner extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
/**
 * The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
**/
export declare class CreateNetworkFloorPlanRequestBodyCenter extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
/**
 * The longitude and latitude of the top left corner of your floor plan.
**/
export declare class CreateNetworkFloorPlanRequestBodyTopLeftCorner extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
/**
 * The longitude and latitude of the top right corner of your floor plan.
**/
export declare class CreateNetworkFloorPlanRequestBodyTopRightCorner extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
export declare class CreateNetworkFloorPlanRequestBody extends SpeakeasyBase {
    bottomLeftCorner?: CreateNetworkFloorPlanRequestBodyBottomLeftCorner;
    bottomRightCorner?: CreateNetworkFloorPlanRequestBodyBottomRightCorner;
    center?: CreateNetworkFloorPlanRequestBodyCenter;
    imageContents: string;
    name: string;
    topLeftCorner?: CreateNetworkFloorPlanRequestBodyTopLeftCorner;
    topRightCorner?: CreateNetworkFloorPlanRequestBodyTopRightCorner;
}
export declare class CreateNetworkFloorPlanRequest extends SpeakeasyBase {
    pathParams: CreateNetworkFloorPlanPathParams;
    request: CreateNetworkFloorPlanRequestBody;
}
export declare class CreateNetworkFloorPlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkFloorPlan201ApplicationJsonObject?: Map<string, any>;
}
