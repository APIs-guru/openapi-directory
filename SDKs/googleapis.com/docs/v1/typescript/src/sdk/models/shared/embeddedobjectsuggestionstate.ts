import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectBorderSuggestionState } from "./embeddedobjectbordersuggestionstate";
import { ImagePropertiesSuggestionState } from "./imagepropertiessuggestionstate";
import { LinkedContentReferenceSuggestionState } from "./linkedcontentreferencesuggestionstate";
import { SizeSuggestionState } from "./sizesuggestionstate";



// EmbeddedObjectSuggestionState
/** 
 * A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class EmbeddedObjectSuggestionState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptionSuggested" })
  descriptionSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=embeddedDrawingPropertiesSuggestionState" })
  embeddedDrawingPropertiesSuggestionState?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=embeddedObjectBorderSuggestionState" })
  embeddedObjectBorderSuggestionState?: EmbeddedObjectBorderSuggestionState;

  @SpeakeasyMetadata({ data: "json, name=imagePropertiesSuggestionState" })
  imagePropertiesSuggestionState?: ImagePropertiesSuggestionState;

  @SpeakeasyMetadata({ data: "json, name=linkedContentReferenceSuggestionState" })
  linkedContentReferenceSuggestionState?: LinkedContentReferenceSuggestionState;

  @SpeakeasyMetadata({ data: "json, name=marginBottomSuggested" })
  marginBottomSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marginLeftSuggested" })
  marginLeftSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marginRightSuggested" })
  marginRightSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marginTopSuggested" })
  marginTopSuggested?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sizeSuggestionState" })
  sizeSuggestionState?: SizeSuggestionState;

  @SpeakeasyMetadata({ data: "json, name=titleSuggested" })
  titleSuggested?: boolean;
}
