import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MappingSettings } from "./mappingsettings";


// VerificationSettings
/** 
 * Settings to verify the value of JWT token fields
**/
export class VerificationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields: Map<string, string>;

  @Metadata({ data: "json, name=mappingSettings" })
  mappingSettings?: MappingSettings;
}
