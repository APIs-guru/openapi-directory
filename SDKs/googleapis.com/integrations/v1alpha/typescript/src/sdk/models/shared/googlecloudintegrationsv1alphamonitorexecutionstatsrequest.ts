import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestmashquery";


export enum GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum {
    DataFormatUnspecified = "DATA_FORMAT_UNSPECIFIED",
    TableConfig = "TABLE_CONFIG",
    AploseSeriesListConfig = "APLOSE_SERIES_LIST_CONFIG"
}


// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest
/** 
 * The request to get data for monarch connector config.
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=mashQuery" })
  mashQuery?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery;

  @SpeakeasyMetadata({ data: "json, name=metricFieldTable" })
  metricFieldTable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outputPeriod" })
  outputPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=responseTemplate" })
  responseTemplate?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum;
}
