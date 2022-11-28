import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A nested protocol buffer that represents a policy tag and all its descendants.
**/
export declare class GoogleCloudDatacatalogV1SerializedPolicyTag extends SpeakeasyBase {
    childPolicyTags?: GoogleCloudDatacatalogV1SerializedPolicyTag[];
    description?: string;
    displayName?: string;
    policyTag?: string;
}
