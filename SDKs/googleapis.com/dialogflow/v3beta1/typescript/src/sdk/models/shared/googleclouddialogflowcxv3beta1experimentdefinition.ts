import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1VersionVariants } from "./googleclouddialogflowcxv3beta1versionvariants";



// GoogleCloudDialogflowCxV3beta1ExperimentDefinition
/** 
 * Definition of the experiment.
**/
export class GoogleCloudDialogflowCxV3beta1ExperimentDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=versionVariants" })
  versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants;
}
