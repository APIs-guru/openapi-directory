import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlaylistStatusPrivacyStatusEnum {
    Public = "public"
,    Unlisted = "unlisted"
,    Private = "private"
}


export class PlaylistStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=privacyStatus" })
  privacyStatus?: PlaylistStatusPrivacyStatusEnum;
}
