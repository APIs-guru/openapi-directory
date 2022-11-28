import { SpeakeasyBase } from "../../../internal/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBody } from "./cardfetchbody";
/**
 * State of card definition to be created
**/
export declare class CardCreateRequest extends SpeakeasyBase {
    actions: CardActions;
    display: CardDisplayBody;
    fetch: CardFetchBody;
    title: string;
}
