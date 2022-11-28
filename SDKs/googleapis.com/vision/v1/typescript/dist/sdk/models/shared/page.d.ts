import { SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { TextProperty } from "./textproperty";
/**
 * Detected page from OCR.
**/
export declare class Page extends SpeakeasyBase {
    blocks?: Block[];
    confidence?: number;
    height?: number;
    property?: TextProperty;
    width?: number;
}
