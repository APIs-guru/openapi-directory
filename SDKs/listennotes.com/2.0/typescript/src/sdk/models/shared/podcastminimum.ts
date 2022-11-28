import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PodcastMinimum extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=listen_score" })
  listenScore?: number;

  @SpeakeasyMetadata({ data: "json, name=listen_score_global_rank" })
  listenScoreGlobalRank?: string;

  @SpeakeasyMetadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
