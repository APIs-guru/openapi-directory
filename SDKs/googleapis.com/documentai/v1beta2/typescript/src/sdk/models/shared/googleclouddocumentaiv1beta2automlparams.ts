import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2AutoMlParams
/** 
 * Parameters to control AutoML model prediction behavior.
**/
export class GoogleCloudDocumentaiV1beta2AutoMlParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;
}
