import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Kmz = "kmz",
    Shp = "shp",
    Shpz = "shpz",
    Geojson = "geojson",
    Gml = "gml",
    Wkt = "wkt"
}


export class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" })
  fileFormatExtension: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" })
  geomarkId: string;
}


export class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=srid" })
  srid?: number;
}


export class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams;
}


export class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
