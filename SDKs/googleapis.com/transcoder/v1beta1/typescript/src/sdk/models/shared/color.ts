import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Color
/** 
 * Color preprocessing configuration.
**/
export class Color extends SpeakeasyBase {
  @Metadata({ data: "json, name=brightness" })
  brightness?: number;

  @Metadata({ data: "json, name=contrast" })
  contrast?: number;

  @Metadata({ data: "json, name=saturation" })
  saturation?: number;
}
