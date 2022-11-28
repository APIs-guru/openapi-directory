import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MatchingCriteria
/** 
 * Matches events based on exact matches on the CloudEvents attributes.
**/
export class MatchingCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
