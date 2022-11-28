import { SpeakeasyBase } from "../../../internal/utils";
import { CardObjectTypeBody } from "./cardobjecttypebody";
/**
 * Variant of CardFetchBody with fields as optional for patches
**/
export declare class CardFetchBodyPatch extends SpeakeasyBase {
    objectTypes: CardObjectTypeBody[];
    targetUrl?: string;
}
