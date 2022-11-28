import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaOverride } from "./quotaoverride";
/**
 * Response message for ListConsumerOverrides.
**/
export declare class ListConsumerOverridesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    overrides?: QuotaOverride[];
}
