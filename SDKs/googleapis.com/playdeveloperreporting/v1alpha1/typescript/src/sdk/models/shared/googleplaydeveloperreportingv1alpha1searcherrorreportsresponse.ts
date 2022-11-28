import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1ErrorReport } from "./googleplaydeveloperreportingv1alpha1errorreport";



// GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse
/** 
 * Response with a paginated list of error reports matching the search query.
**/
export class GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorReports", elemType: GooglePlayDeveloperReportingV1alpha1ErrorReport })
  errorReports?: GooglePlayDeveloperReportingV1alpha1ErrorReport[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
