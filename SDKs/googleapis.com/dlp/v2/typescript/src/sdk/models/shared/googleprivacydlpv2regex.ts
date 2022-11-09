import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2Regex
/** 
 * Message defining a custom regular expression.
**/
export class GooglePrivacyDlpV2Regex extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupIndexes" })
  groupIndexes?: number[];

  @Metadata({ data: "json, name=pattern" })
  pattern?: string;
}
