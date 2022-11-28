import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode401AisEnum } from "./messagecode401aisenum";
export declare class TppMessage401Ais extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode401AisEnum;
    path?: string;
    text?: string;
}
