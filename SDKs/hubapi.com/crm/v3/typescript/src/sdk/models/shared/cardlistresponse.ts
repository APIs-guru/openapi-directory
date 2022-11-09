import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CardResponse } from "./cardresponse";


// CardListResponse
/** 
 * List of card definitions
**/
export class CardListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.CardResponse })
  results: CardResponse[];
}
