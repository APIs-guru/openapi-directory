import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A reply to a comment on a file.
**/
export declare class Reply extends SpeakeasyBase {
    action?: string;
    author?: User;
    content?: string;
    createdTime?: Date;
    deleted?: boolean;
    htmlContent?: string;
    id?: string;
    kind?: string;
    modifiedTime?: Date;
}
