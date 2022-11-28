import { SpeakeasyBase } from "../../../internal/utils";
import { SongInfo } from "./songinfo";
export declare class AlbumInfo extends SpeakeasyBase {
    albumArtists?: string[];
    artistProviderIds?: Map<string, string>;
    indexNumber?: number;
    isAutomated?: boolean;
    metadataCountryCode?: string;
    metadataLanguage?: string;
    name?: string;
    parentIndexNumber?: number;
    path?: string;
    premiereDate?: Date;
    providerIds?: Map<string, string>;
    songInfos?: SongInfo[];
    year?: number;
}
