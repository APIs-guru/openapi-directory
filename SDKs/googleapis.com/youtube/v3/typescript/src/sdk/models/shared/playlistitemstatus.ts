import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlaylistItemStatusPrivacyStatusEnum {
    Public = "public"
,    Unlisted = "unlisted"
,    Private = "private"
}


// PlaylistItemStatus
/** 
 * Information about the playlist item's privacy status.
**/
export class PlaylistItemStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacyStatus" })
  privacyStatus?: PlaylistItemStatusPrivacyStatusEnum;
}
