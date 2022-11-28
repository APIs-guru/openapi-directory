import { SpeakeasyBase } from "../../../internal/utils";
import { CustomClass } from "./customclass";
/**
 * Message returned to the client by the `ListCustomClasses` method.
**/
export declare class ListCustomClassesResponse extends SpeakeasyBase {
    customClasses?: CustomClass[];
    nextPageToken?: string;
}
