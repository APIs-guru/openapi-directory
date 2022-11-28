import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Stores the result of an incoming quick connect request.
**/
export declare class QuickConnectResult extends SpeakeasyBase {
    authenticated?: boolean;
    authentication?: string;
    code?: string;
    dateAdded?: Date;
    error?: string;
    secret?: string;
}
