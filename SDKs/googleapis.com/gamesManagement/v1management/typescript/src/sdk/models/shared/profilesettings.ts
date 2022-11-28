import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProfileSettings
/** 
 * Profile settings
**/
export class ProfileSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=profileVisible" })
  profileVisible?: boolean;
}
