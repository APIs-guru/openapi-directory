import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAdsHomeservicesLocalservicesV1AccountReport } from "./googleadshomeserviceslocalservicesv1accountreport";


// GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse
/** 
 * A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
export class GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountReports", elemType: shared.GoogleAdsHomeservicesLocalservicesV1AccountReport })
  accountReports?: GoogleAdsHomeservicesLocalservicesV1AccountReport[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
