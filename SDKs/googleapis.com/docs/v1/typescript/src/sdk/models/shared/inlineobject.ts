import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InlineObjectProperties } from "./inlineobjectproperties";
import { SuggestedInlineObjectProperties } from "./suggestedinlineobjectproperties";



// InlineObject
/** 
 * An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.
**/
export class InlineObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inlineObjectProperties" })
  inlineObjectProperties?: InlineObjectProperties;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInlineObjectPropertiesChanges", elemType: SuggestedInlineObjectProperties })
  suggestedInlineObjectPropertiesChanges?: Map<string, SuggestedInlineObjectProperties>;

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionId" })
  suggestedInsertionId?: string;
}
