import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostRouteOutputFormatOutputFormatEnum {
    Json = "json"
,    Kml = "kml"
,    Html = "html"
}


export class PostRouteOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostRouteOutputFormatOutputFormatEnum;
}

export enum PostRouteOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum PostRouteOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class PostRouteOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostRouteOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostRouteOutputFormatDistanceUnitEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class PostRouteOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRouteOutputFormatPathParams;

  @Metadata()
  queryParams: PostRouteOutputFormatQueryParams;
}


export class PostRouteOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
