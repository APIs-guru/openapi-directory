import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PodcastMinimum extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=listen_score" })
  listenScore?: number;

  @Metadata({ data: "json, name=listen_score_global_rank" })
  listenScoreGlobalRank?: string;

  @Metadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
