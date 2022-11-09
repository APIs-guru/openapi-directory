import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupContentDetails } from "./groupcontentdetails";
import { Errors } from "./errors";
import { GroupSnippet } from "./groupsnippet";
/**
 * A group.
**/
export declare class Group extends SpeakeasyBase {
    contentDetails?: GroupContentDetails;
    errors?: Errors;
    etag?: string;
    id?: string;
    kind?: string;
    snippet?: GroupSnippet;
}
