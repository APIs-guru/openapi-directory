import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Size } from "./size";


// StretchedPictureFill
/** 
 * The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.
**/
export class StretchedPictureFill extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: Size;
}
