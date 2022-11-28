import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";
/**
 * Describes the bullet of a paragraph.
**/
export declare class Bullet extends SpeakeasyBase {
    bulletStyle?: TextStyle;
    glyph?: string;
    listId?: string;
    nestingLevel?: number;
}
