import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum {
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


export class GetGeomarksGeomarkIdFileFormatExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" })
  fileFormatExtension: GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" })
  geomarkId: string;
}


export class GetGeomarksGeomarkIdFileFormatExtensionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=srid" })
  srid?: number;
}


export class GetGeomarksGeomarkIdFileFormatExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeomarksGeomarkIdFileFormatExtensionPathParams;

  @Metadata()
  queryParams: GetGeomarksGeomarkIdFileFormatExtensionQueryParams;
}


export class GetGeomarksGeomarkIdFileFormatExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
