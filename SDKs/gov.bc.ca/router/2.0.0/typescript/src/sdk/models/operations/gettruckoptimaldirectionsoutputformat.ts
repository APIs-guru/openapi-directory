import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetTruckOptimalDirectionsOutputFormatOutputFormatEnum {
    Json = "json"
,    Kml = "kml"
,    Html = "html"
}


export class GetTruckOptimalDirectionsOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetTruckOptimalDirectionsOutputFormatOutputFormatEnum;
}

export enum GetTruckOptimalDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class GetTruckOptimalDirectionsOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: GetTruckOptimalDirectionsOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class GetTruckOptimalDirectionsOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTruckOptimalDirectionsOutputFormatPathParams;

  @Metadata()
  queryParams: GetTruckOptimalDirectionsOutputFormatQueryParams;
}


export class GetTruckOptimalDirectionsOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
