import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContextAttribute
/** 
 * A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request.
**/
export class ContextAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
