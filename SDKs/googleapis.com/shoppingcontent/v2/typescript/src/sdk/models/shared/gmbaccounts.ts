import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GmbAccountsGmbAccount } from "./gmbaccountsgmbaccount";



export class GmbAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=gmbAccounts", elemType: GmbAccountsGmbAccount })
  gmbAccounts?: GmbAccountsGmbAccount[];
}
