import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode406AisEnum } from "./messagecode406aisenum";
export declare class TppMessage406Ais extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode406AisEnum;
    path?: string;
    text?: string;
}
