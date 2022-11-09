import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription
/** 
 * Provides detailed information about a known value that is allowed for a particular field in a PolicySchema.
**/
export class GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
