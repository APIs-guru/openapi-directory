import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmCardsTemplatesAplosSeriesListData } from "./enterprisecrmcardstemplatesaplosserieslistdata";
import { EnterpriseCrmCardsTabularData } from "./enterprisecrmcardstabulardata";



// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse
/** 
 * The response for getting Execution stats.
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aplosSeriesListData" })
  aplosSeriesListData?: EnterpriseCrmCardsTemplatesAplosSeriesListData;

  @SpeakeasyMetadata({ data: "json, name=tableData" })
  tableData?: EnterpriseCrmCardsTabularData;
}
