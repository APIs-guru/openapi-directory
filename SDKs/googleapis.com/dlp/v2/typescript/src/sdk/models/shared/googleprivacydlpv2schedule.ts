import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2Schedule
/** 
 * Schedule for inspect job triggers.
**/
export class GooglePrivacyDlpV2Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recurrencePeriodDuration" })
  recurrencePeriodDuration?: string;
}
