import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FieldTransform } from "./fieldtransform";


// DocumentTransform
/** 
 * A transformation of a document.
**/
export class DocumentTransform extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: string;

  @Metadata({ data: "json, name=fieldTransforms", elemType: shared.FieldTransform })
  fieldTransforms?: FieldTransform[];
}
