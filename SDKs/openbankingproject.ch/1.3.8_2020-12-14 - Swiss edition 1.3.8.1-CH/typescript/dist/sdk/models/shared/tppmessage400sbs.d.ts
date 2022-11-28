import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode400SbsEnum } from "./messagecode400sbsenum";
export declare class TppMessage400Sbs extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode400SbsEnum;
    path?: string;
    text?: string;
}
