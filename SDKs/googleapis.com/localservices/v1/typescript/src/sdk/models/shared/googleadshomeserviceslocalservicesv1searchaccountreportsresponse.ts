import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsHomeservicesLocalservicesV1AccountReport } from "./googleadshomeserviceslocalservicesv1accountreport";



// GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse
/** 
 * A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
export class GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountReports", elemType: GoogleAdsHomeservicesLocalservicesV1AccountReport })
  accountReports?: GoogleAdsHomeservicesLocalservicesV1AccountReport[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
