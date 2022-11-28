import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeploymentOccurrencePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Gke = "GKE",
    Flex = "FLEX",
    Custom = "CUSTOM"
}


// DeploymentOccurrence
/** 
 * The period during which some deployable was active in a runtime.
**/
export class DeploymentOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: string;

  @SpeakeasyMetadata({ data: "json, name=deployTime" })
  deployTime?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: DeploymentOccurrencePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string[];

  @SpeakeasyMetadata({ data: "json, name=undeployTime" })
  undeployTime?: string;

  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;
}
