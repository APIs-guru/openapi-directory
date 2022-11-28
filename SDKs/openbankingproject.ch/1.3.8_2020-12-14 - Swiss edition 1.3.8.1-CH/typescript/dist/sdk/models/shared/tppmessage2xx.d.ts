import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode2XxEnum } from "./messagecode2xxenum";
export declare class TppMessage2Xx extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode2XxEnum;
    path?: string;
    text?: string;
}
