import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo } from "./googleclouddocumentaiv1beta3processortypelocationinfo";


export enum GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}


// GoogleCloudDocumentaiV1beta3ProcessorType
/** 
 * A processor type is responsible for performing a certain document understanding task on a certain type of document.
**/
export class GoogleCloudDocumentaiV1beta3ProcessorType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCreation" })
  allowCreation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=availableLocations", elemType: GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo })
  availableLocations?: GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
