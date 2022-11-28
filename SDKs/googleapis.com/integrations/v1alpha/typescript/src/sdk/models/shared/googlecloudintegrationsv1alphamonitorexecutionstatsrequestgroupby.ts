import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy
/** 
 * MashQuery GroupBy parameters.
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "json, name=reducer" })
  reducer?: string;
}
