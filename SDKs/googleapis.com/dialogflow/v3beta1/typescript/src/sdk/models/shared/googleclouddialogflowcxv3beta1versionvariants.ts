import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1VersionVariantsVariant } from "./googleclouddialogflowcxv3beta1versionvariantsvariant";


// GoogleCloudDialogflowCxV3beta1VersionVariants
/** 
 * A list of flow version variants.
**/
export class GoogleCloudDialogflowCxV3beta1VersionVariants extends SpeakeasyBase {
  @Metadata({ data: "json, name=variants", elemType: shared.GoogleCloudDialogflowCxV3beta1VersionVariantsVariant })
  variants?: GoogleCloudDialogflowCxV3beta1VersionVariantsVariant[];
}
