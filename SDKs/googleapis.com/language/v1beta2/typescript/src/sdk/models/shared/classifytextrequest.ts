import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassificationModelOptions } from "./classificationmodeloptions";
import { Document } from "./document";


// ClassifyTextRequest
/** 
 * The document classification request message.
**/
export class ClassifyTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=classificationModelOptions" })
  classificationModelOptions?: ClassificationModelOptions;

  @Metadata({ data: "json, name=document" })
  document?: Document;
}
