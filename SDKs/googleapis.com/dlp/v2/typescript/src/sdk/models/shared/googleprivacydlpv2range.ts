import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2Range
/** 
 * Generic half-open interval [start, end)
**/
export class GooglePrivacyDlpV2Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;
}
