import { SpeakeasyBase } from "../../../internal/utils";
import { PhotoId } from "./photoid";
/**
 * A connection is the link from a source photo to a destination photo.
**/
export declare class Connection extends SpeakeasyBase {
    target?: PhotoId;
}
