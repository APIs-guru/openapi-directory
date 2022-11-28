import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum {
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


export class GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" })
  fileFormatExtension: GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" })
  geomarkId: string;
}


export class GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=srid" })
  srid?: number;
}


export class GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams;
}


export class GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
