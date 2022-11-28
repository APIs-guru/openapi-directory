import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum {
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


export class GetGeomarksGeomarkIdPointFileFormatExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" })
  fileFormatExtension: GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" })
  geomarkId: string;
}


export class GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=srid" })
  srid?: number;
}


export class GetGeomarksGeomarkIdPointFileFormatExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGeomarksGeomarkIdPointFileFormatExtensionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams;
}


export class GetGeomarksGeomarkIdPointFileFormatExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
