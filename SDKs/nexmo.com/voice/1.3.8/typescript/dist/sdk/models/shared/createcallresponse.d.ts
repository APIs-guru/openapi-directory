import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectionEnum } from "./directionenum";
export declare class CreateCallResponse extends SpeakeasyBase {
    conversationUuid?: string;
    direction?: DirectionEnum;
    status?: string;
    uuid?: string;
}
