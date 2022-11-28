import { SpeakeasyBase } from "../../../internal/utils";
import { PhotoResponse } from "./photoresponse";
/**
 * Response to batch update of metadata of one or more Photos.
**/
export declare class BatchUpdatePhotosResponse extends SpeakeasyBase {
    results?: PhotoResponse[];
}
