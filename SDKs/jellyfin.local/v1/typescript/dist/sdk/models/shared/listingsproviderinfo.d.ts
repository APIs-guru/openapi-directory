import { SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
export declare class ListingsProviderInfo extends SpeakeasyBase {
    channelMappings?: NameValuePair[];
    country?: string;
    enableAllTuners?: boolean;
    enabledTuners?: string[];
    id?: string;
    kidsCategories?: string[];
    listingsId?: string;
    movieCategories?: string[];
    moviePrefix?: string;
    newsCategories?: string[];
    password?: string;
    path?: string;
    preferredLanguage?: string;
    sportsCategories?: string[];
    type?: string;
    userAgent?: string;
    username?: string;
    zipCode?: string;
}
