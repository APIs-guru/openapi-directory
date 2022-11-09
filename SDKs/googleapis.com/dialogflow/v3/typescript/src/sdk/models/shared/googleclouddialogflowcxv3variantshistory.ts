import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3VersionVariants } from "./googleclouddialogflowcxv3versionvariants";


// GoogleCloudDialogflowCxV3VariantsHistory
/** 
 * The history of variants update.
**/
export class GoogleCloudDialogflowCxV3VariantsHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=versionVariants" })
  versionVariants?: GoogleCloudDialogflowCxV3VersionVariants;
}
