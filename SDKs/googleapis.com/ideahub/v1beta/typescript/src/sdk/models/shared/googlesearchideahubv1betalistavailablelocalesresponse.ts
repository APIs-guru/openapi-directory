import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSearchIdeahubV1betaAvailableLocale } from "./googlesearchideahubv1betaavailablelocale";


// GoogleSearchIdeahubV1betaListAvailableLocalesResponse
/** 
 * Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
**/
export class GoogleSearchIdeahubV1betaListAvailableLocalesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableLocales", elemType: shared.GoogleSearchIdeahubV1betaAvailableLocale })
  availableLocales?: GoogleSearchIdeahubV1betaAvailableLocale[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
