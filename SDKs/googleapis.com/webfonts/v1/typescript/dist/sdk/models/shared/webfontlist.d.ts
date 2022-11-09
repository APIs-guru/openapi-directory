import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Webfont } from "./webfont";
/**
 * Response containing the list of fonts currently served by the Google Fonts API.
**/
export declare class WebfontList extends SpeakeasyBase {
    items?: Webfont[];
    kind?: string;
}
