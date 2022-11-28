import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CardDisplayProperty } from "./carddisplayproperty";



// CardDisplayBody
/** 
 * Configuration for displayed info on a card
**/
export class CardDisplayBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties", elemType: CardDisplayProperty })
  properties: CardDisplayProperty[];
}
