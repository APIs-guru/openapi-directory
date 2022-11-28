import { SpeakeasyBase } from "../../../internal/utils";
import { Bullet } from "./bullet";
import { ParagraphStyle } from "./paragraphstyle";
/**
 * A TextElement kind that represents the beginning of a new paragraph.
**/
export declare class ParagraphMarker extends SpeakeasyBase {
    bullet?: Bullet;
    style?: ParagraphStyle;
}
