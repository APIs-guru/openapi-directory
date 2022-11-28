import { SpeakeasyBase } from "../../../internal/utils";
import { WebLabel } from "./weblabel";
import { WebImage } from "./webimage";
import { WebPage } from "./webpage";
import { WebEntity } from "./webentity";
/**
 * Relevant information for the image from the Internet.
**/
export declare class WebDetection extends SpeakeasyBase {
    bestGuessLabels?: WebLabel[];
    fullMatchingImages?: WebImage[];
    pagesWithMatchingImages?: WebPage[];
    partialMatchingImages?: WebImage[];
    visuallySimilarImages?: WebImage[];
    webEntities?: WebEntity[];
}
