import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo } from "./googleclouddocumentaiv1beta3processortypelocationinfo";
export declare enum GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * A processor type is responsible for performing a certain document understanding task on a certain type of document.
**/
export declare class GoogleCloudDocumentaiV1beta3ProcessorType extends SpeakeasyBase {
    allowCreation?: boolean;
    availableLocations?: GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo[];
    category?: string;
    launchStage?: GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum;
    name?: string;
    type?: string;
}
