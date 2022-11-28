import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement } from "./structuralelement";
import { StructuralElementInput } from "./structuralelement";
/**
 * A document header.
**/
export declare class Header extends SpeakeasyBase {
    content?: StructuralElement[];
    headerId?: string;
}
/**
 * A document header.
**/
export declare class HeaderInput extends SpeakeasyBase {
    content?: StructuralElementInput[];
    headerId?: string;
}
