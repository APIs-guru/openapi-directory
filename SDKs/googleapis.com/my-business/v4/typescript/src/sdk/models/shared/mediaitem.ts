import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribution } from "./attribution";
import { MediaItemDataRef } from "./mediaitemdataref";
import { Dimensions } from "./dimensions";
import { MediaInsights } from "./mediainsights";
import { LocationAssociation } from "./locationassociation";


export enum MediaItemMediaFormatEnum {
    MediaFormatUnspecified = "MEDIA_FORMAT_UNSPECIFIED",
    Photo = "PHOTO",
    Video = "VIDEO"
}


// MediaItem
/** 
 * A single media item.
**/
export class MediaItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: Attribution;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dataRef" })
  dataRef?: MediaItemDataRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=googleUrl" })
  googleUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=insights" })
  insights?: MediaInsights;

  @SpeakeasyMetadata({ data: "json, name=locationAssociation" })
  locationAssociation?: LocationAssociation;

  @SpeakeasyMetadata({ data: "json, name=mediaFormat" })
  mediaFormat?: MediaItemMediaFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
