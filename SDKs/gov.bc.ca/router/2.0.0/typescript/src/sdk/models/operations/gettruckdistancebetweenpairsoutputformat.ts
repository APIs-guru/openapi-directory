import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json",
    Html = "html"
}


export class GetTruckDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
}

export enum GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class GetTruckDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromPoints" })
  fromPoints: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxPairs" })
  maxPairs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toPoints" })
  toPoints: string;
}


export class GetTruckDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTruckDistanceBetweenPairsOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTruckDistanceBetweenPairsOutputFormatQueryParams;
}


export class GetTruckDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
