import { SpeakeasyBase } from "../../../internal/utils";
import { Annotation } from "./annotation";
/**
 * Lists the Annotations in the specified Annotation store.
**/
export declare class ListAnnotationsResponse extends SpeakeasyBase {
    annotations?: Annotation[];
    nextPageToken?: string;
}
