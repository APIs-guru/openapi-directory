import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Keeps the number of calls without x-fapi-customer-ip-address header present
**/
export declare class SandboxRetryCacheEntry extends SpeakeasyBase {
    cacheKey?: string;
    count?: number;
    expirationTimestamp?: Date;
}
