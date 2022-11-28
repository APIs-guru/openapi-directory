import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContextAttribute
/** 
 * A named attribute associated with an item which can be used for influencing the ranking of the item based on the context in the request.
**/
export class ContextAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
