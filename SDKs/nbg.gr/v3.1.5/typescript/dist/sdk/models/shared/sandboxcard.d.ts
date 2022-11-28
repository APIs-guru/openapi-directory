import { SpeakeasyBase } from "../../../internal/utils";
import { SandboxCardInfo } from "./sandboxcardinfo";
import { SandboxParty } from "./sandboxparty";
import { SandboxStatement } from "./sandboxstatement";
import { SandboxTransaction } from "./sandboxtransaction";
/**
 * Sandbox card
**/
export declare class SandboxCard extends SpeakeasyBase {
    info?: SandboxCardInfo;
    party?: SandboxParty;
    statements?: SandboxStatement[];
    transactions?: SandboxTransaction[];
}
