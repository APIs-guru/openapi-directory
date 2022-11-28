import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
/**
 * An image that is specified by a URL and can have an `onClick` action.
**/
export declare class GoogleAppsCardV1Image extends SpeakeasyBase {
    altText?: string;
    imageUrl?: string;
    onClick?: GoogleAppsCardV1OnClick;
}
