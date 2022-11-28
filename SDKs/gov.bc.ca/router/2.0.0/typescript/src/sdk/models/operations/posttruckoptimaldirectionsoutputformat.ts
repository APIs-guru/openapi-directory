import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostTruckOptimalDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}


export class PostTruckOptimalDirectionsOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostTruckOptimalDirectionsOutputFormatOutputFormatEnum;
}

export enum PostTruckOptimalDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class PostTruckOptimalDirectionsOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostTruckOptimalDirectionsOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class PostTruckOptimalDirectionsOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTruckOptimalDirectionsOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: PostTruckOptimalDirectionsOutputFormatQueryParams;
}


export class PostTruckOptimalDirectionsOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
