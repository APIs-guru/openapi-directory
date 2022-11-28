import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
**/
export declare class ApiKey extends SpeakeasyBase {
    authorizedEntities: string[];
    clientId: string;
    clientName: string;
    clientSecret: string;
    dailyQuota?: number;
    enabled: boolean;
    metadata?: Map<string, string>;
    monthlyQuota?: number;
    throttlingQuota?: number;
}
