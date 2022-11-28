import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode401SbsEnum } from "./messagecode401sbsenum";
export declare class TppMessage401Sbs extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode401SbsEnum;
    path?: string;
    text?: string;
}
