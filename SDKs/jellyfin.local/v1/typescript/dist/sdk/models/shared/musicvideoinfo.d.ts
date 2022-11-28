import { SpeakeasyBase } from "../../../internal/utils";
export declare class MusicVideoInfo extends SpeakeasyBase {
    artists?: string[];
    indexNumber?: number;
    isAutomated?: boolean;
    metadataCountryCode?: string;
    metadataLanguage?: string;
    name?: string;
    parentIndexNumber?: number;
    path?: string;
    premiereDate?: Date;
    providerIds?: Map<string, string>;
    year?: number;
}
