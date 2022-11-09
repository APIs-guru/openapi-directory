import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountImageImprovementsSettings } from "./accountimageimprovementssettings";


// AccountImageImprovements
/** 
 * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
**/
export class AccountImageImprovements extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountImageImprovementsSettings" })
  accountImageImprovementsSettings?: AccountImageImprovementsSettings;

  @Metadata({ data: "json, name=effectiveAllowAutomaticImageImprovements" })
  effectiveAllowAutomaticImageImprovements?: boolean;
}
