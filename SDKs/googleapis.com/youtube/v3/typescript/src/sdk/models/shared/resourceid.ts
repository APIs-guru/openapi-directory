import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceId
/** 
 * A resource id is a generic reference that points to another YouTube resource.
**/
export class ResourceId extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=playlistId" })
  playlistId?: string;

  @Metadata({ data: "json, name=videoId" })
  videoId?: string;
}
