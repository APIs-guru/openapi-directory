import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EpisodeSimple } from "./episodesimple";
import { PodcastSimple } from "./podcastsimple";



export class GetPodcastsInBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latest_episodes", elemType: EpisodeSimple })
  latestEpisodes?: EpisodeSimple[];

  @SpeakeasyMetadata({ data: "json, name=podcasts", elemType: PodcastSimple })
  podcasts: PodcastSimple[];
}
