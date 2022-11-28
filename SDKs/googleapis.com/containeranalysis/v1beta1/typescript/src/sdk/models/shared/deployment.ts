import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeploymentPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Gke = "GKE",
    Flex = "FLEX",
    Custom = "CUSTOM"
}


// Deployment
/** 
 * The period during which some deployable was active in a runtime.
**/
export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: string;

  @SpeakeasyMetadata({ data: "json, name=deployTime" })
  deployTime?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: DeploymentPlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string[];

  @SpeakeasyMetadata({ data: "json, name=undeployTime" })
  undeployTime?: string;

  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;
}
