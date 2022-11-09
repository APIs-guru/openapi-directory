import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CropProperties } from "./cropproperties";


// ImageProperties
/** 
 * The properties of an image.
**/
export class ImageProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=angle" })
  angle?: number;

  @Metadata({ data: "json, name=brightness" })
  brightness?: number;

  @Metadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @Metadata({ data: "json, name=contrast" })
  contrast?: number;

  @Metadata({ data: "json, name=cropProperties" })
  cropProperties?: CropProperties;

  @Metadata({ data: "json, name=sourceUri" })
  sourceUri?: string;

  @Metadata({ data: "json, name=transparency" })
  transparency?: number;
}
