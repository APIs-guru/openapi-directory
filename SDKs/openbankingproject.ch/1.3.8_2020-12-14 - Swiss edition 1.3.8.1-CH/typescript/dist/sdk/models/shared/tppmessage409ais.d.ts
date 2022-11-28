import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode409AisEnum } from "./messagecode409aisenum";
export declare class TppMessage409Ais extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode409AisEnum;
    path?: string;
    text?: string;
}
