import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo } from "./googleclouddocumentaiv1beta3processortypelocationinfo";

export enum GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Unimplemented = "UNIMPLEMENTED"
,    Prelaunch = "PRELAUNCH"
,    EarlyAccess = "EARLY_ACCESS"
,    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}


// GoogleCloudDocumentaiV1beta3ProcessorType
/** 
 * A processor type is responsible for performing a certain document understanding task on a certain type of document.
**/
export class GoogleCloudDocumentaiV1beta3ProcessorType extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowCreation" })
  allowCreation?: boolean;

  @Metadata({ data: "json, name=availableLocations", elemType: shared.GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo })
  availableLocations?: GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo[];

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
