import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationMeta } from "./paginationmeta";
import { Committee } from "./committee";
export declare class CommitteeList extends SpeakeasyBase {
    pagination: PaginationMeta;
    results: Committee[];
}
