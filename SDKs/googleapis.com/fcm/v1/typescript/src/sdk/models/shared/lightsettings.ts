import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";



// LightSettings
/** 
 * Settings to control notification LED.
**/
export class LightSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=lightOffDuration" })
  lightOffDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=lightOnDuration" })
  lightOnDuration?: string;
}
