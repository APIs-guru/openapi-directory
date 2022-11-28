import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubstringMatchCriteria
/** 
 * A criteria that matches a specific string of text in a shape or table.
**/
export class SubstringMatchCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchCase" })
  matchCase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
