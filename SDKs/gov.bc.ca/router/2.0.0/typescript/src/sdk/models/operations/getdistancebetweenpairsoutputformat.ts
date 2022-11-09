import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json"
,    Html = "html"
}


export class GetDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetDistanceBetweenPairsOutputFormatOutputFormatEnum;
}

export enum GetDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum GetDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class GetDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: GetDistanceBetweenPairsOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: GetDistanceBetweenPairsOutputFormatDistanceUnitEnum;

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


export class GetDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistanceBetweenPairsOutputFormatPathParams;

  @Metadata()
  queryParams: GetDistanceBetweenPairsOutputFormatQueryParams;
}


export class GetDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
