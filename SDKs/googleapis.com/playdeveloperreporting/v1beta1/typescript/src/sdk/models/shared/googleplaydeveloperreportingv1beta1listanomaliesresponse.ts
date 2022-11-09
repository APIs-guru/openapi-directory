import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePlayDeveloperReportingV1beta1Anomaly } from "./googleplaydeveloperreportingv1beta1anomaly";


// GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse
/** 
 * Response with a list of anomalies in datasets.
**/
export class GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=anomalies", elemType: shared.GooglePlayDeveloperReportingV1beta1Anomaly })
  anomalies?: GooglePlayDeveloperReportingV1beta1Anomaly[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
