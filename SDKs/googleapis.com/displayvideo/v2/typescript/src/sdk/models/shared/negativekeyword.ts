import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NegativeKeyword
/** 
 * A negatively targeted keyword that belongs to a negative keyword list.
**/
export class NegativeKeyword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keywordValue" })
  keywordValue?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// NegativeKeywordInput
/** 
 * A negatively targeted keyword that belongs to a negative keyword list.
**/
export class NegativeKeywordInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keywordValue" })
  keywordValue?: string;
}
