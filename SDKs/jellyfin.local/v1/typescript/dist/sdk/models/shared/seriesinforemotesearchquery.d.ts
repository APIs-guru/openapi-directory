import { SpeakeasyBase } from "../../../internal/utils";
import { SeriesInfo } from "./seriesinfo";
export declare class SeriesInfoRemoteSearchQuery extends SpeakeasyBase {
    includeDisabledProviders?: boolean;
    itemId?: string;
    searchInfo?: SeriesInfo;
    searchProviderName?: string;
}
