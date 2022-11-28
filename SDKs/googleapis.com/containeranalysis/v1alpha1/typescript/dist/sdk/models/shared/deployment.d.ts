import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeploymentPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Gke = "GKE",
    Flex = "FLEX",
    Custom = "CUSTOM"
}
/**
 * The period during which some deployable was active in a runtime.
**/
export declare class Deployment extends SpeakeasyBase {
    address?: string;
    config?: string;
    deployTime?: string;
    platform?: DeploymentPlatformEnum;
    resourceUri?: string[];
    undeployTime?: string;
    userEmail?: string;
}
