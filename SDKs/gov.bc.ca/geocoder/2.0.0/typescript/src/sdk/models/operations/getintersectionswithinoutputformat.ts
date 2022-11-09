import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetIntersectionsWithinOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetIntersectionsWithinOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetIntersectionsWithinOutputFormatOutputFormatEnum;
}


export class GetIntersectionsWithinOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDegree" })
  maxDegree?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minDegree" })
  minDegree?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;
}


export class GetIntersectionsWithinOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIntersectionsWithinOutputFormatPathParams;

  @Metadata()
  queryParams: GetIntersectionsWithinOutputFormatQueryParams;
}


export class GetIntersectionsWithinOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
