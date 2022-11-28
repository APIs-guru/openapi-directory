import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}


export class GetIntersectionsIntersectionIdOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=intersectionID" })
  intersectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum;
}


export class GetIntersectionsIntersectionIdOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;
}


export class GetIntersectionsIntersectionIdOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntersectionsIntersectionIdOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetIntersectionsIntersectionIdOutputFormatQueryParams;
}


export class GetIntersectionsIntersectionIdOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
