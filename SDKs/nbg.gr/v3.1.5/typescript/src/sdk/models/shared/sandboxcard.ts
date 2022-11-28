import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SandboxCardInfo } from "./sandboxcardinfo";
import { SandboxParty } from "./sandboxparty";
import { SandboxStatement } from "./sandboxstatement";
import { SandboxTransaction } from "./sandboxtransaction";



// SandboxCard
/** 
 * Sandbox card
**/
export class SandboxCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: SandboxCardInfo;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party?: SandboxParty;

  @SpeakeasyMetadata({ data: "json, name=statements", elemType: SandboxStatement })
  statements?: SandboxStatement[];

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: SandboxTransaction })
  transactions?: SandboxTransaction[];
}
