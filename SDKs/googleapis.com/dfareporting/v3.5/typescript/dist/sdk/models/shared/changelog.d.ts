import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a change that a user has made to a resource.
**/
export declare class ChangeLog extends SpeakeasyBase {
    accountId?: string;
    action?: string;
    changeTime?: Date;
    fieldName?: string;
    id?: string;
    kind?: string;
    newValue?: string;
    objectId?: string;
    objectType?: string;
    oldValue?: string;
    subaccountId?: string;
    transactionId?: string;
    userProfileId?: string;
    userProfileName?: string;
}
