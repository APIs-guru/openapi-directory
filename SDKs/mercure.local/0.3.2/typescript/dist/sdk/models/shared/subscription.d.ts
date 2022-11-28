import { SpeakeasyBase } from "../../../internal/utils";
export declare class Subscription extends SpeakeasyBase {
    atContext?: string;
    active: boolean;
    id: string;
    lastEventId?: string;
    payload?: Map<string, any>;
    subscriber: string;
    topic: string;
    type: string;
}
