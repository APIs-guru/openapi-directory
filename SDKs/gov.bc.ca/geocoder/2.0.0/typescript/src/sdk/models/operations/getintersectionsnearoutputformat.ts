import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetIntersectionsNearOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}


export class GetIntersectionsNearOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetIntersectionsNearOutputFormatOutputFormatEnum;
}


export class GetIntersectionsNearOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDegree" })
  maxDegree?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDegree" })
  minDegree?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string;
}


export class GetIntersectionsNearOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntersectionsNearOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetIntersectionsNearOutputFormatQueryParams;
}


export class GetIntersectionsNearOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
