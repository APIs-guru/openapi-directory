import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueueItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;
}
