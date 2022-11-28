import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebLabel } from "./weblabel";
import { WebImage } from "./webimage";
import { WebPage } from "./webpage";
import { WebEntity } from "./webentity";



// WebDetection
/** 
 * Relevant information for the image from the Internet.
**/
export class WebDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestGuessLabels", elemType: WebLabel })
  bestGuessLabels?: WebLabel[];

  @SpeakeasyMetadata({ data: "json, name=fullMatchingImages", elemType: WebImage })
  fullMatchingImages?: WebImage[];

  @SpeakeasyMetadata({ data: "json, name=pagesWithMatchingImages", elemType: WebPage })
  pagesWithMatchingImages?: WebPage[];

  @SpeakeasyMetadata({ data: "json, name=partialMatchingImages", elemType: WebImage })
  partialMatchingImages?: WebImage[];

  @SpeakeasyMetadata({ data: "json, name=visuallySimilarImages", elemType: WebImage })
  visuallySimilarImages?: WebImage[];

  @SpeakeasyMetadata({ data: "json, name=webEntities", elemType: WebEntity })
  webEntities?: WebEntity[];
}
