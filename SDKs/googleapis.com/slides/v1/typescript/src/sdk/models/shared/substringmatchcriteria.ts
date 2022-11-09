import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubstringMatchCriteria
/** 
 * A criteria that matches a specific string of text in a shape or table.
**/
export class SubstringMatchCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchCase" })
  matchCase?: boolean;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
