import { SpeakeasyBase } from "../../../internal/utils";
import { AccountInput } from "./account";
import { AccountsCustomBatchRequestEntryLinkRequest } from "./accountscustombatchrequestentrylinkrequest";
/**
 * A batch entry encoding a single non-batch accounts request.
**/
export declare class AccountsCustomBatchRequestEntryInput extends SpeakeasyBase {
    account?: AccountInput;
    accountId?: string;
    batchId?: number;
    force?: boolean;
    labelIds?: string[];
    linkRequest?: AccountsCustomBatchRequestEntryLinkRequest;
    merchantId?: string;
    method?: string;
    overwrite?: boolean;
    view?: string;
}
