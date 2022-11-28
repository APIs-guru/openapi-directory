import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { AccountsCustomBatchRequestEntryLinkRequest } from "./accountscustombatchrequestentrylinkrequest";
/**
 * A batch entry encoding a single non-batch accounts request.
**/
export declare class AccountsCustomBatchRequestEntry extends SpeakeasyBase {
    account?: Account;
    accountId?: string;
    batchId?: number;
    force?: boolean;
    labelIds?: string[];
    linkRequest?: AccountsCustomBatchRequestEntryLinkRequest;
    merchantId?: string;
    method?: string;
    overwrite?: boolean;
}
