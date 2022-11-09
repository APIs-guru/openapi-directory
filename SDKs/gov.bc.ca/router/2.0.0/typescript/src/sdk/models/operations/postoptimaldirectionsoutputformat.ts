import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostOptimalDirectionsOutputFormatOutputFormatEnum {
    Json = "json"
,    Kml = "kml"
,    Html = "html"
}


export class PostOptimalDirectionsOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostOptimalDirectionsOutputFormatOutputFormatEnum;
}

export enum PostOptimalDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum PostOptimalDirectionsOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class PostOptimalDirectionsOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostOptimalDirectionsOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostOptimalDirectionsOutputFormatDistanceUnitEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class PostOptimalDirectionsOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOptimalDirectionsOutputFormatPathParams;

  @Metadata()
  queryParams: PostOptimalDirectionsOutputFormatQueryParams;
}


export class PostOptimalDirectionsOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
