import { SpeakeasyBase } from "../../../internal/utils";
import { I18nLanguageSnippet } from "./i18nlanguagesnippet";
/**
 * An *i18nLanguage* resource identifies a UI language currently supported by YouTube.
**/
export declare class I18nLanguage extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: I18nLanguageSnippet;
}
