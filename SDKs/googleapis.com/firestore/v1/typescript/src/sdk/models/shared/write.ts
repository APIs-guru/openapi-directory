import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=currentDocument" })
  currentDocument?: Precondition;

  @Metadata({ data: "json, name=delete" })
  delete?: string;

  @Metadata({ data: "json, name=transform" })
  transform?: DocumentTransform;

  @Metadata({ data: "json, name=update" })
  update?: Document;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: DocumentMask;

  @Metadata({ data: "json, name=updateTransforms", elemType: shared.FieldTransform })
  updateTransforms?: FieldTransform[];
}
