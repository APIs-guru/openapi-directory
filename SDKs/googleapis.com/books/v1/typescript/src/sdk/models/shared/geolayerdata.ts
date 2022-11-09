import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GeolayerdataCommon extends SpeakeasyBase {
  @Metadata({ data: "json, name=lang" })
  lang?: string;

  @Metadata({ data: "json, name=previewImageUrl" })
  previewImageUrl?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: string;

  @Metadata({ data: "json, name=snippetUrl" })
  snippetUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class GeolayerdataGeoViewportHi extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class GeolayerdataGeoViewportLo extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}


// GeolayerdataGeoViewport
/** 
 * The viewport for showing this location. This is a latitude, longitude rectangle.
**/
export class GeolayerdataGeoViewport extends SpeakeasyBase {
  @Metadata({ data: "json, name=hi" })
  hi?: GeolayerdataGeoViewportHi;

  @Metadata({ data: "json, name=lo" })
  lo?: GeolayerdataGeoViewportLo;
}


export class GeolayerdataGeo extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundary" })
  boundary?: string[];

  @Metadata({ data: "json, name=cachePolicy" })
  cachePolicy?: string;

  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=mapType" })
  mapType?: string;

  @Metadata({ data: "json, name=viewport" })
  viewport?: GeolayerdataGeoViewport;

  @Metadata({ data: "json, name=zoom" })
  zoom?: number;
}


export class Geolayerdata extends SpeakeasyBase {
  @Metadata({ data: "json, name=common" })
  common?: GeolayerdataCommon;

  @Metadata({ data: "json, name=geo" })
  geo?: GeolayerdataGeo;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
