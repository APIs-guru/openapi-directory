import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A restriction for accessing the content of the file.
**/
export declare class ContentRestriction extends SpeakeasyBase {
    readOnly?: boolean;
    reason?: string;
    restrictingUser?: User;
    restrictionDate?: Date;
    type?: string;
}
