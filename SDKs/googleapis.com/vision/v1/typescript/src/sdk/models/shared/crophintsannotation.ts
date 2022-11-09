import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CropHint } from "./crophint";


// CropHintsAnnotation
/** 
 * Set of crop hints that are used to generate new crops when serving images.
**/
export class CropHintsAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=cropHints", elemType: shared.CropHint })
  cropHints?: CropHint[];
}
