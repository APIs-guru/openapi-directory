import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode409PisEnum } from "./messagecode409pisenum";
export declare class TppMessage409Pis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode409PisEnum;
    path?: string;
    text?: string;
}
