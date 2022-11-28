import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2Regex
/** 
 * Message defining a custom regular expression.
**/
export class GooglePrivacyDlpV2Regex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupIndexes" })
  groupIndexes?: number[];

  @SpeakeasyMetadata({ data: "json, name=pattern" })
  pattern?: string;
}
