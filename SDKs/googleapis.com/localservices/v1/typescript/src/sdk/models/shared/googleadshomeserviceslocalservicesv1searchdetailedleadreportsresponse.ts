import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport } from "./googleadshomeserviceslocalservicesv1detailedleadreport";


// GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse
/** 
 * A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
export class GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detailedLeadReports", elemType: shared.GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport })
  detailedLeadReports?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
