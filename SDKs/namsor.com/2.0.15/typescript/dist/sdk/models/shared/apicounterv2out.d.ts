import { SpeakeasyBase } from "../../../internal/utils";
import { ApiKeyOut } from "./apikeyout";
/**
 * Detailed usage as reported by the deduplicating API counter.
**/
export declare class ApiCounterV2Out extends SpeakeasyBase {
    apiKey?: ApiKeyOut;
    apiService?: string;
    createdDateTime?: number;
    lastFlushedDateTime?: number;
    lastUsedDateTime?: number;
    serviceFeaturesUsage?: Map<string, number>;
    totalUsage?: number;
}
