import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";
/**
 * A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class BulletSuggestionState extends SpeakeasyBase {
    listIdSuggested?: boolean;
    nestingLevelSuggested?: boolean;
    textStyleSuggestionState?: TextStyleSuggestionState;
}
