import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRouteOutputFormatOutputFormatEnum {
    Json = "json"
,    Kml = "kml"
,    Html = "html"
}


export class GetRouteOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetRouteOutputFormatOutputFormatEnum;
}

export enum GetRouteOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum GetRouteOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class GetRouteOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: GetRouteOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: GetRouteOutputFormatDistanceUnitEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class GetRouteOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRouteOutputFormatPathParams;

  @Metadata()
  queryParams: GetRouteOutputFormatQueryParams;
}


export class GetRouteOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
