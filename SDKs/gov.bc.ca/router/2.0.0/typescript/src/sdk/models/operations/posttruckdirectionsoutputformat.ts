import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostTruckDirectionsOutputFormatOutputFormatEnum {
    Json = "json"
,    Kml = "kml"
,    Html = "html"
}


export class PostTruckDirectionsOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostTruckDirectionsOutputFormatOutputFormatEnum;
}

export enum PostTruckDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum PostTruckDirectionsOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class PostTruckDirectionsOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostTruckDirectionsOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostTruckDirectionsOutputFormatDistanceUnitEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class PostTruckDirectionsOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTruckDirectionsOutputFormatPathParams;

  @Metadata()
  queryParams: PostTruckDirectionsOutputFormatQueryParams;
}


export class PostTruckDirectionsOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
