import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode404AisEnum } from "./messagecode404aisenum";
export declare class TppMessage404Ais extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode404AisEnum;
    path?: string;
    text?: string;
}
