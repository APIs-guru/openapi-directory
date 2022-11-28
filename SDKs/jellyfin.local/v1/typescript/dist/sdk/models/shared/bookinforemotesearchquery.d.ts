import { SpeakeasyBase } from "../../../internal/utils";
import { BookInfo } from "./bookinfo";
export declare class BookInfoRemoteSearchQuery extends SpeakeasyBase {
    includeDisabledProviders?: boolean;
    itemId?: string;
    searchInfo?: BookInfo;
    searchProviderName?: string;
}
