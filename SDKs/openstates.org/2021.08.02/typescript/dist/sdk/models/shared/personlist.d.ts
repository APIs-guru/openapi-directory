import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationMeta } from "./paginationmeta";
import { Person } from "./person";
export declare class PersonList extends SpeakeasyBase {
    pagination: PaginationMeta;
    results: Person[];
}
