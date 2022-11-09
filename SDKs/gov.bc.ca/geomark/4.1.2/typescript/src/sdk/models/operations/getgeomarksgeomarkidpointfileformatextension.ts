import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum {
    Json = "json"
,    Xml = "xml"
,    Kml = "kml"
,    Kmz = "kmz"
,    Shp = "shp"
,    Shpz = "shpz"
,    Geojson = "geojson"
,    Gml = "gml"
,    Wkt = "wkt"
}


export class GetGeomarksGeomarkIdPointFileFormatExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" })
  fileFormatExtension: GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" })
  geomarkId: string;
}


export class GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=srid" })
  srid?: number;
}


export class GetGeomarksGeomarkIdPointFileFormatExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeomarksGeomarkIdPointFileFormatExtensionPathParams;

  @Metadata()
  queryParams: GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams;
}


export class GetGeomarksGeomarkIdPointFileFormatExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
