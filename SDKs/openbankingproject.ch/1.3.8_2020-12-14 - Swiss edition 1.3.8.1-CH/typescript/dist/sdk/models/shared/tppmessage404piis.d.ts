import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode404PiisEnum } from "./messagecode404piisenum";
export declare class TppMessage404Piis extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode404PiisEnum;
    path?: string;
    text?: string;
}
