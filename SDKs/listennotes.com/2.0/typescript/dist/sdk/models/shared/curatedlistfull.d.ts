import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastSimple } from "./podcastsimple";
export declare class CuratedListFull extends SpeakeasyBase {
    description?: string;
    id?: string;
    listennotesUrl?: string;
    podcasts?: PodcastSimple[];
    pubDateMs?: number;
    sourceDomain?: string;
    sourceUrl?: string;
    title?: string;
    total?: number;
}
