import { SpeakeasyBase } from "../../../internal/utils";
import { MethodQuota } from "./methodquota";
/**
 * Response message for the ListMethodQuotas method.
**/
export declare class ListMethodQuotasResponse extends SpeakeasyBase {
    methodQuotas?: MethodQuota[];
    nextPageToken?: string;
}
