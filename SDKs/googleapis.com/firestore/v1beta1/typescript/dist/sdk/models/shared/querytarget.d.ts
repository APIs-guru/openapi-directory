import { SpeakeasyBase } from "../../../internal/utils";
import { StructuredQuery } from "./structuredquery";
/**
 * A target specified by a query.
**/
export declare class QueryTarget extends SpeakeasyBase {
    parent?: string;
    structuredQuery?: StructuredQuery;
}
