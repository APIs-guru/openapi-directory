import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode405PisEnum } from "./messagecode405pisenum";
export declare class TppMessage405Pis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode405PisEnum;
    path?: string;
    text?: string;
}
