import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebImage } from "./webimage";



// WebPage
/** 
 * Metadata for web pages.
**/
export class WebPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullMatchingImages", elemType: WebImage })
  fullMatchingImages?: WebImage[];

  @SpeakeasyMetadata({ data: "json, name=pageTitle" })
  pageTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=partialMatchingImages", elemType: WebImage })
  partialMatchingImages?: WebImage[];

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
