import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";


// LightSettings
/** 
 * Settings to control notification LED.
**/
export class LightSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: Color;

  @Metadata({ data: "json, name=lightOffDuration" })
  lightOffDuration?: string;

  @Metadata({ data: "json, name=lightOnDuration" })
  lightOnDuration?: string;
}
