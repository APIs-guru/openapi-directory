import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAdsHomeservicesLocalservicesV1AccountReport } from "./googleadshomeserviceslocalservicesv1accountreport";
/**
 * A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
export declare class GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse extends SpeakeasyBase {
    accountReports?: GoogleAdsHomeservicesLocalservicesV1AccountReport[];
    nextPageToken?: string;
}
