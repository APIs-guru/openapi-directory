import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Keys } from "./keys";
import { Messages } from "./messages";
import { Voice } from "./voice";
export declare class Application extends SpeakeasyBase {
    links?: Links;
    id?: string;
    keys?: Keys;
    messages: Messages;
    name: string;
    voice: Voice;
}
