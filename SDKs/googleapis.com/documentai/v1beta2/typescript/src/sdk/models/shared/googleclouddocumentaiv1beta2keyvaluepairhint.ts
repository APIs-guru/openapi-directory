import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta2KeyValuePairHint
/** 
 * Reserved for future use.
**/
export class GoogleCloudDocumentaiV1beta2KeyValuePairHint extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=valueTypes" })
  valueTypes?: string[];
}
