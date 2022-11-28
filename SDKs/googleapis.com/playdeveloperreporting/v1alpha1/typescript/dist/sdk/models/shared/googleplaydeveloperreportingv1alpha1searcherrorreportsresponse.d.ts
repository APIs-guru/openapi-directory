import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1ErrorReport } from "./googleplaydeveloperreportingv1alpha1errorreport";
/**
 * Response with a paginated list of error reports matching the search query.
**/
export declare class GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse extends SpeakeasyBase {
    errorReports?: GooglePlayDeveloperReportingV1alpha1ErrorReport[];
    nextPageToken?: string;
}
