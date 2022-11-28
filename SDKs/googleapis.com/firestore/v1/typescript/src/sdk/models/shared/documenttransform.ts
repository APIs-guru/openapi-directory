import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldTransform } from "./fieldtransform";



// DocumentTransform
/** 
 * A transformation of a document.
**/
export class DocumentTransform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldTransforms", elemType: FieldTransform })
  fieldTransforms?: FieldTransform[];
}
