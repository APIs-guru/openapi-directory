import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceImage } from "./referenceimage";
/**
 * Response message for the `ListReferenceImages` method.
**/
export declare class ListReferenceImagesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    referenceImages?: ReferenceImage[];
}
