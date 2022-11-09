import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePlayDeveloperReportingV1alpha1ErrorReport } from "./googleplaydeveloperreportingv1alpha1errorreport";


// GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse
/** 
 * Response with a paginated list of error reports matching the search query.
**/
export class GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorReports", elemType: shared.GooglePlayDeveloperReportingV1alpha1ErrorReport })
  errorReports?: GooglePlayDeveloperReportingV1alpha1ErrorReport[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
