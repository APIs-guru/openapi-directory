import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo
/** 
 * StringFieldInfo defines output info for any string type field.
**/
export class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averageLength" })
  averageLength?: number;

  @SpeakeasyMetadata({ data: "json, name=maxLength" })
  maxLength?: string;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength?: string;
}
