import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport } from "./googleadshomeserviceslocalservicesv1detailedleadreport";



// GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse
/** 
 * A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
export class GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailedLeadReports", elemType: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport })
  detailedLeadReports?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
