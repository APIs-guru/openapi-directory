import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1betaAvailableLocale } from "./googlesearchideahubv1betaavailablelocale";



// GoogleSearchIdeahubV1betaListAvailableLocalesResponse
/** 
 * Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
**/
export class GoogleSearchIdeahubV1betaListAvailableLocalesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableLocales", elemType: GoogleSearchIdeahubV1betaAvailableLocale })
  availableLocales?: GoogleSearchIdeahubV1betaAvailableLocale[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
