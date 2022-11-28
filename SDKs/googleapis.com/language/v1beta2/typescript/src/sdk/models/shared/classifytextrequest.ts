import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationModelOptions } from "./classificationmodeloptions";
import { Document } from "./document";



// ClassifyTextRequest
/** 
 * The document classification request message.
**/
export class ClassifyTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classificationModelOptions" })
  classificationModelOptions?: ClassificationModelOptions;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: Document;
}
