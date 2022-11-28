import { SpeakeasyBase } from "../../../internal/utils";
import { FieldTransform } from "./fieldtransform";
/**
 * A transformation of a document.
**/
export declare class DocumentTransform extends SpeakeasyBase {
    document?: string;
    fieldTransforms?: FieldTransform[];
}
