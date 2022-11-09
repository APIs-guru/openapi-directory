import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GmbAccountsGmbAccount } from "./gmbaccountsgmbaccount";


export class GmbAccounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=gmbAccounts", elemType: shared.GmbAccountsGmbAccount })
  gmbAccounts?: GmbAccountsGmbAccount[];
}
