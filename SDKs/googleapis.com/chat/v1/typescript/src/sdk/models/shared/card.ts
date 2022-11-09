import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CardAction } from "./cardaction";
import { CardHeader } from "./cardheader";
import { Section } from "./section";


// Card
/** 
 * A card is a UI element that can contain UI widgets such as texts, images.
**/
export class Card extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardActions", elemType: shared.CardAction })
  cardActions?: CardAction[];

  @Metadata({ data: "json, name=header" })
  header?: CardHeader;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sections", elemType: shared.Section })
  sections?: Section[];
}
