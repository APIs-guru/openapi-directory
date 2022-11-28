import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2KeyValuePairHint
/** 
 * Reserved for future use.
**/
export class GoogleCloudDocumentaiV1beta2KeyValuePairHint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=valueTypes" })
  valueTypes?: string[];
}
