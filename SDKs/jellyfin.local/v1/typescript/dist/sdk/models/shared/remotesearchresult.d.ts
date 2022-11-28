import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoteSearchResult extends SpeakeasyBase {
    albumArtist?: RemoteSearchResult;
    artists?: RemoteSearchResult[];
    imageUrl?: string;
    indexNumber?: number;
    indexNumberEnd?: number;
    name?: string;
    overview?: string;
    parentIndexNumber?: number;
    premiereDate?: Date;
    productionYear?: number;
    providerIds?: Map<string, string>;
    searchProviderName?: string;
}
