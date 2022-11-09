import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Paging } from "./paging";
import { Domain } from "./domain";
export declare class CollectionResponseWithTotalDomain extends SpeakeasyBase {
    paging?: Paging;
    results: Domain[];
    total: number;
}
