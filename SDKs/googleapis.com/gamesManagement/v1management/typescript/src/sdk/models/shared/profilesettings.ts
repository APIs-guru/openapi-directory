import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProfileSettings
/** 
 * Profile settings
**/
export class ProfileSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=profileVisible" })
  profileVisible?: boolean;
}
