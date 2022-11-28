import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode404PisEnum } from "./messagecode404pisenum";
export declare class TppMessage404Pis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode404PisEnum;
    path?: string;
    text?: string;
}
