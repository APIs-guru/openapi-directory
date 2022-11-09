import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class BehavioralEventHttpCompletionRequest extends SpeakeasyBase {
    email?: string;
    eventName: string;
    objectId?: string;
    occurredAt?: Date;
    properties: Map<string, string>;
    utk?: string;
}
