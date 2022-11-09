import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObjectBorderSuggestionState } from "./embeddedobjectbordersuggestionstate";
import { ImagePropertiesSuggestionState } from "./imagepropertiessuggestionstate";
import { LinkedContentReferenceSuggestionState } from "./linkedcontentreferencesuggestionstate";
import { SizeSuggestionState } from "./sizesuggestionstate";


// EmbeddedObjectSuggestionState
/** 
 * A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export class EmbeddedObjectSuggestionState extends SpeakeasyBase {
  @Metadata({ data: "json, name=descriptionSuggested" })
  descriptionSuggested?: boolean;

  @Metadata({ data: "json, name=embeddedDrawingPropertiesSuggestionState" })
  embeddedDrawingPropertiesSuggestionState?: Map<string, any>;

  @Metadata({ data: "json, name=embeddedObjectBorderSuggestionState" })
  embeddedObjectBorderSuggestionState?: EmbeddedObjectBorderSuggestionState;

  @Metadata({ data: "json, name=imagePropertiesSuggestionState" })
  imagePropertiesSuggestionState?: ImagePropertiesSuggestionState;

  @Metadata({ data: "json, name=linkedContentReferenceSuggestionState" })
  linkedContentReferenceSuggestionState?: LinkedContentReferenceSuggestionState;

  @Metadata({ data: "json, name=marginBottomSuggested" })
  marginBottomSuggested?: boolean;

  @Metadata({ data: "json, name=marginLeftSuggested" })
  marginLeftSuggested?: boolean;

  @Metadata({ data: "json, name=marginRightSuggested" })
  marginRightSuggested?: boolean;

  @Metadata({ data: "json, name=marginTopSuggested" })
  marginTopSuggested?: boolean;

  @Metadata({ data: "json, name=sizeSuggestionState" })
  sizeSuggestionState?: SizeSuggestionState;

  @Metadata({ data: "json, name=titleSuggested" })
  titleSuggested?: boolean;
}
