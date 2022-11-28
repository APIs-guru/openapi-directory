import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostTruckRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}


export class PostTruckRouteOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostTruckRouteOutputFormatOutputFormatEnum;
}

export enum PostTruckRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum PostTruckRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class PostTruckRouteOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostTruckRouteOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostTruckRouteOutputFormatDistanceUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class PostTruckRouteOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTruckRouteOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: PostTruckRouteOutputFormatQueryParams;
}


export class PostTruckRouteOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
