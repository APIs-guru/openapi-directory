import { SpeakeasyBase } from "../../../internal/utils";
import { StructuredQuery } from "./structuredquery";
/**
 * The request for Firestore.PartitionQuery.
**/
export declare class PartitionQueryRequest extends SpeakeasyBase {
    pageSize?: number;
    pageToken?: string;
    partitionCount?: string;
    readTime?: string;
    structuredQuery?: StructuredQuery;
}
