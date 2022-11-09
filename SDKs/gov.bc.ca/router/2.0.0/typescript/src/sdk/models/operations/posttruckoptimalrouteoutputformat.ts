import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostTruckOptimalRouteOutputFormatOutputFormatEnum {
    Json = "json"
,    Kml = "kml"
,    Html = "html"
}


export class PostTruckOptimalRouteOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostTruckOptimalRouteOutputFormatOutputFormatEnum;
}

export enum PostTruckOptimalRouteOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum PostTruckOptimalRouteOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class PostTruckOptimalRouteOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostTruckOptimalRouteOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostTruckOptimalRouteOutputFormatDistanceUnitEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class PostTruckOptimalRouteOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTruckOptimalRouteOutputFormatPathParams;

  @Metadata()
  queryParams: PostTruckOptimalRouteOutputFormatQueryParams;
}


export class PostTruckOptimalRouteOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
