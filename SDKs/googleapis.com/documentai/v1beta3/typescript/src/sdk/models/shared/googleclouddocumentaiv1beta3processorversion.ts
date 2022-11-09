import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo } from "./googleclouddocumentaiv1beta3processorversiondeprecationinfo";

export enum GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Deployed = "DEPLOYED"
,    Deploying = "DEPLOYING"
,    Undeployed = "UNDEPLOYED"
,    Undeploying = "UNDEPLOYING"
,    Creating = "CREATING"
,    Deleting = "DELETING"
,    Failed = "FAILED"
}


// GoogleCloudDocumentaiV1beta3ProcessorVersion
/** 
 * A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version
**/
export class GoogleCloudDocumentaiV1beta3ProcessorVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deprecationInfo" })
  deprecationInfo?: GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=googleManaged" })
  googleManaged?: boolean;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @Metadata({ data: "json, name=kmsKeyVersionName" })
  kmsKeyVersionName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDocumentaiV1beta3ProcessorVersionStateEnum;
}
