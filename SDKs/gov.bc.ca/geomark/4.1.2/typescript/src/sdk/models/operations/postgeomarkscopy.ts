import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGeomarksCopyBufferCapEnum {
    Round = "ROUND"
,    Square = "SQUARE"
,    Flat = "FLAT"
}

export enum PostGeomarksCopyBufferJoinEnum {
    Round = "ROUND"
,    Mitre = "MITRE"
,    Bevel = "BEVEL"
}

export enum PostGeomarksCopyResultFormatEnum {
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


export class PostGeomarksCopyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allowOverlap" })
  allowOverlap?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bufferCap" })
  bufferCap?: PostGeomarksCopyBufferCapEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bufferJoin" })
  bufferJoin?: PostGeomarksCopyBufferJoinEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bufferMetres" })
  bufferMetres?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bufferMitreLimit" })
  bufferMitreLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bufferSegments" })
  bufferSegments?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=failureRedirectUrl" })
  failureRedirectUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=geomarkUrl" })
  geomarkUrl: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=redirectUrl" })
  redirectUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resultFormat" })
  resultFormat?: PostGeomarksCopyResultFormatEnum;
}


export class PostGeomarksCopyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGeomarksCopyQueryParams;
}


export class PostGeomarksCopyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
