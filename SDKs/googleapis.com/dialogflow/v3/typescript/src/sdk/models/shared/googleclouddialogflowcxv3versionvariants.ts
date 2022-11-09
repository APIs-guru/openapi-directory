import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3VersionVariantsVariant } from "./googleclouddialogflowcxv3versionvariantsvariant";


// GoogleCloudDialogflowCxV3VersionVariants
/** 
 * A list of flow version variants.
**/
export class GoogleCloudDialogflowCxV3VersionVariants extends SpeakeasyBase {
  @Metadata({ data: "json, name=variants", elemType: shared.GoogleCloudDialogflowCxV3VersionVariantsVariant })
  variants?: GoogleCloudDialogflowCxV3VersionVariantsVariant[];
}
