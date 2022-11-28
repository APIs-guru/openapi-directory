import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement } from "./structuralelement";
import { StructuralElementInput } from "./structuralelement";
/**
 * A document footer.
**/
export declare class Footer extends SpeakeasyBase {
    content?: StructuralElement[];
    footerId?: string;
}
/**
 * A document footer.
**/
export declare class FooterInput extends SpeakeasyBase {
    content?: StructuralElementInput[];
    footerId?: string;
}
