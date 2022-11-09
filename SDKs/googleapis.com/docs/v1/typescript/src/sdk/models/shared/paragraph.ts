import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bullet } from "./bullet";
import { ParagraphElement } from "./paragraphelement";
import { ParagraphStyle } from "./paragraphstyle";
import { SuggestedBullet } from "./suggestedbullet";
import { SuggestedParagraphStyle } from "./suggestedparagraphstyle";
import { ObjectReferences } from "./objectreferences";


// Paragraph
/** 
 * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
**/
export class Paragraph extends SpeakeasyBase {
  @Metadata({ data: "json, name=bullet" })
  bullet?: Bullet;

  @Metadata({ data: "json, name=elements", elemType: shared.ParagraphElement })
  elements?: ParagraphElement[];

  @Metadata({ data: "json, name=paragraphStyle" })
  paragraphStyle?: ParagraphStyle;

  @Metadata({ data: "json, name=positionedObjectIds" })
  positionedObjectIds?: string[];

  @Metadata({ data: "json, name=suggestedBulletChanges", elemType: shared.SuggestedBullet })
  suggestedBulletChanges?: Map<string, SuggestedBullet>;

  @Metadata({ data: "json, name=suggestedParagraphStyleChanges", elemType: shared.SuggestedParagraphStyle })
  suggestedParagraphStyleChanges?: Map<string, SuggestedParagraphStyle>;

  @Metadata({ data: "json, name=suggestedPositionedObjectIds", elemType: shared.ObjectReferences })
  suggestedPositionedObjectIds?: Map<string, ObjectReferences>;
}
