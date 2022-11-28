import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTruckDistanceOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}


export class GetTruckDistanceOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetTruckDistanceOutputFormatOutputFormatEnum;
}

export enum GetTruckDistanceOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum GetTruckDistanceOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class GetTruckDistanceOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: GetTruckDistanceOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: GetTruckDistanceOutputFormatDistanceUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class GetTruckDistanceOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTruckDistanceOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTruckDistanceOutputFormatQueryParams;
}


export class GetTruckDistanceOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
