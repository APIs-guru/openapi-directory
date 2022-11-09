import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies } from "./googlechromepolicyversionsv1policyschemafielddependencies";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription } from "./googlechromepolicyversionsv1policyschemafieldknownvaluedescription";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDescription } from "./googlechromepolicyversionsv1policyschemafielddescription";
import { GoogleChromePolicyVersionsV1PolicySchemaRequiredItems } from "./googlechromepolicyversionsv1policyschemarequireditems";


// GoogleChromePolicyVersionsV1PolicySchemaFieldDescription
/** 
 * Provides detailed information for a particular field that is part of a PolicySchema.
**/
export class GoogleChromePolicyVersionsV1PolicySchemaFieldDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: any;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=fieldDependencies", elemType: shared.GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies })
  fieldDependencies?: GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies[];

  @Metadata({ data: "json, name=fieldDescription" })
  fieldDescription?: string;

  @Metadata({ data: "json, name=inputConstraint" })
  inputConstraint?: string;

  @Metadata({ data: "json, name=knownValueDescriptions", elemType: shared.GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription })
  knownValueDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nestedFieldDescriptions", elemType: shared.GoogleChromePolicyVersionsV1PolicySchemaFieldDescription })
  nestedFieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[];

  @Metadata({ data: "json, name=requiredItems", elemType: shared.GoogleChromePolicyVersionsV1PolicySchemaRequiredItems })
  requiredItems?: GoogleChromePolicyVersionsV1PolicySchemaRequiredItems[];
}
