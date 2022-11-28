import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecordSet } from "./resourcerecordset";
export declare enum ChangeStatusEnum {
    Pending = "pending",
    Done = "done"
}
/**
 * A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.
**/
export declare class Change extends SpeakeasyBase {
    additions?: ResourceRecordSet[];
    deletions?: ResourceRecordSet[];
    id?: string;
    isServing?: boolean;
    kind?: string;
    startTime?: string;
    status?: ChangeStatusEnum;
}
