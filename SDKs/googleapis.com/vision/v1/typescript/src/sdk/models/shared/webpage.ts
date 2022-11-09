import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebImage } from "./webimage";
import { WebImage } from "./webimage";


// WebPage
/** 
 * Metadata for web pages.
**/
export class WebPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullMatchingImages", elemType: shared.WebImage })
  fullMatchingImages?: WebImage[];

  @Metadata({ data: "json, name=pageTitle" })
  pageTitle?: string;

  @Metadata({ data: "json, name=partialMatchingImages", elemType: shared.WebImage })
  partialMatchingImages?: WebImage[];

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
