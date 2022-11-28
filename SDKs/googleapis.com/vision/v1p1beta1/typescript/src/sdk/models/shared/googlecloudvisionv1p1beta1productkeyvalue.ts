import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1ProductKeyValue
/** 
 * A product label represented as a key-value pair.
**/
export class GoogleCloudVisionV1p1beta1ProductKeyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
