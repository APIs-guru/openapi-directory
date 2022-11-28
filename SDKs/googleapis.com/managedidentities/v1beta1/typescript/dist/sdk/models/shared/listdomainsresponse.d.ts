import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
/**
 * Response message for ListDomains
**/
export declare class ListDomainsResponse extends SpeakeasyBase {
    domains?: Domain[];
    nextPageToken?: string;
    unreachable?: string[];
}
