import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bullet } from "./bullet";
import { ParagraphElement } from "./paragraphelement";
import { ParagraphStyle } from "./paragraphstyle";
import { SuggestedBullet } from "./suggestedbullet";
import { SuggestedParagraphStyle } from "./suggestedparagraphstyle";
import { ObjectReferences } from "./objectreferences";
import { ParagraphElementInput } from "./paragraphelement";



// Paragraph
/** 
 * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
**/
export class Paragraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bullet" })
  bullet?: Bullet;

  @SpeakeasyMetadata({ data: "json, name=elements", elemType: ParagraphElement })
  elements?: ParagraphElement[];

  @SpeakeasyMetadata({ data: "json, name=paragraphStyle" })
  paragraphStyle?: ParagraphStyle;

  @SpeakeasyMetadata({ data: "json, name=positionedObjectIds" })
  positionedObjectIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedBulletChanges", elemType: SuggestedBullet })
  suggestedBulletChanges?: Map<string, SuggestedBullet>;

  @SpeakeasyMetadata({ data: "json, name=suggestedParagraphStyleChanges", elemType: SuggestedParagraphStyle })
  suggestedParagraphStyleChanges?: Map<string, SuggestedParagraphStyle>;

  @SpeakeasyMetadata({ data: "json, name=suggestedPositionedObjectIds", elemType: ObjectReferences })
  suggestedPositionedObjectIds?: Map<string, ObjectReferences>;
}


// ParagraphInput
/** 
 * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
**/
export class ParagraphInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bullet" })
  bullet?: Bullet;

  @SpeakeasyMetadata({ data: "json, name=elements", elemType: ParagraphElementInput })
  elements?: ParagraphElementInput[];

  @SpeakeasyMetadata({ data: "json, name=paragraphStyle" })
  paragraphStyle?: ParagraphStyle;

  @SpeakeasyMetadata({ data: "json, name=positionedObjectIds" })
  positionedObjectIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedBulletChanges", elemType: SuggestedBullet })
  suggestedBulletChanges?: Map<string, SuggestedBullet>;

  @SpeakeasyMetadata({ data: "json, name=suggestedParagraphStyleChanges", elemType: SuggestedParagraphStyle })
  suggestedParagraphStyleChanges?: Map<string, SuggestedParagraphStyle>;

  @SpeakeasyMetadata({ data: "json, name=suggestedPositionedObjectIds", elemType: ObjectReferences })
  suggestedPositionedObjectIds?: Map<string, ObjectReferences>;
}
