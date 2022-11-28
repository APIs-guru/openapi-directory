import { SpeakeasyBase } from "../../../internal/utils";
import { ForwardPaging } from "./forwardpaging";
import { Domain } from "./domain";
export declare class CollectionResponseWithTotalDomainForwardPaging extends SpeakeasyBase {
    paging?: ForwardPaging;
    results: Domain[];
    total: number;
}
