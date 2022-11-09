import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Links } from "./links";
import { KeysWithPrivateKey } from "./keyswithprivatekey";
import { Messages } from "./messages";
import { Voice } from "./voice";
export declare class ApplicationCreated extends SpeakeasyBase {
    links?: Links;
    id?: string;
    keys?: KeysWithPrivateKey;
    messages: Messages;
    name: string;
    voice: Voice;
}
