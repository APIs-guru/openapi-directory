import { SpeakeasyBase } from "../../../internal/utils";
import { Attribution } from "./attribution";
import { MediaItemDataRef } from "./mediaitemdataref";
import { Dimensions } from "./dimensions";
import { MediaInsights } from "./mediainsights";
import { LocationAssociation } from "./locationassociation";
export declare enum MediaItemMediaFormatEnum {
    MediaFormatUnspecified = "MEDIA_FORMAT_UNSPECIFIED",
    Photo = "PHOTO",
    Video = "VIDEO"
}
/**
 * A single media item.
**/
export declare class MediaItem extends SpeakeasyBase {
    attribution?: Attribution;
    createTime?: string;
    dataRef?: MediaItemDataRef;
    description?: string;
    dimensions?: Dimensions;
    googleUrl?: string;
    insights?: MediaInsights;
    locationAssociation?: LocationAssociation;
    mediaFormat?: MediaItemMediaFormatEnum;
    name?: string;
    sourceUrl?: string;
    thumbnailUrl?: string;
}
