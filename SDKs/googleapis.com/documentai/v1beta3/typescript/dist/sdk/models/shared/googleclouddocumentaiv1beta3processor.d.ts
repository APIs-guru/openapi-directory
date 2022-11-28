import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDocumentaiV1beta3ProcessorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Enabling = "ENABLING",
    Disabling = "DISABLING",
    Creating = "CREATING",
    Failed = "FAILED",
    Deleting = "DELETING"
}
/**
 * The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.
**/
export declare class GoogleCloudDocumentaiV1beta3Processor extends SpeakeasyBase {
    createTime?: string;
    defaultProcessorVersion?: string;
    displayName?: string;
    kmsKeyName?: string;
    name?: string;
    processEndpoint?: string;
    state?: GoogleCloudDocumentaiV1beta3ProcessorStateEnum;
    type?: string;
}
/**
 * The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.
**/
export declare class GoogleCloudDocumentaiV1beta3ProcessorInput extends SpeakeasyBase {
    createTime?: string;
    defaultProcessorVersion?: string;
    displayName?: string;
    kmsKeyName?: string;
    type?: string;
}
