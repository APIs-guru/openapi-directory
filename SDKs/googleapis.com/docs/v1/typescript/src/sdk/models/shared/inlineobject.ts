import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InlineObjectProperties } from "./inlineobjectproperties";
import { SuggestedInlineObjectProperties } from "./suggestedinlineobjectproperties";


// InlineObject
/** 
 * An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.
**/
export class InlineObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=inlineObjectProperties" })
  inlineObjectProperties?: InlineObjectProperties;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInlineObjectPropertiesChanges", elemType: shared.SuggestedInlineObjectProperties })
  suggestedInlineObjectPropertiesChanges?: Map<string, SuggestedInlineObjectProperties>;

  @Metadata({ data: "json, name=suggestedInsertionId" })
  suggestedInsertionId?: string;
}
