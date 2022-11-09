import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json"
,    Html = "html"
}


export class PostTruckDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
}

export enum PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class PostTruckDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;

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


export class PostTruckDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTruckDistanceBetweenPairsOutputFormatPathParams;

  @Metadata()
  queryParams: PostTruckDistanceBetweenPairsOutputFormatQueryParams;
}


export class PostTruckDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
