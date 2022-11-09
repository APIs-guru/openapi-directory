import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Webhook } from "./webhook";
import { Webhook } from "./webhook";
import { Auth0Config } from "./auth0config";
import { CleverSettings } from "./cleversettings";
import { ElasticConfig } from "./elasticconfig";
import { ElasticConfig } from "./elasticconfig";
import { IpFiltering } from "./ipfiltering";
import { MailerSettings } from "./mailersettings";
import { Auth0Config } from "./auth0config";


// GlobalConfig
/** 
 * The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
**/
export class GlobalConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertsEmails" })
  alertsEmails: string[];

  @Metadata({ data: "json, name=alertsWebhooks", elemType: shared.Webhook })
  alertsWebhooks: Webhook[];

  @Metadata({ data: "json, name=analyticsWebhooks", elemType: shared.Webhook })
  analyticsWebhooks: Webhook[];

  @Metadata({ data: "json, name=apiReadOnly" })
  apiReadOnly: boolean;

  @Metadata({ data: "json, name=autoLinkToDefaultGroup" })
  autoLinkToDefaultGroup: boolean;

  @Metadata({ data: "json, name=backofficeAuth0Config" })
  backofficeAuth0Config?: Auth0Config;

  @Metadata({ data: "json, name=cleverSettings" })
  cleverSettings?: CleverSettings;

  @Metadata({ data: "json, name=elasticReadsConfig" })
  elasticReadsConfig?: ElasticConfig;

  @Metadata({ data: "json, name=elasticWritesConfigs", elemType: shared.ElasticConfig })
  elasticWritesConfigs?: ElasticConfig[];

  @Metadata({ data: "json, name=endlessIpAddresses" })
  endlessIpAddresses: string[];

  @Metadata({ data: "json, name=ipFiltering" })
  ipFiltering: IpFiltering;

  @Metadata({ data: "json, name=limitConcurrentRequests" })
  limitConcurrentRequests: boolean;

  @Metadata({ data: "json, name=lines" })
  lines?: string[];

  @Metadata({ data: "json, name=mailerSettings" })
  mailerSettings?: MailerSettings;

  @Metadata({ data: "json, name=maxConcurrentRequests" })
  maxConcurrentRequests: number;

  @Metadata({ data: "json, name=maxHttp10ResponseSize" })
  maxHttp10ResponseSize?: number;

  @Metadata({ data: "json, name=maxLogsSize" })
  maxLogsSize?: number;

  @Metadata({ data: "json, name=middleFingers" })
  middleFingers?: boolean;

  @Metadata({ data: "json, name=perIpThrottlingQuota" })
  perIpThrottlingQuota: number;

  @Metadata({ data: "json, name=privateAppsAuth0Config" })
  privateAppsAuth0Config?: Auth0Config;

  @Metadata({ data: "json, name=streamEntityOnly" })
  streamEntityOnly: boolean;

  @Metadata({ data: "json, name=throttlingQuota" })
  throttlingQuota: number;

  @Metadata({ data: "json, name=u2fLoginOnly" })
  u2fLoginOnly: boolean;

  @Metadata({ data: "json, name=useCircuitBreakers" })
  useCircuitBreakers: boolean;
}
