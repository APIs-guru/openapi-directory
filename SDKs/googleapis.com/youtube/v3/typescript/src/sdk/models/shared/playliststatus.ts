import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlaylistStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}


export class PlaylistStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privacyStatus" })
  privacyStatus?: PlaylistStatusPrivacyStatusEnum;
}
