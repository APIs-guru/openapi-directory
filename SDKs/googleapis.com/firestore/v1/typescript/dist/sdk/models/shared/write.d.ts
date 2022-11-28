import { SpeakeasyBase } from "../../../internal/utils";
import { Precondition } from "./precondition";
import { DocumentTransform } from "./documenttransform";
import { Document } from "./document";
import { DocumentMask } from "./documentmask";
import { FieldTransform } from "./fieldtransform";
/**
 * A write on a document.
**/
export declare class Write extends SpeakeasyBase {
    currentDocument?: Precondition;
    delete?: string;
    transform?: DocumentTransform;
    update?: Document;
    updateMask?: DocumentMask;
    updateTransforms?: FieldTransform[];
}
