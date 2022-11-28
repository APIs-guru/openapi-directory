import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.
**/
export declare class SizeSuggestionState extends SpeakeasyBase {
    heightSuggested?: boolean;
    widthSuggested?: boolean;
}
