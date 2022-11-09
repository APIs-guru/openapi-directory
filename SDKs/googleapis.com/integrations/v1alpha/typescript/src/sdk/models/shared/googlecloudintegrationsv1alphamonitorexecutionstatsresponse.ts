import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmCardsTemplatesAplosSeriesListData } from "./enterprisecrmcardstemplatesaplosserieslistdata";
import { EnterpriseCrmCardsTabularData } from "./enterprisecrmcardstabulardata";


// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse
/** 
 * The response for getting Execution stats.
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=aplosSeriesListData" })
  aplosSeriesListData?: EnterpriseCrmCardsTemplatesAplosSeriesListData;

  @Metadata({ data: "json, name=tableData" })
  tableData?: EnterpriseCrmCardsTabularData;
}
