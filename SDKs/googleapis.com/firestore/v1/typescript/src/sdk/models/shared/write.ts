import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Precondition } from "./precondition";
import { DocumentTransform } from "./documenttransform";
import { Document } from "./document";
import { DocumentMask } from "./documentmask";
import { FieldTransform } from "./fieldtransform";



// Write
/** 
 * A write on a document.
**/
export class Write extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentDocument" })
  currentDocument?: Precondition;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: string;

  @SpeakeasyMetadata({ data: "json, name=transform" })
  transform?: DocumentTransform;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: Document;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: DocumentMask;

  @SpeakeasyMetadata({ data: "json, name=updateTransforms", elemType: FieldTransform })
  updateTransforms?: FieldTransform[];
}
