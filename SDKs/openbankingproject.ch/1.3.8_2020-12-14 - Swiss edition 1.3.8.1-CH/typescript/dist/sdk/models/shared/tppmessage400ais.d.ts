import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode400AisEnum } from "./messagecode400aisenum";
export declare class TppMessage400Ais extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode400AisEnum;
    path?: string;
    text?: string;
}
