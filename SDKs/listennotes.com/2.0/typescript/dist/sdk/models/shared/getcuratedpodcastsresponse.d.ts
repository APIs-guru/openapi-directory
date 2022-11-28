import { SpeakeasyBase } from "../../../internal/utils";
import { CuratedListSimple } from "./curatedlistsimple";
export declare class GetCuratedPodcastsResponse extends SpeakeasyBase {
    curatedLists: CuratedListSimple[];
    hasNext: boolean;
    hasPrevious: boolean;
    nextPageNumber: number;
    pageNumber: number;
    previousPageNumber: number;
    total: number;
}
