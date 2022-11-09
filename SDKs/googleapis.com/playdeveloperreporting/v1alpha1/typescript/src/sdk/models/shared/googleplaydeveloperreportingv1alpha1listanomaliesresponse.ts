import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePlayDeveloperReportingV1alpha1Anomaly } from "./googleplaydeveloperreportingv1alpha1anomaly";


// GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse
/** 
 * Response with a list of anomalies in datasets.
**/
export class GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=anomalies", elemType: shared.GooglePlayDeveloperReportingV1alpha1Anomaly })
  anomalies?: GooglePlayDeveloperReportingV1alpha1Anomaly[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
