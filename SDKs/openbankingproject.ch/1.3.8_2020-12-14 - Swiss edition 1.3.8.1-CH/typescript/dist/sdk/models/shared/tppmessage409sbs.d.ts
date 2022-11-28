import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode409SbsEnum } from "./messagecode409sbsenum";
export declare class TppMessage409Sbs extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode409SbsEnum;
    path?: string;
    text?: string;
}
