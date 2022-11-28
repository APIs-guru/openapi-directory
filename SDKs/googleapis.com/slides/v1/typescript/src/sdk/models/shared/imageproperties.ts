import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CropProperties } from "./cropproperties";
import { Link } from "./link";
import { Outline } from "./outline";
import { Recolor } from "./recolor";
import { Shadow } from "./shadow";



// ImageProperties
/** 
 * The properties of the Image.
**/
export class ImageProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brightness" })
  brightness?: number;

  @SpeakeasyMetadata({ data: "json, name=contrast" })
  contrast?: number;

  @SpeakeasyMetadata({ data: "json, name=cropProperties" })
  cropProperties?: CropProperties;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: Link;

  @SpeakeasyMetadata({ data: "json, name=outline" })
  outline?: Outline;

  @SpeakeasyMetadata({ data: "json, name=recolor" })
  recolor?: Recolor;

  @SpeakeasyMetadata({ data: "json, name=shadow" })
  shadow?: Shadow;

  @SpeakeasyMetadata({ data: "json, name=transparency" })
  transparency?: number;
}
