import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An account covered by a hold. This structure is immutable. It can be an individual account or a Google Group, depending on the service. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export declare class HeldAccount extends SpeakeasyBase {
    accountId?: string;
    email?: string;
    firstName?: string;
    holdTime?: string;
    lastName?: string;
}
