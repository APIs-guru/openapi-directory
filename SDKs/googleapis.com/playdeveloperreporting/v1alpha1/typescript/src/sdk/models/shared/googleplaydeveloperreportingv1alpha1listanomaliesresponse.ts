import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1Anomaly } from "./googleplaydeveloperreportingv1alpha1anomaly";



// GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse
/** 
 * Response with a list of anomalies in datasets.
**/
export class GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=anomalies", elemType: GooglePlayDeveloperReportingV1alpha1Anomaly })
  anomalies?: GooglePlayDeveloperReportingV1alpha1Anomaly[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
