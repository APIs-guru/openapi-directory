import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TfLiteModel
/** 
 * Information that is specific to TfLite models.
**/
export class TfLiteModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=automlModel" })
  automlModel?: string;

  @Metadata({ data: "json, name=gcsTfliteUri" })
  gcsTfliteUri?: string;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;
}
