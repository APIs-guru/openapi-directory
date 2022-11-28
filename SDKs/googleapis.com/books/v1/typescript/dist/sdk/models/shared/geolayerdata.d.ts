import { SpeakeasyBase } from "../../../internal/utils";
export declare class GeolayerdataCommon extends SpeakeasyBase {
    lang?: string;
    previewImageUrl?: string;
    snippet?: string;
    snippetUrl?: string;
    title?: string;
}
export declare class GeolayerdataGeoViewportHi extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
export declare class GeolayerdataGeoViewportLo extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
/**
 * The viewport for showing this location. This is a latitude, longitude rectangle.
**/
export declare class GeolayerdataGeoViewport extends SpeakeasyBase {
    hi?: GeolayerdataGeoViewportHi;
    lo?: GeolayerdataGeoViewportLo;
}
export declare class GeolayerdataGeo extends SpeakeasyBase {
    boundary?: string[];
    cachePolicy?: string;
    countryCode?: string;
    latitude?: number;
    longitude?: number;
    mapType?: string;
    viewport?: GeolayerdataGeoViewport;
    zoom?: number;
}
export declare class Geolayerdata extends SpeakeasyBase {
    common?: GeolayerdataCommon;
    geo?: GeolayerdataGeo;
    kind?: string;
}
