import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Request message for grouping by assets.
**/
export declare class GroupAssetsRequest extends SpeakeasyBase {
    compareDuration?: string;
    filter?: string;
    groupBy?: string;
    pageSize?: number;
    pageToken?: string;
    readTime?: string;
}
