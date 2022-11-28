import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TfLiteModelInput
/** 
 * Information that is specific to TfLite models.
**/
export class TfLiteModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automlModel" })
  automlModel?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsTfliteUri" })
  gcsTfliteUri?: string;
}


// TfLiteModel
/** 
 * Information that is specific to TfLite models.
**/
export class TfLiteModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automlModel" })
  automlModel?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsTfliteUri" })
  gcsTfliteUri?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;
}
