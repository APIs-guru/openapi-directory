import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkFloorPlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// CreateNetworkFloorPlanRequestBodyBottomLeftCorner
/** 
 * The longitude and latitude of the bottom left corner of your floor plan.
**/
export class CreateNetworkFloorPlanRequestBodyBottomLeftCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}


// CreateNetworkFloorPlanRequestBodyBottomRightCorner
/** 
 * The longitude and latitude of the bottom right corner of your floor plan.
**/
export class CreateNetworkFloorPlanRequestBodyBottomRightCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}


// CreateNetworkFloorPlanRequestBodyCenter
/** 
 * The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
**/
export class CreateNetworkFloorPlanRequestBodyCenter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}


// CreateNetworkFloorPlanRequestBodyTopLeftCorner
/** 
 * The longitude and latitude of the top left corner of your floor plan.
**/
export class CreateNetworkFloorPlanRequestBodyTopLeftCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}


// CreateNetworkFloorPlanRequestBodyTopRightCorner
/** 
 * The longitude and latitude of the top right corner of your floor plan.
**/
export class CreateNetworkFloorPlanRequestBodyTopRightCorner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}


export class CreateNetworkFloorPlanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottomLeftCorner" })
  bottomLeftCorner?: CreateNetworkFloorPlanRequestBodyBottomLeftCorner;

  @SpeakeasyMetadata({ data: "json, name=bottomRightCorner" })
  bottomRightCorner?: CreateNetworkFloorPlanRequestBodyBottomRightCorner;

  @SpeakeasyMetadata({ data: "json, name=center" })
  center?: CreateNetworkFloorPlanRequestBodyCenter;

  @SpeakeasyMetadata({ data: "json, name=imageContents" })
  imageContents: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=topLeftCorner" })
  topLeftCorner?: CreateNetworkFloorPlanRequestBodyTopLeftCorner;

  @SpeakeasyMetadata({ data: "json, name=topRightCorner" })
  topRightCorner?: CreateNetworkFloorPlanRequestBodyTopRightCorner;
}


export class CreateNetworkFloorPlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkFloorPlanPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkFloorPlanRequestBody;
}


export class CreateNetworkFloorPlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkFloorPlan201ApplicationJsonObject?: Map<string, any>;
}
