import { SpeakeasyBase } from "../../../internal/utils";
import { I18nRegionSnippet } from "./i18nregionsnippet";
/**
 * A *i18nRegion* resource identifies a region where YouTube is available.
**/
export declare class I18nRegion extends SpeakeasyBase {
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: I18nRegionSnippet;
}
