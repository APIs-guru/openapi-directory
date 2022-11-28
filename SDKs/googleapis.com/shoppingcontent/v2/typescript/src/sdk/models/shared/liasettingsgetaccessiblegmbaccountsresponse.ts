import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GmbAccountsGmbAccount } from "./gmbaccountsgmbaccount";



export class LiasettingsGetAccessibleGmbAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=gmbAccounts", elemType: GmbAccountsGmbAccount })
  gmbAccounts?: GmbAccountsGmbAccount[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
