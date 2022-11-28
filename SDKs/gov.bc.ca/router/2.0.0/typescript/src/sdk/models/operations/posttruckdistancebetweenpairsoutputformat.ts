import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json",
    Html = "html"
}


export class PostTruckDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
}

export enum PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class PostTruckDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;

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


export class PostTruckDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTruckDistanceBetweenPairsOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: PostTruckDistanceBetweenPairsOutputFormatQueryParams;
}


export class PostTruckDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
