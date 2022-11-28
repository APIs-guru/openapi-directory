import { SpeakeasyBase } from "../../../internal/utils";
import { CardAction } from "./cardaction";
import { CardHeader } from "./cardheader";
import { Section } from "./section";
/**
 * A card is a UI element that can contain UI widgets such as texts, images.
**/
export declare class Card extends SpeakeasyBase {
    cardActions?: CardAction[];
    header?: CardHeader;
    name?: string;
    sections?: Section[];
}
