import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeUnionConfig } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashqueryoperationmodeunionconfig";


export enum GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum {
    OperationTypeUnspecified = "OPERATION_TYPE_UNSPECIFIED",
    Union = "UNION",
    Join = "JOIN"
}


// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode
/** 
 * Operation between 2 query
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=joinConfig" })
  joinConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=operationType" })
  operationType?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeOperationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unionConfig" })
  unionConfig?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationModeUnionConfig;
}
