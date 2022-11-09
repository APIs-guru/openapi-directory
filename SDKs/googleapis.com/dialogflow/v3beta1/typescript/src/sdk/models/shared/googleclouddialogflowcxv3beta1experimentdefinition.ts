import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1VersionVariants } from "./googleclouddialogflowcxv3beta1versionvariants";


// GoogleCloudDialogflowCxV3beta1ExperimentDefinition
/** 
 * Definition of the experiment.
**/
export class GoogleCloudDialogflowCxV3beta1ExperimentDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=versionVariants" })
  versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants;
}
