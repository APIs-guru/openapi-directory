import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MediaItemDataRef
/** 
 * Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem.
**/
export class MediaItemDataRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
