import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GeolayerdataCommon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "json, name=previewImageUrl" })
  previewImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: string;

  @SpeakeasyMetadata({ data: "json, name=snippetUrl" })
  snippetUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GeolayerdataGeoViewportHi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}


export class GeolayerdataGeoViewportLo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}


// GeolayerdataGeoViewport
/** 
 * The viewport for showing this location. This is a latitude, longitude rectangle.
**/
export class GeolayerdataGeoViewport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hi" })
  hi?: GeolayerdataGeoViewportHi;

  @SpeakeasyMetadata({ data: "json, name=lo" })
  lo?: GeolayerdataGeoViewportLo;
}


export class GeolayerdataGeo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundary" })
  boundary?: string[];

  @SpeakeasyMetadata({ data: "json, name=cachePolicy" })
  cachePolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=mapType" })
  mapType?: string;

  @SpeakeasyMetadata({ data: "json, name=viewport" })
  viewport?: GeolayerdataGeoViewport;

  @SpeakeasyMetadata({ data: "json, name=zoom" })
  zoom?: number;
}


export class Geolayerdata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common" })
  common?: GeolayerdataCommon;

  @SpeakeasyMetadata({ data: "json, name=geo" })
  geo?: GeolayerdataGeo;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
