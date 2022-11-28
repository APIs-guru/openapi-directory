import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeUnionConfig } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmodeunionconfig";
export declare enum GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum {
    OperationTypeUnspecified = "OPERATION_TYPE_UNSPECIFIED",
    Union = "UNION",
    Join = "JOIN"
}
/**
 * Operation between 2 query
**/
export declare class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode extends SpeakeasyBase {
    joinConfig?: Map<string, any>;
    operationType?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum;
    unionConfig?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeUnionConfig;
}
