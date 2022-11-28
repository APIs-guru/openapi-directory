import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
/**
 * Response to list all photos that belong to a user.
**/
export declare class ListPhotosResponse extends SpeakeasyBase {
    nextPageToken?: string;
    photos?: Photo[];
}
