import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3VersionVariants } from "./googleclouddialogflowcxv3versionvariants";



// GoogleCloudDialogflowCxV3ExperimentDefinition
/** 
 * Definition of the experiment.
**/
export class GoogleCloudDialogflowCxV3ExperimentDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=versionVariants" })
  versionVariants?: GoogleCloudDialogflowCxV3VersionVariants;
}
