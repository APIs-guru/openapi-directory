import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3VersionVariants } from "./googleclouddialogflowcxv3versionvariants";



// GoogleCloudDialogflowCxV3VariantsHistory
/** 
 * The history of variants update.
**/
export class GoogleCloudDialogflowCxV3VariantsHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=versionVariants" })
  versionVariants?: GoogleCloudDialogflowCxV3VersionVariants;
}
