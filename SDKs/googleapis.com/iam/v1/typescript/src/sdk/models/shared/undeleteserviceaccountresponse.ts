import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccount } from "./serviceaccount";



export class UndeleteServiceAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=restoredAccount" })
  restoredAccount?: ServiceAccount;
}
