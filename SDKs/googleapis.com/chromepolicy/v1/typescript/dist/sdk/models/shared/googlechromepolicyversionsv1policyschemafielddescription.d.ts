import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies } from "./googlechromepolicyversionsv1policyschemafielddependencies";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription } from "./googlechromepolicyversionsv1policyschemafieldknownvaluedescription";
import { GoogleChromePolicyVersionsV1PolicySchemaRequiredItems } from "./googlechromepolicyversionsv1policyschemarequireditems";
/**
 * Provides detailed information for a particular field that is part of a PolicySchema.
**/
export declare class GoogleChromePolicyVersionsV1PolicySchemaFieldDescription extends SpeakeasyBase {
    defaultValue?: any;
    description?: string;
    field?: string;
    fieldDependencies?: GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies[];
    fieldDescription?: string;
    inputConstraint?: string;
    knownValueDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription[];
    name?: string;
    nestedFieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[];
    requiredItems?: GoogleChromePolicyVersionsV1PolicySchemaRequiredItems[];
}
