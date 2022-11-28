import { SpeakeasyBase } from "../../../internal/utils";
import { MemberStateEnum } from "./memberstateenum";
/**
 * Retrieve Events Response Payload Object Item
**/
export declare class EventRetrieved extends SpeakeasyBase {
    body: Map<string, any>;
    from?: string;
    href: string;
    id: string;
    state?: MemberStateEnum;
    timestamp: string;
    to?: string;
    type: string;
}
