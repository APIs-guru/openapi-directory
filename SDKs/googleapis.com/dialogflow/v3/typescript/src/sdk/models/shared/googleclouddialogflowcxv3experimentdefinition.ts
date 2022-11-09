import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3VersionVariants } from "./googleclouddialogflowcxv3versionvariants";


// GoogleCloudDialogflowCxV3ExperimentDefinition
/** 
 * Definition of the experiment.
**/
export class GoogleCloudDialogflowCxV3ExperimentDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=versionVariants" })
  versionVariants?: GoogleCloudDialogflowCxV3VersionVariants;
}
