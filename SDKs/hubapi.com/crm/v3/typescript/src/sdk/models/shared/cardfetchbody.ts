import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CardObjectTypeBody } from "./cardobjecttypebody";


// CardFetchBody
/** 
 * Configuration for this card's data fetch request.
**/
export class CardFetchBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectTypes", elemType: shared.CardObjectTypeBody })
  objectTypes: CardObjectTypeBody[];

  @Metadata({ data: "json, name=targetUrl" })
  targetUrl: string;
}
