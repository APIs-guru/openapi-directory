import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquerycomponent";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmode";
/**
 * The MashQuery for searching data, set both queries for Join Operation.
**/
export declare class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery extends SpeakeasyBase {
    firstQuery?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent;
    operationMode?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode;
    secondQuery?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent;
}
