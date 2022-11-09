import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceAccount } from "./serviceaccount";


export class UndeleteServiceAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=restoredAccount" })
  restoredAccount?: ServiceAccount;
}
