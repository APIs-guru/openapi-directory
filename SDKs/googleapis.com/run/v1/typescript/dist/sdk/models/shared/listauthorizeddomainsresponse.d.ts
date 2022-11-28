import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedDomain } from "./authorizeddomain";
/**
 * A list of Authorized Domains.
**/
export declare class ListAuthorizedDomainsResponse extends SpeakeasyBase {
    domains?: AuthorizedDomain[];
    nextPageToken?: string;
}
