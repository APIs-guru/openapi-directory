import { SpeakeasyBase } from "../../../internal/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBodyPatch } from "./cardfetchbodypatch";
/**
 * Body for a patch with optional fields
**/
export declare class CardPatchRequest extends SpeakeasyBase {
    actions?: CardActions;
    display?: CardDisplayBody;
    fetch?: CardFetchBodyPatch;
    title?: string;
}
