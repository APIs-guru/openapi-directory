import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquerycomponent";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmode";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquerycomponent";


// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery
/** 
 * The MashQuery for searching data, set both queries for Join Operation.
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstQuery" })
  firstQuery?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent;

  @Metadata({ data: "json, name=operationMode" })
  operationMode?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode;

  @Metadata({ data: "json, name=secondQuery" })
  secondQuery?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent;
}
