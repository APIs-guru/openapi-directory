import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CardObjectTypeBody } from "./cardobjecttypebody";



// CardFetchBody
/** 
 * Configuration for this card's data fetch request.
**/
export class CardFetchBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectTypes", elemType: CardObjectTypeBody })
  objectTypes: CardObjectTypeBody[];

  @SpeakeasyMetadata({ data: "json, name=targetUrl" })
  targetUrl: string;
}
