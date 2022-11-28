import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode403PiisEnum } from "./messagecode403piisenum";
export declare class TppMessage403Piis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode403PiisEnum;
    path?: string;
    text?: string;
}
