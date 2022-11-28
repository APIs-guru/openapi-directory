import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message representing one policy tag when exported as a nested proto.
**/
export declare class GoogleCloudDatacatalogV1beta1SerializedPolicyTag extends SpeakeasyBase {
    childPolicyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTag[];
    description?: string;
    displayName?: string;
    policyTag?: string;
}
