import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The quota information per method in the Content API.
**/
export declare class MethodQuota extends SpeakeasyBase {
    method?: string;
    quotaLimit?: string;
    quotaUsage?: string;
}
