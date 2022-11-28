import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum {
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


export class GetGeomarksGeomarkIdFileFormatExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" })
  fileFormatExtension: GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" })
  geomarkId: string;
}


export class GetGeomarksGeomarkIdFileFormatExtensionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=srid" })
  srid?: number;
}


export class GetGeomarksGeomarkIdFileFormatExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGeomarksGeomarkIdFileFormatExtensionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGeomarksGeomarkIdFileFormatExtensionQueryParams;
}


export class GetGeomarksGeomarkIdFileFormatExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
