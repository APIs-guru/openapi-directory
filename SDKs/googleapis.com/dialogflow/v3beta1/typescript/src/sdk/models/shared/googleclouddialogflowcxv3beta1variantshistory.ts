import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1VersionVariants } from "./googleclouddialogflowcxv3beta1versionvariants";



// GoogleCloudDialogflowCxV3beta1VariantsHistory
/** 
 * The history of variants update.
**/
export class GoogleCloudDialogflowCxV3beta1VariantsHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=versionVariants" })
  versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants;
}
