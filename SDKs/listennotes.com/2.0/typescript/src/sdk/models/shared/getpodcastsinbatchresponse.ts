import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EpisodeSimple } from "./episodesimple";
import { PodcastSimple } from "./podcastsimple";


export class GetPodcastsInBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=latest_episodes", elemType: shared.EpisodeSimple })
  latestEpisodes?: EpisodeSimple[];

  @Metadata({ data: "json, name=podcasts", elemType: shared.PodcastSimple })
  podcasts: PodcastSimple[];
}
