import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Color
/** 
 * Color preprocessing configuration.
**/
export class Color extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brightness" })
  brightness?: number;

  @SpeakeasyMetadata({ data: "json, name=contrast" })
  contrast?: number;

  @SpeakeasyMetadata({ data: "json, name=saturation" })
  saturation?: number;
}
