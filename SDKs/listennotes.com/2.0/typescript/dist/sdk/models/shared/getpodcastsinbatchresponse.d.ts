import { SpeakeasyBase } from "../../../internal/utils";
import { EpisodeSimple } from "./episodesimple";
import { PodcastSimple } from "./podcastsimple";
export declare class GetPodcastsInBatchResponse extends SpeakeasyBase {
    latestEpisodes?: EpisodeSimple[];
    podcasts: PodcastSimple[];
}
