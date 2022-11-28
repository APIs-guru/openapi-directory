import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CardAction } from "./cardaction";
import { CardHeader } from "./cardheader";
import { Section } from "./section";



// Card
/** 
 * A card is a UI element that can contain UI widgets such as texts, images.
**/
export class Card extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardActions", elemType: CardAction })
  cardActions?: CardAction[];

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: CardHeader;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sections", elemType: Section })
  sections?: Section[];
}
