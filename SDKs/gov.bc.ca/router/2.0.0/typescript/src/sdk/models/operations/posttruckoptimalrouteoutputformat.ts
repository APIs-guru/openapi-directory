import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostTruckOptimalRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}


export class PostTruckOptimalRouteOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostTruckOptimalRouteOutputFormatOutputFormatEnum;
}

export enum PostTruckOptimalRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum PostTruckOptimalRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class PostTruckOptimalRouteOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostTruckOptimalRouteOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostTruckOptimalRouteOutputFormatDistanceUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class PostTruckOptimalRouteOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTruckOptimalRouteOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: PostTruckOptimalRouteOutputFormatQueryParams;
}


export class PostTruckOptimalRouteOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
