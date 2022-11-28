import { SpeakeasyBase } from "../../../internal/utils";
/**
 * When **type** is *podcast*.
**/
export declare class PodcastSearchResult extends SpeakeasyBase {
    descriptionHighlighted?: string;
    descriptionOriginal?: string;
    earliestPubDateMs?: number;
    email?: string;
    explicitContent?: boolean;
    genreIds?: number[];
    id?: string;
    image?: string;
    itunesId?: number;
    latestPubDateMs?: number;
    listenScore?: number;
    listenScoreGlobalRank?: string;
    listennotesUrl?: string;
    publisherHighlighted?: string;
    publisherOriginal?: string;
    rss?: string;
    thumbnail?: string;
    titleHighlighted?: string;
    titleOriginal?: string;
    totalEpisodes?: number;
    website?: string;
}
