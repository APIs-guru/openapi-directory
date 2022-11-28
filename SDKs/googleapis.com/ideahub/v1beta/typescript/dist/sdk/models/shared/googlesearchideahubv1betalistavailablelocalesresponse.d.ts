import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1betaAvailableLocale } from "./googlesearchideahubv1betaavailablelocale";
/**
 * Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
**/
export declare class GoogleSearchIdeahubV1betaListAvailableLocalesResponse extends SpeakeasyBase {
    availableLocales?: GoogleSearchIdeahubV1betaAvailableLocale[];
    nextPageToken?: string;
}
