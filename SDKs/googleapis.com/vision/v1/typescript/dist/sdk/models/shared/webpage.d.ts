import { SpeakeasyBase } from "../../../internal/utils";
import { WebImage } from "./webimage";
/**
 * Metadata for web pages.
**/
export declare class WebPage extends SpeakeasyBase {
    fullMatchingImages?: WebImage[];
    pageTitle?: string;
    partialMatchingImages?: WebImage[];
    score?: number;
    url?: string;
}
