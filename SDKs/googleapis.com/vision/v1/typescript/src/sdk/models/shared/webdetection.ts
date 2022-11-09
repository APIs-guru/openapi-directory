import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebLabel } from "./weblabel";
import { WebImage } from "./webimage";
import { WebPage } from "./webpage";
import { WebImage } from "./webimage";
import { WebImage } from "./webimage";
import { WebEntity } from "./webentity";


// WebDetection
/** 
 * Relevant information for the image from the Internet.
**/
export class WebDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=bestGuessLabels", elemType: shared.WebLabel })
  bestGuessLabels?: WebLabel[];

  @Metadata({ data: "json, name=fullMatchingImages", elemType: shared.WebImage })
  fullMatchingImages?: WebImage[];

  @Metadata({ data: "json, name=pagesWithMatchingImages", elemType: shared.WebPage })
  pagesWithMatchingImages?: WebPage[];

  @Metadata({ data: "json, name=partialMatchingImages", elemType: shared.WebImage })
  partialMatchingImages?: WebImage[];

  @Metadata({ data: "json, name=visuallySimilarImages", elemType: shared.WebImage })
  visuallySimilarImages?: WebImage[];

  @Metadata({ data: "json, name=webEntities", elemType: shared.WebEntity })
  webEntities?: WebEntity[];
}
