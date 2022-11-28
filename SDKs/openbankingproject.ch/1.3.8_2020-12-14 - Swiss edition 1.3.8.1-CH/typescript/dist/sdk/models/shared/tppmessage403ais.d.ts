import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode403AisEnum } from "./messagecode403aisenum";
export declare class TppMessage403Ais extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode403AisEnum;
    path?: string;
    text?: string;
}
