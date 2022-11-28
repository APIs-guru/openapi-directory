import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquerycomponent";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmode";



// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery
/** 
 * The MashQuery for searching data, set both queries for Join Operation.
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstQuery" })
  firstQuery?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent;

  @SpeakeasyMetadata({ data: "json, name=operationMode" })
  operationMode?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode;

  @SpeakeasyMetadata({ data: "json, name=secondQuery" })
  secondQuery?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent;
}
