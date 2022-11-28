import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";



// GoogleAppsCardV1Image
/** 
 * An image that is specified by a URL and can have an `onClick` action.
**/
export class GoogleAppsCardV1Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altText" })
  altText?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=onClick" })
  onClick?: GoogleAppsCardV1OnClick;
}
