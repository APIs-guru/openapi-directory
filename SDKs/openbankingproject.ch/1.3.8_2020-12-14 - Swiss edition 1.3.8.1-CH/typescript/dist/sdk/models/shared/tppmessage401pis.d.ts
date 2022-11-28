import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode401PisEnum } from "./messagecode401pisenum";
export declare class TppMessage401Pis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode401PisEnum;
    path?: string;
    text?: string;
}
