import { SpeakeasyBase } from "../../../internal/utils";
import { CropHint } from "./crophint";
/**
 * Set of crop hints that are used to generate new crops when serving images.
**/
export declare class CropHintsAnnotation extends SpeakeasyBase {
    cropHints?: CropHint[];
}
