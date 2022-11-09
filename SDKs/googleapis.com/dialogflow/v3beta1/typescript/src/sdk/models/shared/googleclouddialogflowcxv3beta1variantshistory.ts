import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1VersionVariants } from "./googleclouddialogflowcxv3beta1versionvariants";


// GoogleCloudDialogflowCxV3beta1VariantsHistory
/** 
 * The history of variants update.
**/
export class GoogleCloudDialogflowCxV3beta1VariantsHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=versionVariants" })
  versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants;
}
