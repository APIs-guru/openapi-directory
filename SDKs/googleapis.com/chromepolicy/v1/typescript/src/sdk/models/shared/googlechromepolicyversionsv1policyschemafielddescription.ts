import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies } from "./googlechromepolicyversionsv1policyschemafielddependencies";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription } from "./googlechromepolicyversionsv1policyschemafieldknownvaluedescription";
import { GoogleChromePolicyVersionsV1PolicySchemaRequiredItems } from "./googlechromepolicyversionsv1policyschemarequireditems";



// GoogleChromePolicyVersionsV1PolicySchemaFieldDescription
/** 
 * Provides detailed information for a particular field that is part of a PolicySchema.
**/
export class GoogleChromePolicyVersionsV1PolicySchemaFieldDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: any;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldDependencies", elemType: GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies })
  fieldDependencies?: GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies[];

  @SpeakeasyMetadata({ data: "json, name=fieldDescription" })
  fieldDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=inputConstraint" })
  inputConstraint?: string;

  @SpeakeasyMetadata({ data: "json, name=knownValueDescriptions", elemType: GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription })
  knownValueDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nestedFieldDescriptions", elemType: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription })
  nestedFieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[];

  @SpeakeasyMetadata({ data: "json, name=requiredItems", elemType: GoogleChromePolicyVersionsV1PolicySchemaRequiredItems })
  requiredItems?: GoogleChromePolicyVersionsV1PolicySchemaRequiredItems[];
}
