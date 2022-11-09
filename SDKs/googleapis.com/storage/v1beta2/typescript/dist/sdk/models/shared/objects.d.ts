import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Object } from "./object";
/**
 * A list of objects.
**/
export declare class Objects extends SpeakeasyBase {
    items?: Object[];
    kind?: string;
    nextPageToken?: string;
    prefixes?: string[];
}
