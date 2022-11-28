import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElementInput } from "./structuralelement";
import { StructuralElement } from "./structuralelement";
/**
 * A document footnote.
**/
export declare class FootnoteInput extends SpeakeasyBase {
    content?: StructuralElementInput[];
    footnoteId?: string;
}
/**
 * A document footnote.
**/
export declare class Footnote extends SpeakeasyBase {
    content?: StructuralElement[];
    footnoteId?: string;
}
