import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json"
,    Html = "html"
}


export class PostDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostDistanceBetweenPairsOutputFormatOutputFormatEnum;
}

export enum PostDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum PostDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class PostDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostDistanceBetweenPairsOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostDistanceBetweenPairsOutputFormatDistanceUnitEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromPoints" })
  fromPoints: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxPairs" })
  maxPairs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=routeDescription" })
  routeDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=toPoints" })
  toPoints: string;
}


export class PostDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostDistanceBetweenPairsOutputFormatPathParams;

  @Metadata()
  queryParams: PostDistanceBetweenPairsOutputFormatQueryParams;
}


export class PostDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
