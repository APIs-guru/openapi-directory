import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountInput } from "./account";
import { AccountsCustomBatchRequestEntryLinkRequest } from "./accountscustombatchrequestentrylinkrequest";



// AccountsCustomBatchRequestEntryInput
/** 
 * A batch entry encoding a single non-batch accounts request.
**/
export class AccountsCustomBatchRequestEntryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: AccountInput;

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

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: string;
}
