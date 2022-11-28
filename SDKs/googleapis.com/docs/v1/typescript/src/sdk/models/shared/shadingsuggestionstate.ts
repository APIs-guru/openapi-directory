import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShadingSuggestionState
/** 
 * A mask that indicates which of the fields on the base Shading have been changed in this suggested change. For any field set to true, there's a new suggested value.
**/
export class ShadingSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColorSuggested" })
  backgroundColorSuggested?: boolean;
}
