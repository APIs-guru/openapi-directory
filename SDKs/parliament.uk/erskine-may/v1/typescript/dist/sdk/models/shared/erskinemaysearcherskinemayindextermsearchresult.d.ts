import { SpeakeasyBase } from "../../../internal/utils";
import { ErskineMayIndexTermSearchResult } from "./erskinemayindextermsearchresult";
export declare class ErskineMaySearchErskineMayIndexTermSearchResult extends SpeakeasyBase {
    searchResults?: ErskineMayIndexTermSearchResult[];
    searchTerm?: string;
    searchTerms?: string[];
    skip?: number;
    suggestedSearch?: string;
    take?: number;
    totalResults?: number;
}
