import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTruckOptimalDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}


export class GetTruckOptimalDirectionsOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetTruckOptimalDirectionsOutputFormatOutputFormatEnum;
}

export enum GetTruckOptimalDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class GetTruckOptimalDirectionsOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: GetTruckOptimalDirectionsOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class GetTruckOptimalDirectionsOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTruckOptimalDirectionsOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTruckOptimalDirectionsOutputFormatQueryParams;
}


export class GetTruckOptimalDirectionsOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
