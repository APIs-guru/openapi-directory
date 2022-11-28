import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationMeta } from "./paginationmeta";
import { Jurisdiction } from "./jurisdiction";
export declare class JurisdictionList extends SpeakeasyBase {
    pagination: PaginationMeta;
    results: Jurisdiction[];
}
