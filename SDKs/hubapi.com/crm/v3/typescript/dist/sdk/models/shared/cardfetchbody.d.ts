import { SpeakeasyBase } from "../../../internal/utils";
import { CardObjectTypeBody } from "./cardobjecttypebody";
/**
 * Configuration for this card's data fetch request.
**/
export declare class CardFetchBody extends SpeakeasyBase {
    objectTypes: CardObjectTypeBody[];
    targetUrl: string;
}
