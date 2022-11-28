import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo } from "./googleclouddocumentaiv1processorversiondeprecationinfo";
import { GoogleCloudDocumentaiV1DocumentSchema } from "./googleclouddocumentaiv1documentschema";


export enum GoogleCloudDocumentaiV1ProcessorVersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Deployed = "DEPLOYED",
    Deploying = "DEPLOYING",
    Undeployed = "UNDEPLOYED",
    Undeploying = "UNDEPLOYING",
    Creating = "CREATING",
    Deleting = "DELETING",
    Failed = "FAILED"
}


// GoogleCloudDocumentaiV1ProcessorVersion
/** 
 * A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version
**/
export class GoogleCloudDocumentaiV1ProcessorVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deprecationInfo" })
  deprecationInfo?: GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=documentSchema" })
  documentSchema?: GoogleCloudDocumentaiV1DocumentSchema;

  @SpeakeasyMetadata({ data: "json, name=googleManaged" })
  googleManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyVersionName" })
  kmsKeyVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDocumentaiV1ProcessorVersionStateEnum;
}
