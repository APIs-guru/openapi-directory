import { SpeakeasyBase } from "../../../internal/utils";
import { ArtistInfo } from "./artistinfo";
export declare class ArtistInfoRemoteSearchQuery extends SpeakeasyBase {
    includeDisabledProviders?: boolean;
    itemId?: string;
    searchInfo?: ArtistInfo;
    searchProviderName?: string;
}
