import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1Anomaly } from "./googleplaydeveloperreportingv1beta1anomaly";



// GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse
/** 
 * Response with a list of anomalies in datasets.
**/
export class GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anomalies", elemType: GooglePlayDeveloperReportingV1beta1Anomaly })
  anomalies?: GooglePlayDeveloperReportingV1beta1Anomaly[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
