import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeploymentOccurrencePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    Gke = "GKE"
,    Flex = "FLEX"
,    Custom = "CUSTOM"
}


// DeploymentOccurrence
/** 
 * The period during which some deployable was active in a runtime.
**/
export class DeploymentOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=config" })
  config?: string;

  @Metadata({ data: "json, name=deployTime" })
  deployTime?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: DeploymentOccurrencePlatformEnum;

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string[];

  @Metadata({ data: "json, name=undeployTime" })
  undeployTime?: string;

  @Metadata({ data: "json, name=userEmail" })
  userEmail?: string;
}
