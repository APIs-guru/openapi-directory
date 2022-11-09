import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=brightness" })
  brightness?: number;

  @Metadata({ data: "json, name=contrast" })
  contrast?: number;

  @Metadata({ data: "json, name=cropProperties" })
  cropProperties?: CropProperties;

  @Metadata({ data: "json, name=link" })
  link?: Link;

  @Metadata({ data: "json, name=outline" })
  outline?: Outline;

  @Metadata({ data: "json, name=recolor" })
  recolor?: Recolor;

  @Metadata({ data: "json, name=shadow" })
  shadow?: Shadow;

  @Metadata({ data: "json, name=transparency" })
  transparency?: number;
}
