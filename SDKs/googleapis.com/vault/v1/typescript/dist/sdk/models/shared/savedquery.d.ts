import { SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";
/**
 * The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export declare class SavedQuery extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    matterId?: string;
    query?: Query;
    savedQueryId?: string;
}
