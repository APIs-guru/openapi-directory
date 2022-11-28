import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiKey
/** 
 * An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
**/
export class ApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizedEntities" })
  authorizedEntities: string[];

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientName" })
  clientName: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=dailyQuota" })
  dailyQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=monthlyQuota" })
  monthlyQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=throttlingQuota" })
  throttlingQuota?: number;
}
