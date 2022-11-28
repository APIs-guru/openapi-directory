import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueueItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;
}
