import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaOverride } from "./quotaoverride";
/**
 * A quota bucket is a quota provisioning unit for a specific set of dimensions.
**/
export declare class QuotaBucket extends SpeakeasyBase {
    adminOverride?: QuotaOverride;
    consumerOverride?: QuotaOverride;
    defaultLimit?: string;
    dimensions?: Map<string, string>;
    effectiveLimit?: string;
    producerOverride?: QuotaOverride;
}
