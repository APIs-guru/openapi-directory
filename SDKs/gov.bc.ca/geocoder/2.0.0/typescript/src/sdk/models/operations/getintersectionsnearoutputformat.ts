import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetIntersectionsNearOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetIntersectionsNearOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetIntersectionsNearOutputFormatOutputFormatEnum;
}


export class GetIntersectionsNearOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDegree" })
  maxDegree?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minDegree" })
  minDegree?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string;
}


export class GetIntersectionsNearOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIntersectionsNearOutputFormatPathParams;

  @Metadata()
  queryParams: GetIntersectionsNearOutputFormatQueryParams;
}


export class GetIntersectionsNearOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
