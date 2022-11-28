import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CropHint } from "./crophint";



// CropHintsAnnotation
/** 
 * Set of crop hints that are used to generate new crops when serving images.
**/
export class CropHintsAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cropHints", elemType: CropHint })
  cropHints?: CropHint[];
}
