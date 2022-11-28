import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode403PisEnum } from "./messagecode403pisenum";
export declare class TppMessage403Pis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode403PisEnum;
    path?: string;
    text?: string;
}
