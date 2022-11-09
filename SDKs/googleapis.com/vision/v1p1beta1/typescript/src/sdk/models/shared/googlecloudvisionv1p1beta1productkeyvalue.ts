import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVisionV1p1beta1ProductKeyValue
/** 
 * A product label represented as a key-value pair.
**/
export class GoogleCloudVisionV1p1beta1ProductKeyValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
