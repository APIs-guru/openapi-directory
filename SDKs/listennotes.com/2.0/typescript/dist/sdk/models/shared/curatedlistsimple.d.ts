import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastMinimum } from "./podcastminimum";
export declare class CuratedListSimple extends SpeakeasyBase {
    description?: string;
    id?: string;
    listennotesUrl?: string;
    podcasts?: PodcastMinimum[];
    pubDateMs?: number;
    sourceDomain?: string;
    sourceUrl?: string;
    title?: string;
    total?: number;
}
