import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies
/** 
 * The field and the value it must have for another field to be allowed to be set.
**/
export class GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceField" })
  sourceField?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceFieldValue" })
  sourceFieldValue?: string;
}
