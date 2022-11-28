import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * Response to list all photo sequences that belong to a user.
**/
export declare class ListPhotoSequencesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    photoSequences?: Operation[];
}
