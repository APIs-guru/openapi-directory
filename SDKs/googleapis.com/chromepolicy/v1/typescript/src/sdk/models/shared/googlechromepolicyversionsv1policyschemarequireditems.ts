import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromePolicyVersionsV1PolicySchemaRequiredItems
/** 
 * The fields that will become required based on the value of this field.
**/
export class GoogleChromePolicyVersionsV1PolicySchemaRequiredItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldConditions" })
  fieldConditions?: string[];

  @Metadata({ data: "json, name=requiredFields" })
  requiredFields?: string[];
}
