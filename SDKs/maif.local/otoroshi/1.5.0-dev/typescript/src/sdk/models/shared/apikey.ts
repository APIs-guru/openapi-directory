import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiKey
/** 
 * An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
**/
export class ApiKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizedEntities" })
  authorizedEntities: string[];

  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientName" })
  clientName: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @Metadata({ data: "json, name=dailyQuota" })
  dailyQuota?: number;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=monthlyQuota" })
  monthlyQuota?: number;

  @Metadata({ data: "json, name=throttlingQuota" })
  throttlingQuota?: number;
}
