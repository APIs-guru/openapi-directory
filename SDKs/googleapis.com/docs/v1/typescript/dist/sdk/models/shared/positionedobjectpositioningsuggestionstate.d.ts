import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class PositionedObjectPositioningSuggestionState extends SpeakeasyBase {
    layoutSuggested?: boolean;
    leftOffsetSuggested?: boolean;
    topOffsetSuggested?: boolean;
}
