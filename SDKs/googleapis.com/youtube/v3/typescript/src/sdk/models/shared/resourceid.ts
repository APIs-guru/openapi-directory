import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceId
/** 
 * A resource id is a generic reference that points to another YouTube resource.
**/
export class ResourceId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=playlistId" })
  playlistId?: string;

  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId?: string;
}
