import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
/**
 * The response to listing Domains.
**/
export declare class ListDomainsResponse extends SpeakeasyBase {
    domains?: Domain[];
    nextPageToken?: string;
}
