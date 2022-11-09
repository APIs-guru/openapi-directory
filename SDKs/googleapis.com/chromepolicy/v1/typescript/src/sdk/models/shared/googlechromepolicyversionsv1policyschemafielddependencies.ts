import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies
/** 
 * The field and the value it must have for another field to be allowed to be set.
**/
export class GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceField" })
  sourceField?: string;

  @Metadata({ data: "json, name=sourceFieldValue" })
  sourceFieldValue?: string;
}
