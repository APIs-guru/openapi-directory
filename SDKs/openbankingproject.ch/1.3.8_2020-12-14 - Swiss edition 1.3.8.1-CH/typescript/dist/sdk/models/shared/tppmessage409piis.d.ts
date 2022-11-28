import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode409PiisEnum } from "./messagecode409piisenum";
export declare class TppMessage409Piis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode409PiisEnum;
    path?: string;
    text?: string;
}
