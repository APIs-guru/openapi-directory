import { SpeakeasyBase } from "../../../internal/utils";
import { UserAction } from "./useraction";
/**
 * A notification delivered by the API.
**/
export declare class Notification extends SpeakeasyBase {
    collection?: string;
    itemId?: string;
    operation?: string;
    userActions?: UserAction[];
    userToken?: string;
    verifyToken?: string;
}
