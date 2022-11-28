import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlaylistItemContentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endAt" })
  endAt?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=startAt" })
  startAt?: string;

  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId?: string;

  @SpeakeasyMetadata({ data: "json, name=videoPublishedAt" })
  videoPublishedAt?: Date;
}
