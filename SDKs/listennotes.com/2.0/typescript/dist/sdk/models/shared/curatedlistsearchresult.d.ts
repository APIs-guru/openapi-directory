import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastMinimum } from "./podcastminimum";
/**
 * When **type** is *curated*.
**/
export declare class CuratedListSearchResult extends SpeakeasyBase {
    descriptionHighlighted?: string;
    descriptionOriginal?: string;
    id?: string;
    listennotesUrl?: string;
    podcasts?: PodcastMinimum[];
    pubDateMs?: number;
    sourceDomain?: string;
    sourceUrl?: string;
    titleHighlighted?: string;
    titleOriginal?: string;
    total?: number;
}
