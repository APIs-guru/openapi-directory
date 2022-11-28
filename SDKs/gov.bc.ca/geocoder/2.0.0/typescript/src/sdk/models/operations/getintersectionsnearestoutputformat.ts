import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetIntersectionsNearestOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}


export class GetIntersectionsNearestOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetIntersectionsNearestOutputFormatOutputFormatEnum;
}


export class GetIntersectionsNearestOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDegree" })
  maxDegree?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDegree" })
  minDegree?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string;
}


export class GetIntersectionsNearestOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntersectionsNearestOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetIntersectionsNearestOutputFormatQueryParams;
}


export class GetIntersectionsNearestOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
