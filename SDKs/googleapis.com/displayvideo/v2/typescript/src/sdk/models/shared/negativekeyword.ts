import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NegativeKeyword
/** 
 * A negatively targeted keyword that belongs to a negative keyword list.
**/
export class NegativeKeyword extends SpeakeasyBase {
  @Metadata({ data: "json, name=keywordValue" })
  keywordValue?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
