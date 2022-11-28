import { SpeakeasyBase } from "../../../internal/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBody } from "./cardfetchbody";
/**
 * Current state of Card Definition
**/
export declare class CardResponse extends SpeakeasyBase {
    actions: CardActions;
    createdAt?: Date;
    display: CardDisplayBody;
    fetch: CardFetchBody;
    id: string;
    title: string;
    updatedAt?: Date;
}
