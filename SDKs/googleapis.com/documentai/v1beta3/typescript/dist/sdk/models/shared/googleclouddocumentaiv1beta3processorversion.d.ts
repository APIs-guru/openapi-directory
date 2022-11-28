import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo } from "./googleclouddocumentaiv1beta3processorversiondeprecationinfo";
import { GoogleCloudDocumentaiV1beta3DocumentSchema } from "./googleclouddocumentaiv1beta3documentschema";
export declare enum GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Deployed = "DEPLOYED",
    Deploying = "DEPLOYING",
    Undeployed = "UNDEPLOYED",
    Undeploying = "UNDEPLOYING",
    Creating = "CREATING",
    Deleting = "DELETING",
    Failed = "FAILED"
}
/**
 * A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version
**/
export declare class GoogleCloudDocumentaiV1beta3ProcessorVersion extends SpeakeasyBase {
    createTime?: string;
    deprecationInfo?: GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo;
    displayName?: string;
    documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema;
    googleManaged?: boolean;
    kmsKeyName?: string;
    kmsKeyVersionName?: string;
    name?: string;
    state?: GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum;
}
