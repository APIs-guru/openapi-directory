import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1VersionVariantsVariant } from "./googleclouddialogflowcxv3beta1versionvariantsvariant";



// GoogleCloudDialogflowCxV3beta1VersionVariants
/** 
 * A list of flow version variants.
**/
export class GoogleCloudDialogflowCxV3beta1VersionVariants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=variants", elemType: GoogleCloudDialogflowCxV3beta1VersionVariantsVariant })
  variants?: GoogleCloudDialogflowCxV3beta1VersionVariantsVariant[];
}
