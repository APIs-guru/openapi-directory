import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectBorderSuggestionState } from "./embeddedobjectbordersuggestionstate";
import { ImagePropertiesSuggestionState } from "./imagepropertiessuggestionstate";
import { LinkedContentReferenceSuggestionState } from "./linkedcontentreferencesuggestionstate";
import { SizeSuggestionState } from "./sizesuggestionstate";
/**
 * A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field set to true, there's a new suggested value.
**/
export declare class EmbeddedObjectSuggestionState extends SpeakeasyBase {
    descriptionSuggested?: boolean;
    embeddedDrawingPropertiesSuggestionState?: Map<string, any>;
    embeddedObjectBorderSuggestionState?: EmbeddedObjectBorderSuggestionState;
    imagePropertiesSuggestionState?: ImagePropertiesSuggestionState;
    linkedContentReferenceSuggestionState?: LinkedContentReferenceSuggestionState;
    marginBottomSuggested?: boolean;
    marginLeftSuggested?: boolean;
    marginRightSuggested?: boolean;
    marginTopSuggested?: boolean;
    sizeSuggestionState?: SizeSuggestionState;
    titleSuggested?: boolean;
}
