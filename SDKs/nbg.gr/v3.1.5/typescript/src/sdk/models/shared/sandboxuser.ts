import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SandboxBankAccount } from "./sandboxbankaccount";
import { SandboxCard } from "./sandboxcard";
import { SandboxRetryCacheEntry } from "./sandboxretrycacheentry";



// SandboxUser
/** 
 * User data
**/
export class SandboxUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: SandboxBankAccount })
  accounts?: SandboxBankAccount[];

  @SpeakeasyMetadata({ data: "json, name=cards", elemType: SandboxCard })
  cards?: SandboxCard[];

  @SpeakeasyMetadata({ data: "json, name=retryCacheEntries", elemType: SandboxRetryCacheEntry })
  retryCacheEntries?: SandboxRetryCacheEntry[];

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
