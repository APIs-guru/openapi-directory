import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoAbuseReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonId" })
  reasonId?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryReasonId" })
  secondaryReasonId?: string;

  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId?: string;
}
