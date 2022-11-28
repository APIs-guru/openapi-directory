import { SpeakeasyBase } from "../../../internal/utils";
import { Case } from "./case";
/**
 * The response message for the SearchCases endpoint.
**/
export declare class SearchCasesResponse extends SpeakeasyBase {
    cases?: Case[];
    nextPageToken?: string;
}
