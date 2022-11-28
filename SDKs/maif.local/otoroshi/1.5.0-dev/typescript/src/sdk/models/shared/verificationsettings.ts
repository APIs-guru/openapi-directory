import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MappingSettings } from "./mappingsettings";



// VerificationSettings
/** 
 * Settings to verify the value of JWT token fields
**/
export class VerificationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mappingSettings" })
  mappingSettings?: MappingSettings;
}
