import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1Anomaly } from "./googleplaydeveloperreportingv1alpha1anomaly";
/**
 * Response with a list of anomalies in datasets.
**/
export declare class GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse extends SpeakeasyBase {
    anomalies?: GooglePlayDeveloperReportingV1alpha1Anomaly[];
    nextPageToken?: string;
}
