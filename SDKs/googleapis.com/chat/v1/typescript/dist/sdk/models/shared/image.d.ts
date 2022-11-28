import { SpeakeasyBase } from "../../../internal/utils";
import { OnClick } from "./onclick";
/**
 * An image that is specified by a URL and can have an onclick action.
**/
export declare class Image extends SpeakeasyBase {
    aspectRatio?: number;
    imageUrl?: string;
    onClick?: OnClick;
}
