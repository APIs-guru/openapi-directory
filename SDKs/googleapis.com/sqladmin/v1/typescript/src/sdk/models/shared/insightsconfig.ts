import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InsightsConfig
/** 
 * Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
**/
export class InsightsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryInsightsEnabled" })
  queryInsightsEnabled?: boolean;

  @Metadata({ data: "json, name=queryPlansPerMinute" })
  queryPlansPerMinute?: number;

  @Metadata({ data: "json, name=queryStringLength" })
  queryStringLength?: number;

  @Metadata({ data: "json, name=recordApplicationTags" })
  recordApplicationTags?: boolean;

  @Metadata({ data: "json, name=recordClientAddress" })
  recordClientAddress?: boolean;
}
