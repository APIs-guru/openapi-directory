import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1Property
/** 
 * A `Property` consists of a user-supplied name/value pair.
**/
export class GoogleCloudVisionV1p1beta1Property extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uint64Value" })
  uint64Value?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
