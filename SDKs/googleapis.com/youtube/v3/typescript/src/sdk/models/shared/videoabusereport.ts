import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoAbuseReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=reasonId" })
  reasonId?: string;

  @Metadata({ data: "json, name=secondaryReasonId" })
  secondaryReasonId?: string;

  @Metadata({ data: "json, name=videoId" })
  videoId?: string;
}
