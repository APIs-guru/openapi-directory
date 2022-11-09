import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MatchingCriteria
/** 
 * Matches events based on exact matches on the CloudEvents attributes.
**/
export class MatchingCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
