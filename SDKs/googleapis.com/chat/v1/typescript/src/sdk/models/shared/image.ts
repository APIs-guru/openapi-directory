import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OnClick } from "./onclick";


// Image
/** 
 * An image that is specified by a URL and can have an onclick action.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspectRatio" })
  aspectRatio?: number;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=onClick" })
  onClick?: OnClick;
}
