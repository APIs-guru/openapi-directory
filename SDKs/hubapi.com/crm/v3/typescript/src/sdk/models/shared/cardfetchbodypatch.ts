import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CardObjectTypeBody } from "./cardobjecttypebody";


// CardFetchBodyPatch
/** 
 * Variant of CardFetchBody with fields as optional for patches
**/
export class CardFetchBodyPatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectTypes", elemType: shared.CardObjectTypeBody })
  objectTypes: CardObjectTypeBody[];

  @Metadata({ data: "json, name=targetUrl" })
  targetUrl?: string;
}
