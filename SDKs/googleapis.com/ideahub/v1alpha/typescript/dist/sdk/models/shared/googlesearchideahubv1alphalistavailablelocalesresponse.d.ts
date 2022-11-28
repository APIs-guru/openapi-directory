import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1alphaAvailableLocale } from "./googlesearchideahubv1alphaavailablelocale";
/**
 * Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
**/
export declare class GoogleSearchIdeahubV1alphaListAvailableLocalesResponse extends SpeakeasyBase {
    availableLocales?: GoogleSearchIdeahubV1alphaAvailableLocale[];
    nextPageToken?: string;
}
