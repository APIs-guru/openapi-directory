import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetOptimalDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}


export class GetOptimalDirectionsOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetOptimalDirectionsOutputFormatOutputFormatEnum;
}

export enum GetOptimalDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum GetOptimalDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class GetOptimalDirectionsOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: GetOptimalDirectionsOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: GetOptimalDirectionsOutputFormatDistanceUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class GetOptimalDirectionsOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOptimalDirectionsOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOptimalDirectionsOutputFormatQueryParams;
}


export class GetOptimalDirectionsOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
