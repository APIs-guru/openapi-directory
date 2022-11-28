import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { AccountsCustomBatchRequestEntryLinkRequest } from "./accountscustombatchrequestentrylinkrequest";



// AccountsCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch accounts request.
**/
export class AccountsCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: Account;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=linkRequest" })
  linkRequest?: AccountsCustomBatchRequestEntryLinkRequest;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=overwrite" })
  overwrite?: boolean;
}
