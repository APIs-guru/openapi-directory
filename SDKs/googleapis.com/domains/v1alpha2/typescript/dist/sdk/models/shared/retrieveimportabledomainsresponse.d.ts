import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
/**
 * Response for the `RetrieveImportableDomains` method.
**/
export declare class RetrieveImportableDomainsResponse extends SpeakeasyBase {
    domains?: Domain[];
    nextPageToken?: string;
}
