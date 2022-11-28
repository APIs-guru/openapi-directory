import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3VersionVariantsVariant } from "./googleclouddialogflowcxv3versionvariantsvariant";



// GoogleCloudDialogflowCxV3VersionVariants
/** 
 * A list of flow version variants.
**/
export class GoogleCloudDialogflowCxV3VersionVariants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=variants", elemType: GoogleCloudDialogflowCxV3VersionVariantsVariant })
  variants?: GoogleCloudDialogflowCxV3VersionVariantsVariant[];
}
