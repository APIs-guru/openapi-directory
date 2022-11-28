import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeploymentOccurrencePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Gke = "GKE",
    Flex = "FLEX",
    Custom = "CUSTOM"
}
/**
 * The period during which some deployable was active in a runtime.
**/
export declare class DeploymentOccurrence extends SpeakeasyBase {
    address?: string;
    config?: string;
    deployTime?: string;
    platform?: DeploymentOccurrencePlatformEnum;
    resourceUri?: string[];
    undeployTime?: string;
    userEmail?: string;
}
