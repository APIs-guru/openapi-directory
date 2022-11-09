import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeploymentPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    Gke = "GKE"
,    Flex = "FLEX"
,    Custom = "CUSTOM"
}


// Deployment
/** 
 * The period during which some deployable was active in a runtime.
**/
export class Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=config" })
  config?: string;

  @Metadata({ data: "json, name=deployTime" })
  deployTime?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: DeploymentPlatformEnum;

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string[];

  @Metadata({ data: "json, name=undeployTime" })
  undeployTime?: string;

  @Metadata({ data: "json, name=userEmail" })
  userEmail?: string;
}
