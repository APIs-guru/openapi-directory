import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InQueryParam } from "./inqueryparam";
import { InHeader } from "./inheader";
import { InCookie } from "./incookie";
import { MappingSettings } from "./mappingsettings";


// TransformSettings
/** 
 * Settings to transform a JWT token and its location
**/
export class TransformSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location: any;

  @Metadata({ data: "json, name=mappingSettings" })
  mappingSettings: MappingSettings;
}
