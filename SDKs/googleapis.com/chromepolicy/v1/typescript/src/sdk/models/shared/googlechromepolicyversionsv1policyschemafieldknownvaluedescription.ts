import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription
/** 
 * Provides detailed information about a known value that is allowed for a particular field in a PolicySchema.
**/
export class GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
