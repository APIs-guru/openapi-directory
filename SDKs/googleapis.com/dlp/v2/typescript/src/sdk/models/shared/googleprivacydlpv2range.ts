import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2Range
/** 
 * Generic half-open interval [start, end)
**/
export class GooglePrivacyDlpV2Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}
