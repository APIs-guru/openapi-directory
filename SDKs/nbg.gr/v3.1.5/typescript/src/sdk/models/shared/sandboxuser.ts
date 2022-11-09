import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SandboxBankAccount } from "./sandboxbankaccount";
import { SandboxCard } from "./sandboxcard";
import { SandboxRetryCacheEntry } from "./sandboxretrycacheentry";


// SandboxUser
/** 
 * User data
**/
export class SandboxUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.SandboxBankAccount })
  accounts?: SandboxBankAccount[];

  @Metadata({ data: "json, name=cards", elemType: shared.SandboxCard })
  cards?: SandboxCard[];

  @Metadata({ data: "json, name=retryCacheEntries", elemType: shared.SandboxRetryCacheEntry })
  retryCacheEntries?: SandboxRetryCacheEntry[];

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
