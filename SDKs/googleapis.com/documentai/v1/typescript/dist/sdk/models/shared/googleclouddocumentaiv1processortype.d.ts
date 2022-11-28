import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorTypeLocationInfo } from "./googleclouddocumentaiv1processortypelocationinfo";
export declare enum GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum {
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
export declare class GoogleCloudDocumentaiV1ProcessorType extends SpeakeasyBase {
    allowCreation?: boolean;
    availableLocations?: GoogleCloudDocumentaiV1ProcessorTypeLocationInfo[];
    category?: string;
    launchStage?: GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum;
    name?: string;
    type?: string;
}
