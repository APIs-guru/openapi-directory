import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDocumentaiV1ProcessorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Enabling = "ENABLING",
    Disabling = "DISABLING",
    Creating = "CREATING",
    Failed = "FAILED",
    Deleting = "DELETING"
}


// GoogleCloudDocumentaiV1Processor
/** 
 * The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.
**/
export class GoogleCloudDocumentaiV1Processor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultProcessorVersion" })
  defaultProcessorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=processEndpoint" })
  processEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDocumentaiV1ProcessorStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// GoogleCloudDocumentaiV1ProcessorInput
/** 
 * The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.
**/
export class GoogleCloudDocumentaiV1ProcessorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultProcessorVersion" })
  defaultProcessorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
