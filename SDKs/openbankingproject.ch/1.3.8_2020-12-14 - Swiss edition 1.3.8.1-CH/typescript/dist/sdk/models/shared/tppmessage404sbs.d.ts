import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode404SbsEnum } from "./messagecode404sbsenum";
export declare class TppMessage404Sbs extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode404SbsEnum;
    path?: string;
    text?: string;
}
