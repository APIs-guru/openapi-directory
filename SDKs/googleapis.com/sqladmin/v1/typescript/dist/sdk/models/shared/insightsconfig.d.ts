import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
**/
export declare class InsightsConfig extends SpeakeasyBase {
    queryInsightsEnabled?: boolean;
    queryPlansPerMinute?: number;
    queryStringLength?: number;
    recordApplicationTags?: boolean;
    recordClientAddress?: boolean;
}
