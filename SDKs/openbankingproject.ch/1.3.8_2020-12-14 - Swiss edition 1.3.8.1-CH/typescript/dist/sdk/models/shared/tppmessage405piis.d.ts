import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode405PiisEnum } from "./messagecode405piisenum";
export declare class TppMessage405Piis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode405PiisEnum;
    path?: string;
    text?: string;
}
