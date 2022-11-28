import { SpeakeasyBase } from "../../../internal/utils";
import { TppMessageCategoryEnum } from "./tppmessagecategoryenum";
import { MessageCode429AisEnum } from "./messagecode429aisenum";
export declare class TppMessage429Ais extends SpeakeasyBase {
    category: TppMessageCategoryEnum;
    code: MessageCode429AisEnum;
    path?: string;
    text?: string;
}
