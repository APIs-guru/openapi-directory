import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyRangeDataDiskAssignment } from "./keyrangedatadiskassignment";



// StreamingComputationRanges
/** 
 * Describes full or partial data disk assignment information of the computation ranges.
**/
export class StreamingComputationRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computationId" })
  computationId?: string;

  @SpeakeasyMetadata({ data: "json, name=rangeAssignments", elemType: KeyRangeDataDiskAssignment })
  rangeAssignments?: KeyRangeDataDiskAssignment[];
}
