import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Account } from "./account";
import { AccountsCustomBatchRequestEntryLinkRequest } from "./accountscustombatchrequestentrylinkrequest";


// AccountsCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch accounts request.
**/
export class AccountsCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: Account;

  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @Metadata({ data: "json, name=linkRequest" })
  linkRequest?: AccountsCustomBatchRequestEntryLinkRequest;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=overwrite" })
  overwrite?: boolean;
}
