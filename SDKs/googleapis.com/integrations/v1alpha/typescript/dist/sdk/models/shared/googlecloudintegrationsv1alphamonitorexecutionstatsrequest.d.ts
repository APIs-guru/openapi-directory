import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquery";
export declare enum GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    TableConfig = "TABLE_CONFIG",
    AploseSeriesListConfig = "APLOSE_SERIES_LIST_CONFIG"
}
/**
 * The request to get data for monarch connector config.
**/
export declare class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest extends SpeakeasyBase {
    duration?: string;
    endTime?: string;
    mashQuery?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery;
    metricFieldTable?: boolean;
    outputPeriod?: string;
    responseTemplate?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum;
}
