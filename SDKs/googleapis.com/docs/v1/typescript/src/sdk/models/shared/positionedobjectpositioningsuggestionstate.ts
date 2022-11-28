import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PositionedObjectPositioningSuggestionState
/** 
 * A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class PositionedObjectPositioningSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layoutSuggested" })
  layoutSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=leftOffsetSuggested" })
  leftOffsetSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=topOffsetSuggested" })
  topOffsetSuggested?: boolean;
}
