import { SpeakeasyBase } from "../../../internal/utils";
import { SongInfo } from "./songinfo";
export declare class ArtistInfo extends SpeakeasyBase {
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
