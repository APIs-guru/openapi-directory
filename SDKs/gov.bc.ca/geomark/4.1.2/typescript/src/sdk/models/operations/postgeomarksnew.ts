import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGeomarksNewRequestBodyBufferCapEnum {
    Round = "ROUND",
    Square = "SQUARE",
    Flat = "FLAT"
}

export enum PostGeomarksNewRequestBodyBufferJoinEnum {
    Round = "ROUND",
    Mitre = "MITRE",
    Bevel = "BEVEL"
}

export enum PostGeomarksNewRequestBodyFormatEnum {
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

export enum PostGeomarksNewRequestBodyResultFormatEnum {
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


export class PostGeomarksNewRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=allowOverlap;" })
  allowOverlap?: boolean;

  @SpeakeasyMetadata({ data: "form, name=body;" })
  body?: string;

  @SpeakeasyMetadata({ data: "form, name=bufferCap;" })
  bufferCap?: PostGeomarksNewRequestBodyBufferCapEnum;

  @SpeakeasyMetadata({ data: "form, name=bufferJoin;" })
  bufferJoin?: PostGeomarksNewRequestBodyBufferJoinEnum;

  @SpeakeasyMetadata({ data: "form, name=bufferMetres;" })
  bufferMetres?: number;

  @SpeakeasyMetadata({ data: "form, name=bufferMitreLimit;" })
  bufferMitreLimit?: number;

  @SpeakeasyMetadata({ data: "form, name=bufferSegments;" })
  bufferSegments?: number;

  @SpeakeasyMetadata({ data: "form, name=callback;" })
  callback?: string;

  @SpeakeasyMetadata({ data: "form, name=failureRedirectUrl;" })
  failureRedirectUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=format;" })
  format?: PostGeomarksNewRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "form, name=multiple;" })
  multiple?: boolean;

  @SpeakeasyMetadata({ data: "form, name=redirectUrl;" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=resultFormat;" })
  resultFormat?: PostGeomarksNewRequestBodyResultFormatEnum;

  @SpeakeasyMetadata({ data: "form, name=srid;" })
  srid?: number;
}


export class PostGeomarksNewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PostGeomarksNewRequestBody;
}


export class PostGeomarksNewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
