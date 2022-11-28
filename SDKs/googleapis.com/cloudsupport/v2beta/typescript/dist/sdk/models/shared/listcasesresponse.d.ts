import { SpeakeasyBase } from "../../../internal/utils";
import { Case } from "./case";
/**
 * The response message for the ListCases endpoint.
**/
export declare class ListCasesResponse extends SpeakeasyBase {
    cases?: Case[];
    nextPageToken?: string;
}
