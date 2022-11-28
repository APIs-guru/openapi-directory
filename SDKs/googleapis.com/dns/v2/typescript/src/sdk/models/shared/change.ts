import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecordSet } from "./resourcerecordset";


export enum ChangeStatusEnum {
    Pending = "PENDING",
    Done = "DONE"
}


// Change
/** 
 * A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.
**/
export class Change extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additions", elemType: ResourceRecordSet })
  additions?: ResourceRecordSet[];

  @SpeakeasyMetadata({ data: "json, name=deletions", elemType: ResourceRecordSet })
  deletions?: ResourceRecordSet[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isServing" })
  isServing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChangeStatusEnum;
}
