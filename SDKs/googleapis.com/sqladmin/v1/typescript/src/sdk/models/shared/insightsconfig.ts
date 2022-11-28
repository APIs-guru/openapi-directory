import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsightsConfig
/** 
 * Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
**/
export class InsightsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryInsightsEnabled" })
  queryInsightsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=queryPlansPerMinute" })
  queryPlansPerMinute?: number;

  @SpeakeasyMetadata({ data: "json, name=queryStringLength" })
  queryStringLength?: number;

  @SpeakeasyMetadata({ data: "json, name=recordApplicationTags" })
  recordApplicationTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recordClientAddress" })
  recordClientAddress?: boolean;
}
