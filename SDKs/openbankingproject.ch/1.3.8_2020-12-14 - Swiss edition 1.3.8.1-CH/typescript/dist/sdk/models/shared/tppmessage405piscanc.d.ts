import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode405PisCancEnum } from "./messagecode405piscancenum";
export declare class TppMessage405PisCanc extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode405PisCancEnum;
    path?: string;
    text?: string;
}
