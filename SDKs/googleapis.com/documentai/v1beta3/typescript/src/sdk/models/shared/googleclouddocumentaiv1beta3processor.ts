import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDocumentaiV1beta3ProcessorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
,    Enabling = "ENABLING"
,    Disabling = "DISABLING"
,    Creating = "CREATING"
,    Failed = "FAILED"
,    Deleting = "DELETING"
}


// GoogleCloudDocumentaiV1beta3Processor
/** 
 * The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.
**/
export class GoogleCloudDocumentaiV1beta3Processor extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=defaultProcessorVersion" })
  defaultProcessorVersion?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=processEndpoint" })
  processEndpoint?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDocumentaiV1beta3ProcessorStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
