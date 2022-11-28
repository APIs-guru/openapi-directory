import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorTypeLocationInfo } from "./googleclouddocumentaiv1processortypelocationinfo";


export enum GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}


// GoogleCloudDocumentaiV1ProcessorType
/** 
 * A processor type is responsible for performing a certain document understanding task on a certain type of document.
**/
export class GoogleCloudDocumentaiV1ProcessorType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCreation" })
  allowCreation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=availableLocations", elemType: GoogleCloudDocumentaiV1ProcessorTypeLocationInfo })
  availableLocations?: GoogleCloudDocumentaiV1ProcessorTypeLocationInfo[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
