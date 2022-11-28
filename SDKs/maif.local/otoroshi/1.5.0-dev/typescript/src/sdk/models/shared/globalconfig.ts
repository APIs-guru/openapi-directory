import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
import { Auth0Config } from "./auth0config";
import { CleverSettings } from "./cleversettings";
import { ElasticConfig } from "./elasticconfig";
import { IpFiltering } from "./ipfiltering";
import { MailerSettings } from "./mailersettings";



// GlobalConfig
/** 
 * The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
**/
export class GlobalConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertsEmails" })
  alertsEmails: string[];

  @SpeakeasyMetadata({ data: "json, name=alertsWebhooks", elemType: Webhook })
  alertsWebhooks: Webhook[];

  @SpeakeasyMetadata({ data: "json, name=analyticsWebhooks", elemType: Webhook })
  analyticsWebhooks: Webhook[];

  @SpeakeasyMetadata({ data: "json, name=apiReadOnly" })
  apiReadOnly: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoLinkToDefaultGroup" })
  autoLinkToDefaultGroup: boolean;

  @SpeakeasyMetadata({ data: "json, name=backofficeAuth0Config" })
  backofficeAuth0Config?: Auth0Config;

  @SpeakeasyMetadata({ data: "json, name=cleverSettings" })
  cleverSettings?: CleverSettings;

  @SpeakeasyMetadata({ data: "json, name=elasticReadsConfig" })
  elasticReadsConfig?: ElasticConfig;

  @SpeakeasyMetadata({ data: "json, name=elasticWritesConfigs", elemType: ElasticConfig })
  elasticWritesConfigs?: ElasticConfig[];

  @SpeakeasyMetadata({ data: "json, name=endlessIpAddresses" })
  endlessIpAddresses: string[];

  @SpeakeasyMetadata({ data: "json, name=ipFiltering" })
  ipFiltering: IpFiltering;

  @SpeakeasyMetadata({ data: "json, name=limitConcurrentRequests" })
  limitConcurrentRequests: boolean;

  @SpeakeasyMetadata({ data: "json, name=lines" })
  lines?: string[];

  @SpeakeasyMetadata({ data: "json, name=mailerSettings" })
  mailerSettings?: MailerSettings;

  @SpeakeasyMetadata({ data: "json, name=maxConcurrentRequests" })
  maxConcurrentRequests: number;

  @SpeakeasyMetadata({ data: "json, name=maxHttp10ResponseSize" })
  maxHttp10ResponseSize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxLogsSize" })
  maxLogsSize?: number;

  @SpeakeasyMetadata({ data: "json, name=middleFingers" })
  middleFingers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=perIpThrottlingQuota" })
  perIpThrottlingQuota: number;

  @SpeakeasyMetadata({ data: "json, name=privateAppsAuth0Config" })
  privateAppsAuth0Config?: Auth0Config;

  @SpeakeasyMetadata({ data: "json, name=streamEntityOnly" })
  streamEntityOnly: boolean;

  @SpeakeasyMetadata({ data: "json, name=throttlingQuota" })
  throttlingQuota: number;

  @SpeakeasyMetadata({ data: "json, name=u2fLoginOnly" })
  u2fLoginOnly: boolean;

  @SpeakeasyMetadata({ data: "json, name=useCircuitBreakers" })
  useCircuitBreakers: boolean;
}
