import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NegativeKeywordList
/** 
 * A list of negative keywords used for targeting.
**/
export class NegativeKeywordList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=negativeKeywordListId" })
  negativeKeywordListId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetedLineItemCount" })
  targetedLineItemCount?: string;
}


// NegativeKeywordListInput
/** 
 * A list of negative keywords used for targeting.
**/
export class NegativeKeywordListInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
