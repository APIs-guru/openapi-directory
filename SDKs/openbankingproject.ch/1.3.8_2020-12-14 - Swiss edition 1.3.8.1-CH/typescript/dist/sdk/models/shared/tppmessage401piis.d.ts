import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode401PiisEnum } from "./messagecode401piisenum";
export declare class TppMessage401Piis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode401PiisEnum;
    path?: string;
    text?: string;
}
