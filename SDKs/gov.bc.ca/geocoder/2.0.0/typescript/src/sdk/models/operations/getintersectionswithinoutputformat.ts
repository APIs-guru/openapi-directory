import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetIntersectionsWithinOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}


export class GetIntersectionsWithinOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetIntersectionsWithinOutputFormatOutputFormatEnum;
}


export class GetIntersectionsWithinOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDegree" })
  maxDegree?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDegree" })
  minDegree?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;
}


export class GetIntersectionsWithinOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntersectionsWithinOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetIntersectionsWithinOutputFormatQueryParams;
}


export class GetIntersectionsWithinOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
