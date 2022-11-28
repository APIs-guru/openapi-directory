import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CardResponse } from "./cardresponse";



// CardListResponse
/** 
 * List of card definitions
**/
export class CardListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: CardResponse })
  results: CardResponse[];
}
