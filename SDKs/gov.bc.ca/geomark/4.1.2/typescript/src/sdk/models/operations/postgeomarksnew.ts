import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGeomarksNewRequestBodyBufferCapEnum {
    Round = "ROUND"
,    Square = "SQUARE"
,    Flat = "FLAT"
}

export enum PostGeomarksNewRequestBodyBufferJoinEnum {
    Round = "ROUND"
,    Mitre = "MITRE"
,    Bevel = "BEVEL"
}

export enum PostGeomarksNewRequestBodyFormatEnum {
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

export enum PostGeomarksNewRequestBodyResultFormatEnum {
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


export class PostGeomarksNewRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=allowOverlap;" })
  allowOverlap?: boolean;

  @Metadata({ data: "form, name=body;" })
  body?: string;

  @Metadata({ data: "form, name=bufferCap;" })
  bufferCap?: PostGeomarksNewRequestBodyBufferCapEnum;

  @Metadata({ data: "form, name=bufferJoin;" })
  bufferJoin?: PostGeomarksNewRequestBodyBufferJoinEnum;

  @Metadata({ data: "form, name=bufferMetres;" })
  bufferMetres?: number;

  @Metadata({ data: "form, name=bufferMitreLimit;" })
  bufferMitreLimit?: number;

  @Metadata({ data: "form, name=bufferSegments;" })
  bufferSegments?: number;

  @Metadata({ data: "form, name=callback;" })
  callback?: string;

  @Metadata({ data: "form, name=failureRedirectUrl;" })
  failureRedirectUrl?: string;

  @Metadata({ data: "form, name=format;" })
  format?: PostGeomarksNewRequestBodyFormatEnum;

  @Metadata({ data: "form, name=multiple;" })
  multiple?: boolean;

  @Metadata({ data: "form, name=redirectUrl;" })
  redirectUrl?: string;

  @Metadata({ data: "form, name=resultFormat;" })
  resultFormat?: PostGeomarksNewRequestBodyResultFormatEnum;

  @Metadata({ data: "form, name=srid;" })
  srid?: number;
}


export class PostGeomarksNewRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PostGeomarksNewRequestBody;
}


export class PostGeomarksNewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
