import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";



// StretchedPictureFill
/** 
 * The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.
**/
export class StretchedPictureFill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Size;
}
