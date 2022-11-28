import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json",
    Html = "html"
}


export class GetDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetDistanceBetweenPairsOutputFormatOutputFormatEnum;
}

export enum GetDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum GetDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class GetDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: GetDistanceBetweenPairsOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: GetDistanceBetweenPairsOutputFormatDistanceUnitEnum;

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


export class GetDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistanceBetweenPairsOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDistanceBetweenPairsOutputFormatQueryParams;
}


export class GetDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
