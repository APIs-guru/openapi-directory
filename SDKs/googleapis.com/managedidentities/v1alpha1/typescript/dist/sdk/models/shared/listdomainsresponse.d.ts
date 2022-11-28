import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
export declare class ListDomainsResponse extends SpeakeasyBase {
    domains?: Domain[];
    nextPageToken?: string;
    unreachable?: string[];
}
