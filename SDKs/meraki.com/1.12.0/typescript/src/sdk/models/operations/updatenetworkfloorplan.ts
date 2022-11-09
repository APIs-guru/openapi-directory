import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkFloorPlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=floorPlanId" })
  floorPlanId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkFloorPlanRequestBodyBottomLeftCorner
/** 
 * The longitude and latitude of the bottom left corner of your floor plan.
**/
export class UpdateNetworkFloorPlanRequestBodyBottomLeftCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;
}


// UpdateNetworkFloorPlanRequestBodyBottomRightCorner
/** 
 * The longitude and latitude of the bottom right corner of your floor plan.
**/
export class UpdateNetworkFloorPlanRequestBodyBottomRightCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;
}


// UpdateNetworkFloorPlanRequestBodyCenter
/** 
 * The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
**/
export class UpdateNetworkFloorPlanRequestBodyCenter extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;
}


// UpdateNetworkFloorPlanRequestBodyTopLeftCorner
/** 
 * The longitude and latitude of the top left corner of your floor plan.
**/
export class UpdateNetworkFloorPlanRequestBodyTopLeftCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;
}


// UpdateNetworkFloorPlanRequestBodyTopRightCorner
/** 
 * The longitude and latitude of the top right corner of your floor plan.
**/
export class UpdateNetworkFloorPlanRequestBodyTopRightCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;
}


export class UpdateNetworkFloorPlanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottomLeftCorner" })
  bottomLeftCorner?: UpdateNetworkFloorPlanRequestBodyBottomLeftCorner;

  @Metadata({ data: "json, name=bottomRightCorner" })
  bottomRightCorner?: UpdateNetworkFloorPlanRequestBodyBottomRightCorner;

  @Metadata({ data: "json, name=center" })
  center?: UpdateNetworkFloorPlanRequestBodyCenter;

  @Metadata({ data: "json, name=imageContents" })
  imageContents?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=topLeftCorner" })
  topLeftCorner?: UpdateNetworkFloorPlanRequestBodyTopLeftCorner;

  @Metadata({ data: "json, name=topRightCorner" })
  topRightCorner?: UpdateNetworkFloorPlanRequestBodyTopRightCorner;
}


export class UpdateNetworkFloorPlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkFloorPlanPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkFloorPlanRequestBody;
}


export class UpdateNetworkFloorPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkFloorPlan200ApplicationJsonObject?: Map<string, any>;
}
