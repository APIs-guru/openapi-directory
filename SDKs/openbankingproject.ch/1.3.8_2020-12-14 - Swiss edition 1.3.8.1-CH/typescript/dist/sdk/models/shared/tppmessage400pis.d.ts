import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode400PisEnum } from "./messagecode400pisenum";
export declare class TppMessage400Pis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode400PisEnum;
    path?: string;
    text?: string;
}
