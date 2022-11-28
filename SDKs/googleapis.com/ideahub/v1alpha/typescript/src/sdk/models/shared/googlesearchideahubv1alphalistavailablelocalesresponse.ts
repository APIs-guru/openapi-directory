import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1alphaAvailableLocale } from "./googlesearchideahubv1alphaavailablelocale";



// GoogleSearchIdeahubV1alphaListAvailableLocalesResponse
/** 
 * Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
**/
export class GoogleSearchIdeahubV1alphaListAvailableLocalesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableLocales", elemType: GoogleSearchIdeahubV1alphaAvailableLocale })
  availableLocales?: GoogleSearchIdeahubV1alphaAvailableLocale[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
