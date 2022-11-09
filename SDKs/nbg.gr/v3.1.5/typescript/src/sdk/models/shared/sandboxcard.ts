import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SandboxCardInfo } from "./sandboxcardinfo";
import { SandboxParty } from "./sandboxparty";
import { SandboxStatement } from "./sandboxstatement";
import { SandboxTransaction } from "./sandboxtransaction";


// SandboxCard
/** 
 * Sandbox card
**/
export class SandboxCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: SandboxCardInfo;

  @Metadata({ data: "json, name=party" })
  party?: SandboxParty;

  @Metadata({ data: "json, name=statements", elemType: shared.SandboxStatement })
  statements?: SandboxStatement[];

  @Metadata({ data: "json, name=transactions", elemType: shared.SandboxTransaction })
  transactions?: SandboxTransaction[];
}
