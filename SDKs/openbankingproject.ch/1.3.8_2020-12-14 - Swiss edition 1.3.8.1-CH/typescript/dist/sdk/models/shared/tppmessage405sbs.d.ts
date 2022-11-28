import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode405SbsEnum } from "./messagecode405sbsenum";
export declare class TppMessage405Sbs extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode405SbsEnum;
    path?: string;
    text?: string;
}
