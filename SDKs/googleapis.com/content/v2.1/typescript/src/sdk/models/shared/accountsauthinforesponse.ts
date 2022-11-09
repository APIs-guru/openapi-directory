import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountIdentifier } from "./accountidentifier";


export class AccountsAuthInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountIdentifiers", elemType: shared.AccountIdentifier })
  accountIdentifiers?: AccountIdentifier[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
