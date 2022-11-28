import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaOverride } from "./quotaoverride";
/**
 * Response message for ListAdminOverrides.
**/
export declare class ListAdminOverridesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    overrides?: QuotaOverride[];
}
