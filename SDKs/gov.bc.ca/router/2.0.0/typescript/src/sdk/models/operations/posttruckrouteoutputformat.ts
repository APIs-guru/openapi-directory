import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostTruckRouteOutputFormatOutputFormatEnum {
    Json = "json"
,    Kml = "kml"
,    Html = "html"
}


export class PostTruckRouteOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostTruckRouteOutputFormatOutputFormatEnum;
}

export enum PostTruckRouteOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum PostTruckRouteOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class PostTruckRouteOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostTruckRouteOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostTruckRouteOutputFormatDistanceUnitEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class PostTruckRouteOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTruckRouteOutputFormatPathParams;

  @Metadata()
  queryParams: PostTruckRouteOutputFormatQueryParams;
}


export class PostTruckRouteOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
