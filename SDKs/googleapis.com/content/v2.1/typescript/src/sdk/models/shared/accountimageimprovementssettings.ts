import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountImageImprovementsSettings
/** 
 * Settings for the Automatic Image Improvements.
**/
export class AccountImageImprovementsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAutomaticImageImprovements" })
  allowAutomaticImageImprovements?: boolean;
}
