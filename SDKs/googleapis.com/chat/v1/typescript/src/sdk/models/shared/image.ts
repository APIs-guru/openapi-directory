import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnClick } from "./onclick";



// Image
/** 
 * An image that is specified by a URL and can have an onclick action.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectRatio" })
  aspectRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=onClick" })
  onClick?: OnClick;
}
