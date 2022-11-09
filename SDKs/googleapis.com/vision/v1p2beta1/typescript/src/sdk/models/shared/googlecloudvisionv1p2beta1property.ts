import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVisionV1p2beta1Property
/** 
 * A `Property` consists of a user-supplied name/value pair.
**/
export class GoogleCloudVisionV1p2beta1Property extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uint64Value" })
  uint64Value?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
