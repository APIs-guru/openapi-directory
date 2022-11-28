import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InQueryParam } from "./inqueryparam";
import { InHeader } from "./inheader";
import { InCookie } from "./incookie";
import { MappingSettings } from "./mappingsettings";



// TransformSettings
/** 
 * Settings to transform a JWT token and its location
**/
export class TransformSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location: any;

  @SpeakeasyMetadata({ data: "json, name=mappingSettings" })
  mappingSettings: MappingSettings;
}
