import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PositionedObjectPositioningSuggestionState
/** 
 * A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class PositionedObjectPositioningSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=layoutSuggested" })
  layoutSuggested?: boolean;

  @Metadata({ data: "json, name=leftOffsetSuggested" })
  leftOffsetSuggested?: boolean;

  @Metadata({ data: "json, name=topOffsetSuggested" })
  topOffsetSuggested?: boolean;
}
