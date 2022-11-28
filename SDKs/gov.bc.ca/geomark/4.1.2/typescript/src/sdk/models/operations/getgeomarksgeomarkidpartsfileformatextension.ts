import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum {
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


export class GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileFormatExtension" })
  fileFormatExtension: GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=geomarkId" })
  geomarkId: string;
}


export class GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=srid" })
  srid?: number;
}


export class GetGeomarksGeomarkIdPartsFileFormatExtensionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams;
}


export class GetGeomarksGeomarkIdPartsFileFormatExtensionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
