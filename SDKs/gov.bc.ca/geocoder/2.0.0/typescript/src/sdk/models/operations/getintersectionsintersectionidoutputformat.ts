import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetIntersectionsIntersectionIdOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=intersectionID" })
  intersectionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum;
}


export class GetIntersectionsIntersectionIdOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;
}


export class GetIntersectionsIntersectionIdOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIntersectionsIntersectionIdOutputFormatPathParams;

  @Metadata()
  queryParams: GetIntersectionsIntersectionIdOutputFormatQueryParams;
}


export class GetIntersectionsIntersectionIdOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
