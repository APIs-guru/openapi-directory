import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum {
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


export class GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" })
  fileFormatExtension: GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" })
  geomarkId: string;
}


export class GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=srid" })
  srid?: number;
}


export class GetGeomarksGeomarkIdPartsFileFormatExtensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams;

  @Metadata()
  queryParams: GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams;
}


export class GetGeomarksGeomarkIdPartsFileFormatExtensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
