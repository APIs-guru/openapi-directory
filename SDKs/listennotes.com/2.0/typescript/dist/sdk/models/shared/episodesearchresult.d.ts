import { SpeakeasyBase } from "../../../internal/utils";
import { EpisodeSearchResultPodcast } from "./episodesearchresultpodcast";
/**
 * When **type** is *episode*.
**/
export declare class EpisodeSearchResult extends SpeakeasyBase {
    audio?: string;
    audioLengthSec?: number;
    descriptionHighlighted?: string;
    descriptionOriginal?: string;
    explicitContent?: boolean;
    id?: string;
    image?: string;
    itunesId?: number;
    link?: string;
    listennotesUrl?: string;
    podcast?: EpisodeSearchResultPodcast;
    pubDateMs?: number;
    rss?: string;
    thumbnail?: string;
    titleHighlighted?: string;
    titleOriginal?: string;
    transcriptsHighlighted?: string[];
}
