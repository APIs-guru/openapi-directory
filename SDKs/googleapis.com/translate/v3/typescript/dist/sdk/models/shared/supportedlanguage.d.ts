import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single supported language response corresponds to information related to one supported language.
**/
export declare class SupportedLanguage extends SpeakeasyBase {
    displayName?: string;
    languageCode?: string;
    supportSource?: boolean;
    supportTarget?: boolean;
}
