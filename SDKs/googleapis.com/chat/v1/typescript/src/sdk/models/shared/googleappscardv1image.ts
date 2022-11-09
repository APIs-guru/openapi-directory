import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";


// GoogleAppsCardV1Image
/** 
 * An image that is specified by a URL and can have an `onClick` action.
**/
export class GoogleAppsCardV1Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=altText" })
  altText?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=onClick" })
  onClick?: GoogleAppsCardV1OnClick;
}
