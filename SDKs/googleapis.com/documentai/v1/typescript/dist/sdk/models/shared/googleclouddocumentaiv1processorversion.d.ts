import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo } from "./googleclouddocumentaiv1processorversiondeprecationinfo";
import { GoogleCloudDocumentaiV1DocumentSchema } from "./googleclouddocumentaiv1documentschema";
export declare enum GoogleCloudDocumentaiV1ProcessorVersionStateEnum {
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
export declare class GoogleCloudDocumentaiV1ProcessorVersion extends SpeakeasyBase {
    createTime?: string;
    deprecationInfo?: GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo;
    displayName?: string;
    documentSchema?: GoogleCloudDocumentaiV1DocumentSchema;
    googleManaged?: boolean;
    kmsKeyName?: string;
    kmsKeyVersionName?: string;
    name?: string;
    state?: GoogleCloudDocumentaiV1ProcessorVersionStateEnum;
}
