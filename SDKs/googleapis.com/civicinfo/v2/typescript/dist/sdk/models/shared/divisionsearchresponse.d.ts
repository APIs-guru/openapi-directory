import { SpeakeasyBase } from "../../../internal/utils";
import { DivisionSearchResult } from "./divisionsearchresult";
/**
 * The result of a division search query.
**/
export declare class DivisionSearchResponse extends SpeakeasyBase {
    kind?: string;
    results?: DivisionSearchResult[];
}
