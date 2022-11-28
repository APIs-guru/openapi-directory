import { SpeakeasyBase } from "../../../internal/utils";
import { Bullet } from "./bullet";
import { ParagraphElement } from "./paragraphelement";
import { ParagraphStyle } from "./paragraphstyle";
import { SuggestedBullet } from "./suggestedbullet";
import { SuggestedParagraphStyle } from "./suggestedparagraphstyle";
import { ObjectReferences } from "./objectreferences";
import { ParagraphElementInput } from "./paragraphelement";
/**
 * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
**/
export declare class Paragraph extends SpeakeasyBase {
    bullet?: Bullet;
    elements?: ParagraphElement[];
    paragraphStyle?: ParagraphStyle;
    positionedObjectIds?: string[];
    suggestedBulletChanges?: Map<string, SuggestedBullet>;
    suggestedParagraphStyleChanges?: Map<string, SuggestedParagraphStyle>;
    suggestedPositionedObjectIds?: Map<string, ObjectReferences>;
}
/**
 * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
**/
export declare class ParagraphInput extends SpeakeasyBase {
    bullet?: Bullet;
    elements?: ParagraphElementInput[];
    paragraphStyle?: ParagraphStyle;
    positionedObjectIds?: string[];
    suggestedBulletChanges?: Map<string, SuggestedBullet>;
    suggestedParagraphStyleChanges?: Map<string, SuggestedParagraphStyle>;
    suggestedPositionedObjectIds?: Map<string, ObjectReferences>;
}
