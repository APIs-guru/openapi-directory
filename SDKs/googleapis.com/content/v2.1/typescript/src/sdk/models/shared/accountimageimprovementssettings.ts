import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountImageImprovementsSettings
/** 
 * Settings for the Automatic Image Improvements.
**/
export class AccountImageImprovementsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAutomaticImageImprovements" })
  allowAutomaticImageImprovements?: boolean;
}
