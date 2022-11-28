import { SpeakeasyBase } from "../../../internal/utils";
export declare class InitiatorJoined extends SpeakeasyBase {
    isSystem?: boolean;
    memberId?: string;
    userId?: string;
}
export declare class Initiator extends SpeakeasyBase {
    joined?: InitiatorJoined;
}
