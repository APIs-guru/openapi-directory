import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy
/** 
 * MashQuery GroupBy parameters.
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string[];

  @Metadata({ data: "json, name=reducer" })
  reducer?: string;
}
