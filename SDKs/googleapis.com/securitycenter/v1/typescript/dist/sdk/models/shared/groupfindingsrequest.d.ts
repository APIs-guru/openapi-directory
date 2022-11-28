import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for grouping by findings.
**/
export declare class GroupFindingsRequest extends SpeakeasyBase {
    compareDuration?: string;
    filter?: string;
    groupBy?: string;
    pageSize?: number;
    pageToken?: string;
    readTime?: string;
}
