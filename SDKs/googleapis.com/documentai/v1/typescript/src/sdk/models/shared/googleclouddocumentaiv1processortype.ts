import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1ProcessorTypeLocationInfo } from "./googleclouddocumentaiv1processortypelocationinfo";

export enum GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Unimplemented = "UNIMPLEMENTED"
,    Prelaunch = "PRELAUNCH"
,    EarlyAccess = "EARLY_ACCESS"
,    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}


// GoogleCloudDocumentaiV1ProcessorType
/** 
 * A processor type is responsible for performing a certain document understanding task on a certain type of document.
**/
export class GoogleCloudDocumentaiV1ProcessorType extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowCreation" })
  allowCreation?: boolean;

  @Metadata({ data: "json, name=availableLocations", elemType: shared.GoogleCloudDocumentaiV1ProcessorTypeLocationInfo })
  availableLocations?: GoogleCloudDocumentaiV1ProcessorTypeLocationInfo[];

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudDocumentaiV1ProcessorTypeLaunchStageEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
