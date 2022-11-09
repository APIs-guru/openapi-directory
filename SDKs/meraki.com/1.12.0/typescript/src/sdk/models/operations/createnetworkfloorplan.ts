import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkFloorPlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// CreateNetworkFloorPlanRequestBodyBottomLeftCorner
/** 
 * The longitude and latitude of the bottom left corner of your floor plan.
**/
export class CreateNetworkFloorPlanRequestBodyBottomLeftCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;
}


// CreateNetworkFloorPlanRequestBodyBottomRightCorner
/** 
 * The longitude and latitude of the bottom right corner of your floor plan.
**/
export class CreateNetworkFloorPlanRequestBodyBottomRightCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;
}


// CreateNetworkFloorPlanRequestBodyCenter
/** 
 * The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
**/
export class CreateNetworkFloorPlanRequestBodyCenter extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;
}


// CreateNetworkFloorPlanRequestBodyTopLeftCorner
/** 
 * The longitude and latitude of the top left corner of your floor plan.
**/
export class CreateNetworkFloorPlanRequestBodyTopLeftCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;
}


// CreateNetworkFloorPlanRequestBodyTopRightCorner
/** 
 * The longitude and latitude of the top right corner of your floor plan.
**/
export class CreateNetworkFloorPlanRequestBodyTopRightCorner extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;
}


export class CreateNetworkFloorPlanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottomLeftCorner" })
  bottomLeftCorner?: CreateNetworkFloorPlanRequestBodyBottomLeftCorner;

  @Metadata({ data: "json, name=bottomRightCorner" })
  bottomRightCorner?: CreateNetworkFloorPlanRequestBodyBottomRightCorner;

  @Metadata({ data: "json, name=center" })
  center?: CreateNetworkFloorPlanRequestBodyCenter;

  @Metadata({ data: "json, name=imageContents" })
  imageContents: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=topLeftCorner" })
  topLeftCorner?: CreateNetworkFloorPlanRequestBodyTopLeftCorner;

  @Metadata({ data: "json, name=topRightCorner" })
  topRightCorner?: CreateNetworkFloorPlanRequestBodyTopRightCorner;
}


export class CreateNetworkFloorPlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkFloorPlanPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkFloorPlanRequestBody;
}


export class CreateNetworkFloorPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkFloorPlan201ApplicationJsonObject?: Map<string, any>;
}
