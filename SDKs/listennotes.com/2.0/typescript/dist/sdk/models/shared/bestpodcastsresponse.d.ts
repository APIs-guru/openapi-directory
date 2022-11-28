import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastSimple } from "./podcastsimple";
export declare class BestPodcastsResponse extends SpeakeasyBase {
    hasNext: boolean;
    hasPrevious: boolean;
    id: number;
    listennotesUrl: string;
    name: string;
    nextPageNumber: number;
    pageNumber: number;
    parentId: number;
    podcasts: PodcastSimple[];
    previousPageNumber: number;
    total: number;
}
