import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Subscription } from "./subscription";
export declare class Subscriptions extends SpeakeasyBase {
    atContext: string;
    id: string;
    lastEventId: string;
    subscriptions: Subscription[];
    type: string;
}
