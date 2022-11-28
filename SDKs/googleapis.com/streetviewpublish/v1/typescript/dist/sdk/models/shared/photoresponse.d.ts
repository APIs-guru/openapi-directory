import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
import { Status } from "./status";
/**
 * Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.
**/
export declare class PhotoResponse extends SpeakeasyBase {
    photo?: Photo;
    status?: Status;
}
