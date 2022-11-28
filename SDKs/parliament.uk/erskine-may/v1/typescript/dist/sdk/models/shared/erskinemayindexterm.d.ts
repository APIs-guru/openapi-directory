import { SpeakeasyBase } from "../../../internal/utils";
import { ErskineMayParagraphSearchResult } from "./erskinemayparagraphsearchresult";
import { ErskineMayIndexTermSeeLink } from "./erskinemayindextermseelink";
export declare class ErskineMayIndexTerm extends SpeakeasyBase {
    childTerms?: ErskineMayIndexTerm[];
    displayAs?: string;
    id?: number;
    parentTerm?: ErskineMayIndexTerm;
    references?: ErskineMayParagraphSearchResult[];
    seeLinks?: ErskineMayIndexTermSeeLink[];
    term?: string;
}
