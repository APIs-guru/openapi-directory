import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountIdentifier } from "./accountidentifier";



export class AccountsAuthInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIdentifiers", elemType: AccountIdentifier })
  accountIdentifiers?: AccountIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
