import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json",
    Html = "html"
}


export class PostDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostDistanceBetweenPairsOutputFormatOutputFormatEnum;
}

export enum PostDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}

export enum PostDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}


export class PostDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostDistanceBetweenPairsOutputFormatCriteriaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostDistanceBetweenPairsOutputFormatDistanceUnitEnum;

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


export class PostDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDistanceBetweenPairsOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: PostDistanceBetweenPairsOutputFormatQueryParams;
}


export class PostDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
