import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum {
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


export class GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" })
  fileFormatExtension: GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" })
  geomarkId: string;
}


export class GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=srid" })
  srid?: number;
}


export class GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams;

  @Metadata()
  queryParams: GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams;
}


export class GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
