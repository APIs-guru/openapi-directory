import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum {
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


export class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" })
  fileFormatExtension: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" })
  geomarkId: string;
}


export class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=srid" })
  srid?: number;
}


export class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams;

  @Metadata()
  queryParams: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams;
}


export class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
