import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SizeSuggestionState
/** 
 * A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.
**/
export class SizeSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=heightSuggested" })
  heightSuggested?: boolean;

  @Metadata({ data: "json, name=widthSuggested" })
  widthSuggested?: boolean;
}
