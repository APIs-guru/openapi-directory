import { SpeakeasyBase } from "../../../internal/utils";
import { AlbumInfo } from "./albuminfo";
export declare class AlbumInfoRemoteSearchQuery extends SpeakeasyBase {
    includeDisabledProviders?: boolean;
    itemId?: string;
    searchInfo?: AlbumInfo;
    searchProviderName?: string;
}
