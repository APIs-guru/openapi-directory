import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlaylistItemContentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=endAt" })
  endAt?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=startAt" })
  startAt?: string;

  @Metadata({ data: "json, name=videoId" })
  videoId?: string;

  @Metadata({ data: "json, name=videoPublishedAt" })
  videoPublishedAt?: Date;
}
