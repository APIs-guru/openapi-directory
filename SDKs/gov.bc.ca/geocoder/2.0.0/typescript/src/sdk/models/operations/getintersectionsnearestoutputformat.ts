import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetIntersectionsNearestOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetIntersectionsNearestOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetIntersectionsNearestOutputFormatOutputFormatEnum;
}


export class GetIntersectionsNearestOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDegree" })
  maxDegree?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minDegree" })
  minDegree?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string;
}


export class GetIntersectionsNearestOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIntersectionsNearestOutputFormatPathParams;

  @Metadata()
  queryParams: GetIntersectionsNearestOutputFormatQueryParams;
}


export class GetIntersectionsNearestOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
