import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
import { Auth0Config } from "./auth0config";
import { CleverSettings } from "./cleversettings";
import { ElasticConfig } from "./elasticconfig";
import { IpFiltering } from "./ipfiltering";
import { MailerSettings } from "./mailersettings";
/**
 * The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
**/
export declare class GlobalConfig extends SpeakeasyBase {
    alertsEmails: string[];
    alertsWebhooks: Webhook[];
    analyticsWebhooks: Webhook[];
    apiReadOnly: boolean;
    autoLinkToDefaultGroup: boolean;
    backofficeAuth0Config?: Auth0Config;
    cleverSettings?: CleverSettings;
    elasticReadsConfig?: ElasticConfig;
    elasticWritesConfigs?: ElasticConfig[];
    endlessIpAddresses: string[];
    ipFiltering: IpFiltering;
    limitConcurrentRequests: boolean;
    lines?: string[];
    mailerSettings?: MailerSettings;
    maxConcurrentRequests: number;
    maxHttp10ResponseSize?: number;
    maxLogsSize?: number;
    middleFingers?: boolean;
    perIpThrottlingQuota: number;
    privateAppsAuth0Config?: Auth0Config;
    streamEntityOnly: boolean;
    throttlingQuota: number;
    u2fLoginOnly: boolean;
    useCircuitBreakers: boolean;
}
