import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Attribution } from "./attribution";
import { MediaItemDataRef } from "./mediaitemdataref";
import { Dimensions } from "./dimensions";
import { MediaInsights } from "./mediainsights";
import { LocationAssociation } from "./locationassociation";

export enum MediaItemMediaFormatEnum {
    MediaFormatUnspecified = "MEDIA_FORMAT_UNSPECIFIED"
,    Photo = "PHOTO"
,    Video = "VIDEO"
}


// MediaItem
/** 
 * A single media item.
**/
export class MediaItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: Attribution;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dataRef" })
  dataRef?: MediaItemDataRef;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @Metadata({ data: "json, name=googleUrl" })
  googleUrl?: string;

  @Metadata({ data: "json, name=insights" })
  insights?: MediaInsights;

  @Metadata({ data: "json, name=locationAssociation" })
  locationAssociation?: LocationAssociation;

  @Metadata({ data: "json, name=mediaFormat" })
  mediaFormat?: MediaItemMediaFormatEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
