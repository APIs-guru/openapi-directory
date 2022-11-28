import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkFloorPlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=floorPlanId" })
  floorPlanId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkFloorPlanRequestBodyBottomLeftCorner
/** 
 * The longitude and latitude of the bottom left corner of your floor plan.
**/
export class UpdateNetworkFloorPlanRequestBodyBottomLeftCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}


// UpdateNetworkFloorPlanRequestBodyBottomRightCorner
/** 
 * The longitude and latitude of the bottom right corner of your floor plan.
**/
export class UpdateNetworkFloorPlanRequestBodyBottomRightCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}


// UpdateNetworkFloorPlanRequestBodyCenter
/** 
 * The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
**/
export class UpdateNetworkFloorPlanRequestBodyCenter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}


// UpdateNetworkFloorPlanRequestBodyTopLeftCorner
/** 
 * The longitude and latitude of the top left corner of your floor plan.
**/
export class UpdateNetworkFloorPlanRequestBodyTopLeftCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}


// UpdateNetworkFloorPlanRequestBodyTopRightCorner
/** 
 * The longitude and latitude of the top right corner of your floor plan.
**/
export class UpdateNetworkFloorPlanRequestBodyTopRightCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}


export class UpdateNetworkFloorPlanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottomLeftCorner" })
  bottomLeftCorner?: UpdateNetworkFloorPlanRequestBodyBottomLeftCorner;

  @SpeakeasyMetadata({ data: "json, name=bottomRightCorner" })
  bottomRightCorner?: UpdateNetworkFloorPlanRequestBodyBottomRightCorner;

  @SpeakeasyMetadata({ data: "json, name=center" })
  center?: UpdateNetworkFloorPlanRequestBodyCenter;

  @SpeakeasyMetadata({ data: "json, name=imageContents" })
  imageContents?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=topLeftCorner" })
  topLeftCorner?: UpdateNetworkFloorPlanRequestBodyTopLeftCorner;

  @SpeakeasyMetadata({ data: "json, name=topRightCorner" })
  topRightCorner?: UpdateNetworkFloorPlanRequestBodyTopRightCorner;
}


export class UpdateNetworkFloorPlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkFloorPlanPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkFloorPlanRequestBody;
}


export class UpdateNetworkFloorPlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkFloorPlan200ApplicationJsonObject?: Map<string, any>;
}
