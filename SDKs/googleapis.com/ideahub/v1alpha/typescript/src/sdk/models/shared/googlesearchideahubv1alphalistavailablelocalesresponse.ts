import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleSearchIdeahubV1alphaAvailableLocale } from "./googlesearchideahubv1alphaavailablelocale";


// GoogleSearchIdeahubV1alphaListAvailableLocalesResponse
/** 
 * Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
**/
export class GoogleSearchIdeahubV1alphaListAvailableLocalesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableLocales", elemType: shared.GoogleSearchIdeahubV1alphaAvailableLocale })
  availableLocales?: GoogleSearchIdeahubV1alphaAvailableLocale[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
