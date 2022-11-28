import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1PolicySchemaRequiredItems
/** 
 * The fields that will become required based on the value of this field.
**/
export class GoogleChromePolicyVersionsV1PolicySchemaRequiredItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldConditions" })
  fieldConditions?: string[];

  @SpeakeasyMetadata({ data: "json, name=requiredFields" })
  requiredFields?: string[];
}
