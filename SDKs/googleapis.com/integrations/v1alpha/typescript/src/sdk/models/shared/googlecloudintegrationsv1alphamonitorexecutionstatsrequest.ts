import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquery";

export enum GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED"
,    TableConfig = "TABLE_CONFIG"
,    AploseSeriesListConfig = "APLOSE_SERIES_LIST_CONFIG"
}


// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest
/** 
 * The request to get data for monarch connector config.
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=mashQuery" })
  mashQuery?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery;

  @Metadata({ data: "json, name=metricFieldTable" })
  metricFieldTable?: boolean;

  @Metadata({ data: "json, name=outputPeriod" })
  outputPeriod?: string;

  @Metadata({ data: "json, name=responseTemplate" })
  responseTemplate?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum;
}
