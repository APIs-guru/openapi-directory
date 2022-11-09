import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CardDisplayProperty } from "./carddisplayproperty";


// CardDisplayBody
/** 
 * Configuration for displayed info on a card
**/
export class CardDisplayBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties", elemType: shared.CardDisplayProperty })
  properties: CardDisplayProperty[];
}
