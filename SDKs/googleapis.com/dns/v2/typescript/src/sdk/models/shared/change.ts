import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceRecordSet } from "./resourcerecordset";
import { ResourceRecordSet } from "./resourcerecordset";

export enum ChangeStatusEnum {
    Pending = "PENDING"
,    Done = "DONE"
}


// Change
/** 
 * A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.
**/
export class Change extends SpeakeasyBase {
  @Metadata({ data: "json, name=additions", elemType: shared.ResourceRecordSet })
  additions?: ResourceRecordSet[];

  @Metadata({ data: "json, name=deletions", elemType: shared.ResourceRecordSet })
  deletions?: ResourceRecordSet[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isServing" })
  isServing?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: ChangeStatusEnum;
}
