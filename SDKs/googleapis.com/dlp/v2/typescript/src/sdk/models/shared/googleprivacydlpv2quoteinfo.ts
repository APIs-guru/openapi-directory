import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2DateTime } from "./googleprivacydlpv2datetime";


// GooglePrivacyDlpV2QuoteInfo
/** 
 * Message for infoType-dependent details parsed from quote.
**/
export class GooglePrivacyDlpV2QuoteInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateTime" })
  dateTime?: GooglePrivacyDlpV2DateTime;
}
