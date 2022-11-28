import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode405AisEnum } from "./messagecode405aisenum";
export declare class TppMessage405Ais extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode405AisEnum;
    path?: string;
    text?: string;
}
