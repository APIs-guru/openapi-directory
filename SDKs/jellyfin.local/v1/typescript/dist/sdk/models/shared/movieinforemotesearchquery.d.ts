import { SpeakeasyBase } from "../../../internal/utils";
import { MovieInfo } from "./movieinfo";
export declare class MovieInfoRemoteSearchQuery extends SpeakeasyBase {
    includeDisabledProviders?: boolean;
    itemId?: string;
    searchInfo?: MovieInfo;
    searchProviderName?: string;
}
