import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport } from "./googleadshomeserviceslocalservicesv1detailedleadreport";
/**
 * A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
export declare class GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse extends SpeakeasyBase {
    detailedLeadReports?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport[];
    nextPageToken?: string;
}
