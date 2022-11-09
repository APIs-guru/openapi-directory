import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NegativeKeywordList
/** 
 * A list of negative keywords used for targeting.
**/
export class NegativeKeywordList extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=negativeKeywordListId" })
  negativeKeywordListId?: string;

  @Metadata({ data: "json, name=targetedLineItemCount" })
  targetedLineItemCount?: string;
}
