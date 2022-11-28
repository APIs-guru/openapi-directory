import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGeomarksCopyBufferCapEnum {
    Round = "ROUND",
    Square = "SQUARE",
    Flat = "FLAT"
}

export enum PostGeomarksCopyBufferJoinEnum {
    Round = "ROUND",
    Mitre = "MITRE",
    Bevel = "BEVEL"
}

export enum PostGeomarksCopyResultFormatEnum {
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


export class PostGeomarksCopyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowOverlap" })
  allowOverlap?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bufferCap" })
  bufferCap?: PostGeomarksCopyBufferCapEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bufferJoin" })
  bufferJoin?: PostGeomarksCopyBufferJoinEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bufferMetres" })
  bufferMetres?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bufferMitreLimit" })
  bufferMitreLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bufferSegments" })
  bufferSegments?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=failureRedirectUrl" })
  failureRedirectUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geomarkUrl" })
  geomarkUrl: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirectUrl" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resultFormat" })
  resultFormat?: PostGeomarksCopyResultFormatEnum;
}


export class PostGeomarksCopyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGeomarksCopyQueryParams;
}


export class PostGeomarksCopyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
