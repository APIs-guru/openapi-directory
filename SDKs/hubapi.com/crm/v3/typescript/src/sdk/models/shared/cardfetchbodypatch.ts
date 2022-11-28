import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CardObjectTypeBody } from "./cardobjecttypebody";



// CardFetchBodyPatch
/** 
 * Variant of CardFetchBody with fields as optional for patches
**/
export class CardFetchBodyPatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectTypes", elemType: CardObjectTypeBody })
  objectTypes: CardObjectTypeBody[];

  @SpeakeasyMetadata({ data: "json, name=targetUrl" })
  targetUrl?: string;
}
