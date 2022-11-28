import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CropProperties } from "./cropproperties";



// ImageProperties
/** 
 * The properties of an image.
**/
export class ImageProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=angle" })
  angle?: number;

  @SpeakeasyMetadata({ data: "json, name=brightness" })
  brightness?: number;

  @SpeakeasyMetadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=contrast" })
  contrast?: number;

  @SpeakeasyMetadata({ data: "json, name=cropProperties" })
  cropProperties?: CropProperties;

  @SpeakeasyMetadata({ data: "json, name=sourceUri" })
  sourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=transparency" })
  transparency?: number;
}
