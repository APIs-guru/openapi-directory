import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode403SbsEnum } from "./messagecode403sbsenum";
export declare class TppMessage403Sbs extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode403SbsEnum;
    path?: string;
    text?: string;
}
