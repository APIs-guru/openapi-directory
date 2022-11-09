import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json"
,    Html = "html"
}


export class GetTruckDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
}

export enum GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest"
,    Fastest = "fastest"
}

export enum GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km"
,    Mi = "mi"
}


export class GetTruckDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=correctSide" })
  correctSide?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=criteria" })
  criteria?: GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=departure" })
  departure?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disable" })
  disable?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=distanceUnit" })
  distanceUnit?: GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;

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


export class GetTruckDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTruckDistanceBetweenPairsOutputFormatPathParams;

  @Metadata()
  queryParams: GetTruckDistanceBetweenPairsOutputFormatQueryParams;
}


export class GetTruckDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
