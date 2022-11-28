import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}


export class GetRouteOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetRouteOutputFormatOutputFormatEnum;
}

export enum GetRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum GetRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class GetRouteOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: GetRouteOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: GetRouteOutputFormatDistanceUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=points" })
  points: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roundTrip" })
  roundTrip?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;
}


export class GetRouteOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRouteOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRouteOutputFormatQueryParams;
}


export class GetRouteOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
