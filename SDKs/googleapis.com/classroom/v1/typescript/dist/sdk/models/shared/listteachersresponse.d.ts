import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Teacher } from "./teacher";
/**
 * Response when listing teachers.
**/
export declare class ListTeachersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    teachers?: Teacher[];
}
